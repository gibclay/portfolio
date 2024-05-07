import { Education } from "./education";
import Projects from "./projects";

const HomePage = () => {
  return (
    <div className="w-2/3 p-4 mx-auto text-center rounded-box border">
      <div className="flex flex-col items-center">
        <Education />
        <Projects />
      </div>
    </div>
  );
};

export { HomePage };
