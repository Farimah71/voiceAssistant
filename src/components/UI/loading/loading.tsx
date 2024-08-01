import { Audio } from "react-loader-spinner";

export const Loading: React.FC = () => {
  return (
    <Audio
      height="50"
      width="100"
      color="#70c4e6"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
};
