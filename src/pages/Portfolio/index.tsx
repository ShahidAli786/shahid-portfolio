import BodySection from "../../components/section/BodySection";
import TitleSection from "../../components/section/SectionTitle";
import experienceData from "../../data/ExperienceData";
import TimelineCard from "./TimelineCard";

export default function Portfolio() {
  return (
    <section id="experience">
      <BodySection>
        <TitleSection>Experience</TitleSection>
        <section className="dark:bg-zinc-800 bg-zinc-50 hover:shadow-lg dark:text-gray-100">
          <div className="container max-w-5xl sm:px-4 py-12 mx-auto">
            <div className="grid gap-4 sm:mx-4 mx-0 sm:grid-cols-12">
              <div className="relative col-span-12 px-4 space-y-6 ">
                <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-700">
                  {experienceData.map((item) => (
                    <TimelineCard key={item.id} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </BodySection>
    </section>
  );
}
