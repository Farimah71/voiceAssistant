import { useState } from "react";
import { BsMicFill } from "react-icons/bs";
import { IoMicOffSharp } from "react-icons/io5";
import { Button } from "../../components/button";
import { ResponseMode } from "./_components/response-mode";
import { Header } from "../../components/layout/header";
import { Transcript } from "./_components/transcript";
import { Loading } from "../../components/UI/loading";
import { useAudio } from "../../hooks/useAudio";
import { AudioLoading } from "../../components/UI/audio-loading";
import { ResponseModeType } from "../../types/response-mode.type";

const Home: React.FC = () => {
  // ********** States ***********
  const [responseMode, setResponseMode] = useState<ResponseModeType>(null);

  // ********** Hooks ***********
  const {
    startRecording,
    stopRecording,
    textResponse,
    loading: { isPending, isListening, isPlaying },
  } = useAudio(responseMode);

  // ********** Functions ***********
  const clickHandler = () => {
    if (responseMode) {
      isListening ? stopRecording() : startRecording();
    } else {
      alert("Please choose response mode.");
    }
  };

  // ********** JSX ***********
  return (
    <>
      <Header title="Voice Assistant" />
      <main>
        <section className="flex flex-col gap-y-5 items-center justify-between p-10 min-h-96">
          <ResponseMode responseModeHandler={(mode) => setResponseMode(mode)} />

          {isPending && <Loading />}
          {isPlaying && <AudioLoading />}
          {textResponse && <Transcript text={textResponse} />}

          <Button
            buttonType="doubleState"
            titleStart={{ icon: <BsMicFill size={20} />, title: "Start" }}
            titleStop={{ icon: <IoMicOffSharp size={20} />, title: "Stop" }}
            isListening={isListening}
            disabled={(isPending as boolean) || (isPlaying as boolean)}
            onClick={clickHandler}
          />
        </section>
      </main>
    </>
  );
};

export default Home;
