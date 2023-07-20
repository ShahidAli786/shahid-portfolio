import { CommonProps } from "../../definations";

function TagList({ children }: CommonProps) {
  return <ul className="text-base flex gap-3 opacity-60">{children}</ul>;
}

export default TagList;
