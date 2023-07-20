import { CommonProps } from "../../definations";

function CardListLarge({ children }: CommonProps) {
  return <div className="flex flex-col gap-10">{children}</div>;
}

export default CardListLarge;
