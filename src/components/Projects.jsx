import Section from "./Section";
import Project1 from "../assets/Project1.jpg";
import Project22 from "../assets/Project22.jpg";
import Project2 from "../assets/Project2.jpg";

const Projects = () => {
  return (
    <Section id="about">
      <div className="container ">
        <div className="mt-[2.5rem] lg:mt-0 max-w-[100%] h-[100%]">
          <h1 className="text-[3.5em] lg:text-[5.5rem] lg:leading-[5rem] font-bold leading-[3.5rem] tracking-tight text-n-2">
            My Projects<span className="text-n-1">.</span>
          </h1>

          <div className="w-full">
            <div className="my-15">
              <div className="grid grid-col-1">
                <div className="w-[90%]   m-auto py-5 lg:py-20 bg-n-3/10  rounded-2xl">
                  <img
                    src={Project1}
                    alt="Project1"
                    className="m-auto rounded-2xl w-[90%] border border-n-1/30 "
                  />
                </div>
                <div className="m-3 ms-5 lg:ms-[5.5rem]">
                  <h1 className="text-[2rem] lg:text-[3rem] lg:leading-[5rem] font-bold leading-[2rem] tracking-tight text-n-2">
                    HRIS
                  </h1>
                  <h2 className="text-n-3 text-2xl">
                    Human resource management system using laravel framework.
                  </h2>
                </div>
              </div>
              <div className="mt-15">
                <div className="grid grid-col-1 lg:grid-cols-2 w-[90%] m-auto gap-5">
                  <div className="w-[100%]   m-auto py-5 lg:py-20 bg-n-3/10  rounded-2xl">
                    <img
                      src={Project22}
                      alt="Mobile Project UI"
                      className="m-auto rounded-2xl w-[70%] border border-n-1/30 "
                    />
                  </div>
                  <div className="w-[100%]   m-auto py-5 lg:py-20 bg-n-3/10  rounded-2xl">
                    <img
                      src={Project2}
                      alt="Mobile Project Ui"
                      className="m-auto rounded-2xl w-[70%] border border-n-1/30 "
                    />
                  </div>
                </div>
                <div className="m-3 ms-5 lg:ms-[5.5rem]">
                  <h1 className="text-[2rem] lg:text-[3rem] lg:leading-[5rem] font-bold leading-[2rem] tracking-tight text-n-2">
                    NORSU Freelancing
                  </h1>
                  <h2 className="text-n-3 text-2xl">
                    NORSU freelancing mobile application using react native for
                    the frontend and laravel for the backend.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;
