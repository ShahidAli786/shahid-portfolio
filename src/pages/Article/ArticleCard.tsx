import TagList from "../../components/tag/TagList";
import CardBodyText from "../../components/card/CardBodyText";
import ExternalLinkGradient from "../../components/icons/ExternalLinkGradient";
import { H3 } from "../../components/typography/Typography";
import { Article } from "../../data/ArticleData";
import { CommonProps } from "../../definations";

type ArticleCardProps = {
  article: Article;
};

function ArticleCard(props: ArticleCardProps) {
  const { id, title, desc, tags, articleLink } = props.article;

  return (
    <div key={id}>
      <ArticleCardWrap>
        <ArticleCardNumber>0{id}</ArticleCardNumber>
        <div>
          <H3>{title}</H3>
          <CardBodyText>{desc}</CardBodyText>
          <TagList>
            <li>{tags[0]}</li>
            <li>{tags[1]}</li>
            <li>{tags[2]}</li>
          </TagList>
          <div className="mt-0.5">
            <a href={articleLink} target="_blank">
              <ExternalLinkGradient />
            </a>
          </div>
        </div>
      </ArticleCardWrap>
    </div>
  );
}

const ArticleCardWrap = ({ children }: CommonProps) => {
  return (
    <div
      className="py-6 px-8 grid sm:grid-cols-[1fr_4fr] gap-5 shadow-sm
                       dark:bg-zinc-800 bg-zinc-50 hover:shadow-lg"
    >
      {children}
    </div>
  );
};

const ArticleCardNumber = ({ children }: CommonProps) => {
  return (
    <div
      className="flex sm:place-content-center sm:items-center   
                         text-transparent bg-clip-text 
                         bg-gradient-to-r from-teal-500 to-violet-500   
                         sm:text-7xl text-5xl font-medium"
    >
      {children}
    </div>
  );
};

export default ArticleCard;
