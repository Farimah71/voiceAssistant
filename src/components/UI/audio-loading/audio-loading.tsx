import { Audio } from "react-loader-spinner";

export const AudioLoading: React.FC = () => {
  return (
    <Audio
      height="40"
      width="100"
      color="#91eded"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
};
