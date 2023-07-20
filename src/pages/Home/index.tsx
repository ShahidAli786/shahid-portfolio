import userimg from "../../assets/shahid.jpeg";
import IconList from "../../components/list/IconList";

import HomeButton from "./HomeButton";
import BioData from "../../data/BioData";
import { H2 } from "../../components/typography/Typography";
import { CommonProps } from "../../definations";

function Home() {
  return (
    <section id="home">
      <HomeWrap>
        <HomeImgWrap>
          <HomeImg />
        </HomeImgWrap>
        <H2>
          I'm{" "}
          <span
            className="font-medium text-transparent bg-clip-text 
                                                  bg-gradient-to-r from-teal-500 to-violet-500"
          >
            Shahid Ali
          </span>
        </H2>
        <p>{BioData.bio}</p>
        <IconList />
        <HomeButton value="See my work" />
      </HomeWrap>
    </section>
  );
}

const HomeWrap = ({ children }: CommonProps) => {
  return (
    <div
      className="flex flex-col items-center sm:gap-10 gap-5 text-center
                        lg:h-4/6 lg:mt-36 sm:mt-28 mt-6 mb-16 lg:px-16 px-2 "
    >
      {children}
    </div>
  );
};

const HomeImgWrap = ({ children }: CommonProps) => {
  return (
    <div
      className="sm:w-40 sm:h-40 w-32 h-32 mb-3 rounded-full flex place-content-center
                        dark:bg-zinc-800 bg-zinc-50 shadow-sm"
    >
      {children}
    </div>
  );
};

const HomeImg = () => {
  return (
    <img
      src={userimg}
      className="sm:w-32 sm:h-32 h-28 w-28 rounded-full self-center grayscale-0 hover:grayscale"
    />
  );
};

export default Home;
