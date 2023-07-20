import { IExperience } from "../../data/ExperienceData";

type TimelineCardProps = IExperience & {};
export default function TimelineCard({
  company,
  desc,
  title,
  duration,
  websiteLink,
}: TimelineCardProps) {
  return (
    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-400">
      <h3 className="text-xl font-semibold tracki">{title}</h3>
      <a
        target="_blank"
        href={websiteLink}
        className="mt-1 font-medium text-base text-violet-400 cursor-pointer"
      >
        {company}
      </a>
      <time className="text-xs tracki uppercase dark:text-gray-400">
        {duration}
      </time>
      <p className="mt-3 text-base leading-7">{desc}</p>
    </div>
  );
}
