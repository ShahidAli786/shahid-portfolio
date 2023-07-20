import DownIconGradient from "../../components/icons/DownIconGradient";
import { Link } from "react-scroll";
import { CommonProps } from "../../definations";

type HomeButtonProps = {
  value: any;
};

const HomeButton = (props: HomeButtonProps) => {
  return (
    <HomeButtonWrap>
      <Link to="experience">
        <div
          className="flex justify-end pl-2 gap-3
                        font-normal text-base uppercase tracking-loose"
        >
          {props.value}
          <DownIconGradient />
        </div>
      </Link>
    </HomeButtonWrap>
  );
};

const HomeButtonWrap = ({ children }: CommonProps) => {
  return (
    <div
      className="sm:block hidden px-4 py-3 rounded-full
                bg-zinc-100 dark:bg-zinc-700 shadow-sm
                hover:bg-zinc-200 dark:hover:bg-zinc-600"
    >
      {children}
    </div>
  );
};

export default HomeButton;
