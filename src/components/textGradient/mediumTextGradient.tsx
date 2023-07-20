import { CommonProps } from "../../definations";

const mediumTextGradient = ({ children }: CommonProps) => {
  return (
    <div
      className="font-medium text-transparent bg-clip-text 
        bg-gradient-to-r from-teal-500 to-violet-500"
    >
      {children}
    </div>
  );
};

export default mediumTextGradient;
