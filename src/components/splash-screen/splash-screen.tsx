import { ImSpinner2 } from "react-icons/im";

export const SplashScreen: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-3 items-center w-full h-screen justify-center">
      <ImSpinner2 size={50} className="animate-spin text-light-blue" />
      <span className="text-light-blue text-xl italic">Loading...</span>
    </div>
  );
};
