export interface IExperience {
  id: number;
  title: string;
  company: string;
  desc: string;
  websiteLink: string;
  duration: string;
}

const experienceData: IExperience[] = [
  {
    id: 1,
    title: "Team Lead (React Native)",
    company: "Rapid Innovation",
    desc: "I am currently employed as a Team Lead (React Native) at Rapid Innovation, where my primary responsibilities include developing mobile applications using React Native and web applications using React. Alongside development, I also provide guidance and expertise to help developers overcome technical blockers and challenges, ensuring smooth progress in the development process. During my time at Rapid Innovation, I have successfully worked on multiple mobile applications and have made valuable contributions to web application development. A notable accomplishment of mine is the implementation of code generation for GraphQL using Apollo Client. This implementation has notably reduced the overall development time and enhanced efficiency in the process.",
    websiteLink: "https://www.rapidinnovation.io/",
    duration: "Jan 2023 - Persent",
  },
  {
    id: 2,
    title: "Senior Software Engineer",
    company: "Bytewrap",
    desc: "As a Senior Software Engineer at Bytewrap Technologies, my work focused on developing mobile and web applications using React Native and React. During this time, I created more than 4 mobile apps and 2 web apps. One of my significant contributions was implementing unit tests for the apps, increasing test coverage from 50% to 80%. I also optimized the performance of the mobile apps, resulting in a 20% improvement. Additionally, I actively engaged in agile development practices, such as participating in daily standups and sprint planning meetings.",
    websiteLink: "https://bytewrap.com/",
    duration: "Jan 2019 - Jan 2023",
  },
  {
    id: 3,
    title: "Software Engineer",
    company: "Innotical Solutions",
    desc: "I began my career as a Software Engineer at Innotical Solutions, where my main focus was developing mobile and web applications using ReactJS and React Native. During that time, I successfully created more than 2 mobile apps and 2 web apps. One of my notable achievements was the utilization of Redux to manage state in the applications, leading to improved scalability and maintainability.",
    websiteLink: "https://innotical.com/",
    duration: "Nov 2016 - Jan 2019",
  },
];

export default experienceData;
