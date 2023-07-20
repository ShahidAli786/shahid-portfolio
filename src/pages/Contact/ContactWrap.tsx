import { CommonProps } from "../../definations";

const ContactWrap = ({ children }: CommonProps) => {
  return <div className="grid grid-cols-2 grid-rows-2 mt-8">{children}</div>;
};

export default ContactWrap;
