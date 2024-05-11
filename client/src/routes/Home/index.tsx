import { Education } from "./education";
import Projects from "./projects";

const HomePage = () => {
  return (
    <div className="w-full sm:w-2/3 p-4 mx-auto text-center rounded-box">
      <div className="flex flex-col items-center">
        <Education />
        <Projects />
      </div>
    </div>
  );
};

export { HomePage };
