import { BsMicFill } from "react-icons/bs";
import { Button } from "../../components/button";
import { Radio } from "../../components/radio";
import { MdOutlineRecordVoiceOver } from "react-icons/md";

const Home = () => {
  return (
    <main className="flex flex-col gap-y-5 items-center justify-between p-10">
      <div className="flex gap-x-2">
        <h1 className="text-3xl font-black text-blue-300 mb-8 brightness-50">
          Voice Assistance
        </h1>
        <MdOutlineRecordVoiceOver size={35} className="text-blue-500" />
      </div>

      <div className="relative border border-dashed p-3 w-1/5 rounded-md text-left my-10">
        <span className="text-blue-200 font-semibold absolute -top-7 left-0">
          Response Mode:
        </span>
        <Radio id="text" title="Text" value={"Text"} />
        <Radio id="audio" title="Audio" value={"Audio"} />
      </div>

      <span className="text-white text-lg my-5 invisible">
        Text Text textText Text text
      </span>

      <Button title={<BsMicFill />} className="mt-10" />
    </main>
  );
};

export default Home;
