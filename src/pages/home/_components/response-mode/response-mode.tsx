import { useState } from "react";
import { Radio } from "../../../../components/radio";
import { MdOutlineTextFields } from "react-icons/md";
import { SiAudiomack } from "react-icons/si";

export const ResponseMode: React.FC = () => {
  const [checkedOption, setCheckedOption] = useState<string>();

  return (
    <>
      <span className="text-blue-200 text-lg font-normal -mb-4">
        Response Mode:
      </span>
      <div className="border border-dashed border-blue-300 p-5 w-1/4 rounded-lg">
        <div className="flex justify-between gap-5 font-bold">
          <Radio
            name="response_mode"
            id="text"
            title="Text"
            value={"Text"}
            checked={checkedOption == "Text"}
            iconCheck={<MdOutlineTextFields color="white" size={24} />}
            iconChecked={
              <MdOutlineTextFields
                color="#3487ed"
                size={24}
                className="duration-200 transition-all"
              />
            }
            onChange={(e) => setCheckedOption(e.target.value)}
          />
          <Radio
            name="response_mode"
            id="audio"
            title="Audio"
            value={"Audio"}
            checked={checkedOption == "Audio"}
            iconCheck={<SiAudiomack color="white" size={26} />}
            iconChecked={
              <SiAudiomack
                color="#3487ed"
                size={26}
                className="duration-200 transition-all"
              />
            }
            onChange={(e) => setCheckedOption(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
