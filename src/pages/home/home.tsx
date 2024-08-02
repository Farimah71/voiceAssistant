import { BsMicFill } from "react-icons/bs";
import { Button } from "../../components/button";
import { ResponseMode } from "./_components/response-mode";
import { Header } from "../../components/layout/header";
import { Transcript } from "./_components/transcript";
import { useState } from "react";
import { Loading } from "../../components/UI/loading";
import { useAudio } from "../../hooks/audio-recorder";
import { AudioLoading } from "../../components/UI/audio-loading";
import { ResponseModeType } from "../../types/response-mode.type";

const Home: React.FC = () => {
  const [responseMode, setResponseMode] = useState<ResponseModeType>(null);
  const [transcript, setTranscript] = useState<string>("");

  const {
    startRecording,
    stopRecording,
    loading: { isPending, isListening, isPlaying },
  } = useAudio();

  const clickHandler = () => {
    setTranscript("");
    if (responseMode == "Audio") {
      isListening ? stopRecording() : startRecording();
    } else if (responseMode == "Text") {
      setTranscript("Text text test example");
    } else {
      alert("Please choose response mode.");
    }
  };

  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col gap-y-5 items-center justify-between p-10">
          <ResponseMode responseModeHandler={(mode) => setResponseMode(mode)} />

          {isPending && <Loading />}
          {isPlaying && <AudioLoading />}

          <Transcript text={transcript} />

          <Button
            title={<BsMicFill />}
            isListening={isListening}
            onClick={clickHandler}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
