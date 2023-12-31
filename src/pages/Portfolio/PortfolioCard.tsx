import TagList from "../../components/tag/TagList";

import GithubGradient from "../../components/icons/GithubGradient";
import ExternalLinkGradient from "../../components/icons/ExternalLinkGradient";
import CardBodyText from "../../components/card/CardBodyText";
import { Project } from "../../data/ProjectData";
import { CommonProps } from "../../definations";
import { H3 } from "../../components/typography/Typography";

type PortfolioProps = {
  project: Project;
};

function Portfolio(props: PortfolioProps) {
  const { id, title, demoLink, githubLink, desc, tags } = props.project;
  return (
    <div key={id}>
      <PortfolioCardWrap>
        <div>
          <PortfolioNumber>0{id}</PortfolioNumber>
          <H3>
            {title}
            <span className="flex gap-1 mt-.5">
              <a target="_blank" href={githubLink}>
                <GithubGradient />
              </a>
              <a target="_blank" href={demoLink}>
                <ExternalLinkGradient />
              </a>
            </span>
          </H3>
        </div>
        <CardBodyText>{desc}</CardBodyText>
        <TagList>
          <li>{tags[0]}</li>
          <li>{tags[1]}</li>
          <li>{tags[2]}</li>
        </TagList>
      </PortfolioCardWrap>
    </div>
  );
}

//PortfolioWrap

const PortfolioCardWrap = ({ children }: CommonProps) => {
  return (
    <div className="p-8 bg-zinc-50 shadow-sm dark:bg-zinc-800 hover:shadow-lg">
      {children}
    </div>
  );
};

const PortfolioNumber = ({ children }: CommonProps) => {
  return (
    <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-violet-500">
      {children}
    </div>
  );
};

export default Portfolio;
