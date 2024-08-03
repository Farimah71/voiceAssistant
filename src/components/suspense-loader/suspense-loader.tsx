import { ImSpinner2 } from "react-icons/im";

export const SuspenseLoader: React.FC = () => {
  // ********** JSX ***********
  return (
    <div className="suspense-wrapper">
      <ImSpinner2 className="suspense-spinner" size={50} />
      <span className="suspense-text">Loading...</span>
    </div>
  );
};