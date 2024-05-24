import { Education } from "./education";
import { Experience } from "./experience";
import { Projects } from "./projects";

const HomePage = () => {
  return (
    <div className="page centered">
      <div className="flex flex-col items-center">
        <Education />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export { HomePage };
