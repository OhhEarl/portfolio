import Section from "./Section";
import Marquee from "react-fast-marquee";
import {
  programmingSkills,
  programmingFramework,
  otherSkills,
} from "../constants/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons/faStar";
import { useEffect, useState } from "react";
import { skillLevel } from "../constants/index";
import MyStory from "./MyStory";
import MyExperience from "./MyExperience";

const About = () => {
  const [progresses, setProgresses] = useState(
    skillLevel.map((skill) => ({ ...skill, currentProgress: 0 })) // Initialize with 0 progress
  );

  useEffect(() => {
    const timeouts = progresses.map(
      (skill, index) =>
        setTimeout(() => {
          setProgresses((prev) =>
            prev.map((p, i) =>
              i === index ? { ...p, currentProgress: skill.progress } : p
            )
          );
        }, 100 * index) // Staggered effect
    );

    // Cleanup timeouts on component unmount
    return () => timeouts.forEach((timeout) => clearTimeout(timeout));
  }, []);
  return (
    <Section id="about">
      <div className="container ">
        <div className="mt-[4rem] lg:mt-0 max-w-[100%] h-[100%]">
          <h1 className="text-[3.5em] lg:text-[5.5rem] lg:leading-[5rem] font-bold leading-[3.5rem] tracking-tight text-n-2">
            About me<span className="text-n-1">.</span>
          </h1>
          <h2 className="my-6 leading-5  text-[1.1rem] md:text-xl lg:text-2xl text-n-3 border-l-4 lg:border-l-[.75rem] border-n-1 pl-4">
            Developing beautiful and functional websites is what I love doing,
            and that&apos;s wh y I give my all in every new challenge.
          </h2>
          <div className="flex flex-col  md:flex-row justify-center  lg:h-[30rem] h-[40rem]">
            <div className="lg:max-w-[35%] md:max-w-[35%]  max-w-[100%]">
              <h1 className="text-n-2 font-extrabold text-2xl py-5">
                My Stack.
              </h1>
              <div className="flex flex-col w-full border rounded-md bg-n-7 h-[80%] justify-center">
                <Marquee speed={30}>
                  {programmingSkills.map((program, index) => (
                    <div
                      key={program.id}
                      className="flex flex-row items-center"
                    >
                      <span className="flex flex-row text-center mx-6 bg-n-5 p-1 px-3.5 rounded-md text-n-6 font-mono overflow:hidden my-[1.75rem]">
                        {program.title}
                        {index < programmingSkills.length - 1 && "  "}{" "}
                      </span>

                      <span>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-n-1  text-xl"
                        />
                      </span>
                    </div>
                  ))}
                </Marquee>

                <Marquee speed={30} direction="left | right">
                  {otherSkills.map((program, index) => (
                    <div
                      key={program.id}
                      className="flex flex-row items-center"
                    >
                      <span className="flex flex-row text-center mx-6 bg-n-5 p-1 px-3.5 rounded-md text-n-6 font-mono overflow:hidden ">
                        {program.title}
                        {index < programmingSkills.length - 1 && "  "}{" "}
                      </span>

                      <span>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-n-1  text-xl"
                        />
                      </span>
                    </div>
                  ))}
                </Marquee>

                <Marquee speed={30}>
                  {programmingFramework.map((program, index) => (
                    <div
                      key={program.id}
                      className="flex flex-row items-center"
                    >
                      <span className="flex flex-row text-center mx-6 bg-n-5 p-1 px-3.5 rounded-md text-n-6 font-mono overflow:hidden my-[1.75rem]">
                        {program.title}
                        {index < programmingSkills.length - 1 && "  "}
                      </span>

                      <span>
                        <FontAwesomeIcon
                          icon={faStar}
                          className="text-n-1  text-xl"
                        />
                      </span>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
            <div className="lg:max-w-[64%] md:max-w-[62%] w-full mx-auto  ">
              <h1 className="text-n-2 font-extrabold text-2xl py-5">
                My Experience.
              </h1>
              <div className="flex flex-col w-full border rounded-md bg-n-7 px-5 h-[80%] justify-center">
                {progresses.map((skill) => (
                  <div
                    key={skill.id}
                    className="flex flex-row items-center w-full my-2"
                  >
                    <h1 className="ps-2 w-[10rem]">{skill.name}</h1>
                    <div className="w-[70%] bg-gray-200 rounded-full dark:bg-gray-700 ml-2">
                      <div className="flex items-start">
                        <div
                          className="bg-n-1 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full"
                          style={{
                            width: `${skill.currentProgress}%`,
                            transition: "width 1s ease-in-out", // Transition effect
                          }}
                        >
                          {skill.currentProgress}%
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <MyStory />
          <MyExperience />
        </div>
      </div>
    </Section>
  );
};

export default About;
