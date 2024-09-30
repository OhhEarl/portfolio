import Section from "./Section";
import picture from "../assets/Picture1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons/faPhone";
import { socialMedia } from "../constants";
import { motion } from "framer-motion";
const GetInTouch = () => {
  return (
    <Section id="get-in-touch">
      <div className="container lg:flex lg:justify-between">
        <div className="mt-10 lg:max-w-[55%]">
          <div className="lg:max-w-[35rem] max-w-[60rem]">
            <div>
              <div className="flex flex-row lg:p-0 pb-5 lg:mb-5">
                {socialMedia.map((icons) => (
                  <div key={icons.id}>
                    <a href={icons.url} target="_blank">
                      <icons.icon className="text-n-3 mr-2 text-3xl" />
                    </a>
                  </div>
                ))}
              </div>
              <h2 className="text-2xl text-n-3 mb-2">
                Hey, I am Earl Jason 👋
              </h2>
              <h1 className="text-[3rem] lg:text-[4rem] lg:leading-[5rem] font-bold leading-[3.5rem] tracking-tight text-n-2">
                Get In Touch
              </h1>

              <p className="tracking-tight mt-2 text-[1.1rem] sm:text-xl md:text-[1.75rem] lg:text-2xl text-n-3">
                Looking to partner or work together? Reach out through the
                contacts below and I&apos;ll get back to you in the next 48
                hours.
              </p>

              <div className="flex flex-col mt-5">
                <div className="flex flex-row items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-n-3 border border-n-3  rounded-full md:h-6  md:p-3 mr-5  h-4 p-2 "
                  />
                  <p className="text-n-3 md:text-xl  text-base  font-light">
                    earljasoncordero@gmail.com
                  </p>
                </div>
                <div className="flex flex-row items-center mt-3">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-n-3 border border-n-3 rounded-full md:h-6  md:p-3 mr-5 h-4 p-2"
                  />
                  <p className="text-n-3 md:text-xl  text-base font-light">
                    +639915272357 / +639056845366
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className="mt-10 lg:mt-0 lg:ml-auto xl:w-[38rem] lg:w-[35%] flex justify-center"
          id="get-in-touch"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="border border-n-1 rounded-full w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[25rem] lg:h-[25rem] p-4 flex items-center justify-center overflow-hidden">
              <img
                src={picture}
                alt="Person Picture"
                className="w-full h-full rounded-full object-cover filter grayscale"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default GetInTouch;
