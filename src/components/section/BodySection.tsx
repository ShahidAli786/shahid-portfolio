import { CommonProps } from "../../definations";

function BodySection({ children }: CommonProps) {
  return (
    <div className="lg:mt-20 sm:mt-10 mt-0 sm:last:mb-16 mb-0 last:mb-32 lg:px-16 px-4">
      {children}
    </div>
  );
}

export default BodySection;
