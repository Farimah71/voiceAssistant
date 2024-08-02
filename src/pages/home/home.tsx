import { BsMicFill } from "react-icons/bs";
import { Button } from "../../components/button";
import { ResponseMode } from "./_components/response-mode";
import { Header } from "../../components/layout/header";
import { Transcript } from "./_components/transcript";
import { useState } from "react";
import { Loading } from "../../components/UI/loading";

const Home: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(
    null
  );

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const newMediaRecorder = new MediaRecorder(stream);
      setMediaRecorder(newMediaRecorder);

      newMediaRecorder.ondataavailable = (event) => {
        setAudioChunks((prevChunks) => [...prevChunks, event.data]);
      };

      newMediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunks, {
          type: "audio/webm;codecs=opus",
        });
        console.log(audioBlob);
        console.log(audioURL);
        
        
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        const audio = new Audio(audioUrl);
        audio.play();
        
        playAudioBlob(audioUrl);
      };

      newMediaRecorder.start();
      // setAudioChunks([]);
      setIsRecording(true);
    } catch (error) {
      alert("No Microphone Was Found!");
    }
  };
  const playAudioBlob = (blobUrl: string) => {
    const audio = document.createElement("audio");
    audio.src = blobUrl;
    document.body.appendChild(audio);
    audio.play().catch((error) => console.error("Error playing audio:", error));
  };
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setIsRecording(false);
    }
  };

  const clickHandler = () => {
    setTranscript("");
    isRecording ? stopRecording() : startRecording();
  };

  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col gap-y-5 items-center justify-between p-10">
          <ResponseMode />

          {isRecording ? <Loading /> : <Transcript text={transcript} />}

          <Button title={<BsMicFill />} onClick={clickHandler} />
        </section>
      </main>
    </>
  );
};

export default Home;
