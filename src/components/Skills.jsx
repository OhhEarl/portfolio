import Paragraph from "./Paragraph";
const Skills = () => {
  return (
    <div className="max-w-[100%] pt-[7rem]">
      <div>
        <h1 className="text-[3.5em] lg:text-[3.5rem] lg:leading-[5rem] font-bold leading-[3.5rem] tracking-tight text-n-2 mb-2">
          My Skills<span className="text-n-1">.</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col mb-5 lg:mb-0">
            <h4 className="text-n-2 text-2xl font-bold mb-4">Web Design</h4>
            <Paragraph my="my-0">Responsive Design</Paragraph>
            <Paragraph my="my-0">Graphic Design Tool</Paragraph>
          </div>

          <div className="flex flex-col mb-5 lg:mb-0">
            <h4 className="text-n-2 text-2xl font-bold mb-4">Soft Skills</h4>
            <Paragraph my="my-0">Effective Communication</Paragraph>
            <Paragraph my="my-0">Collaboration</Paragraph>
            <Paragraph my="my-0">Commitment</Paragraph>
            <Paragraph my="my-0">Adaptability</Paragraph>
          </div>
          <div className="flex flex-col mb-5 lg:mb-0">
            <h4 className="text-n-2 text-2xl font-bold mb-4">Front End</h4>
            <Paragraph my="my-0">JavaScript</Paragraph>
            <Paragraph my="my-0">ReactJS</Paragraph>
            <Paragraph my="my-0">CSS3</Paragraph>
            <Paragraph my="my-0">HTML</Paragraph>
            <Paragraph my="my-0">React Native</Paragraph>
          </div>
          <div className="flex flex-col ">
            <h4 className="text-n-2 text-2xl font-bold mb-4">Back End</h4>
            <Paragraph my="my-0">Laravel</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
