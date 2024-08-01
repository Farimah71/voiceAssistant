import { BsMicFill } from "react-icons/bs";
import { Button } from "../../components/button";
import { ResponseMode } from "./_components/response-mode";
import { Header } from "../../components/layout/header";
import { Transcript } from "./_components/transcript";
import { useState } from "react";
// import { Loading } from "../../components/UI/loading";

const Home: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");

  return (
    <>
      <Header />
      <main>
        <section className="flex flex-col gap-y-5 items-center justify-between p-10">
          <ResponseMode />

          {/* <Loading /> */}
          <Transcript text={transcript} />

          <Button title={<BsMicFill />} onClick={() => setTranscript("")} />
        </section>
      </main>
    </>
  );
};

export default Home;
