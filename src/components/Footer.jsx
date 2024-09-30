import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import Section from "./Section";
import { socialMedia } from "../constants/index";
import { motion } from "framer-motion";
import Button from "./Button";
const Footer = () => {
  const pathName = useLocation();
  return (
    <Section customPaddings="lg:py-8 md:py-16" className="mt-10">
      <div className="flex flex-col">
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-row ">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`${
                  item.url === pathName.pathname ? "text-n-1" : "text-n-3"
                } block poppins text-base lg:text-xl font-semibold transition-colors hover:text-n-1 cursor-pointer lg:px-3 lg:py-2 py-1 px-2 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } `}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex flex-row lg:p-0 p-10">
            {socialMedia.map((icons) => (
              <div key={icons.id}>
                <a href={icons.url} target="_blank">
                  <icons.icon className="text-n-3 mx-2 text-3xl" />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col ">
            <h4 className="text-[1.2rem] lg:text-[1.5rem] lg:leading-[5rem] font-bold tracking-tight text-n-3 leading-[2rem] text-center">
              Interested in working together<span className="text-n-1">?</span>
            </h4>
            <div className="mt-5 lg:mt-0 m-auto lg:m-0">
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
          <div className="flex flex-col lg:p-0 p-10 items-center text-center ">
            <p className="text-n-3">©2024 All Rights Reserved.</p>
            <p className="text-n-3">©Made with 💜 by Earl Jason Cordero</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
