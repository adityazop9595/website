import { FaCut } from "react-icons/fa";

const ScissorDivider = () => {
  return (
    <div className="relative my-16 flex items-center justify-center">
      {/* Horizontal line */}
      <div className="absolute top-1/2 left-0 w-full border-t border-gray-300" />

      {/* Scissor icon with animation */}
      <div className="relative z-10 bg-white px-4">
        <FaCut className="text-2xl text-gray-600 animate-scissor" />
      </div>
    </div>
  );
};

export default ScissorDivider;
