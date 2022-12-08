import { skills } from "../../constants";

export const SkillsSection = ({ next }) => {
  const skillsCatogNames = Object.keys(skills);

  const saveHandler = () => {
    next();
  };

  return (
    <div className="pt-28 h-full w-full flex flex-col items-center overflow-x-scroll">
      <h1 className="text-4xl font-bold text-white dark:text-gray-100">
        Skills Section
      </h1>
      <div className="mt-5 md:w-4/5">
        {Object.values(skills).map((skillCatog, i) => (
          <div className="my-8">
            <div className="mb-2">
              <h2 className="uppercase text-lg font-bold pb-0.5 border-b-2 border-white text-white">
                {skillsCatogNames[i]}
              </h2>
            </div>

            <div className="mt-1 grid gap-3 grid-cols-12">
              {skillCatog.map((skill) => (
                <div>
                  <img
                    // className="brightness-0 hover:brightness-125 dark:brightness-0 dark:invert dark:hover:brightness-100 dark:hover:invert-0"
                    className="brightness-0 invert hover:brightness-100 hover:invert-0"
                    height={40}
                    width={40}
                    src={`/icons/${skill.icon}.svg`}
                    alt={skill.name}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="my-2">
        <button
          onClick={saveHandler}
          className="w-28 bg-indigo-500 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};
