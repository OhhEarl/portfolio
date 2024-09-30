import Paragraph from "./Paragraph";
const MyExperience = () => {
  return (
    <div className="max-w-[100%] pt-[4rem]">
      <div>
        <h1 className="text-[3.5em] lg:text-[3.5rem] lg:leading-[5rem] font-bold leading-[3.5rem] tracking-tight text-n-2">
          My Experience<span className="text-n-1">.</span>
        </h1>

        <div className="my-2">
          <ol className="relative border-l-2 border-gray-200 dark:border-gray-700">
            <li className="mb-10 ms-4">
              <div className="absolute w-4 h-4 bg-n-1 rounded-full mt-1.5 -start-[9px] borderborder-n-1"></div>
              <time className="mb-1 text-sm font-normal leading-none text-n-1">
                Full Stack Web Developer{" "}
                <span className=" text-n-3">(INTERN)</span>
              </time>
              <h3 className="text-3xl font-bold text-n-3">BlueBeans System</h3>
              <Paragraph my="my-1">
                Designed and developed web applications using Laravel framework.
                Engaged in code reviews and pair programming sessions with
                fellow interns and senior developers to enhance code quality and
                share knowledge.
                <br />
                <br />
                Utilized JavaScript to enhance user interfaces and improve user
                experience.
              </Paragraph>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
