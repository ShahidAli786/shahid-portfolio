import { CommonProps } from "../../definations";

const CardBodyText = ({ children }: CommonProps) => {
  return (
    <p className="text-base leading-7 tracking-wide mt-4 mb-2">{children}</p>
  );
};

export default CardBodyText;
