import Section from "./Section";
import Button from "./Button";
import picture from "../assets/Picture1.jpg";
import MyStory from "./MyStory";
import Paragraph from "./Paragraph";
import Skills from "./Skills";
import MyExperience from "./MyExperience";
import { socialMedia } from "../constants";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Section id="/">
      <div className="container">
        <div className=" lg:flex lg:justify-between">
          <div className=" lg:max-w-[55%]">
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

                <h1 className="text-[3.5em] lg:text-[5.5rem] lg:leading-[5rem] font-bold leading-[3.5rem] tracking-tight text-n-1">
                  Web<span className="text-n-2">site Developer</span>
                </h1>

                <Paragraph className="mt-7 text-2xl text-n-3">
                  I&apos;m a web developer based in the Philippines, I&apos;ll
                  help you build beautiful websites your users will love.
                </Paragraph>
                <div className="mt-5">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button className="mr-5" href="/get-in-touch">
                      Get in Touch
                    </Button>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button white>Browse Projects</Button>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-0 lg:ml-auto xl:w-[38rem] lg:w-[35%] flex justify-center">
            <div className="mt-12">
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
        </div>
        <Skills />
        <MyStory />
        <MyExperience />
      </div>
    </Section>
  );
};

export default Home;
