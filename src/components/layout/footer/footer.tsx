import { Link } from "react-router-dom";

export const Footer: React.FC = () => {
  return (
    <div className="text-gray-500 text-center w-full select-none">
      Developed By{" "}
      <Link
        className="text-gray-400"
        to="https://www.linkedin.com/in/farimah-fti"
        rel="noopener noreferrer"
        target="_blank"
      >
        Farimah
      </Link>
    </div>
  );
};
