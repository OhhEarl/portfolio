import Paragraph from "./Paragraph";
const MyStory = () => {
  return (
    <div className="max-w-[100%] pt-[4rem]">
      <div>
        <h1 className="text-[3.5em] lg:text-[3.5rem] lg:leading-[5rem] font-bold leading-[3.5rem] tracking-tight text-n-2">
          My Story<span className="text-n-1">.</span>
        </h1>

        <Paragraph>
          My journey as a web developer started back in 2020, where I enrolled
          at Negros Oriental State University, Dumaguete City, Philippines where
          I took the course Bachelor of Science in Information Technology.
        </Paragraph>
        <Paragraph>
          Throughout my studies, I have worked on a variety of self projects,
          including developing dynamic web applications, and crafting responsive
          designs. I have a basic understanding of both front-end and back-end
          development and a passion for creating seamless, user-friendly
          interfaces.
        </Paragraph>
        <Paragraph>
          During my internship at BlueBeans System in Dumaguete City,
          Philippines, from August to December 2023, I worked on developing a
          web application using pure Laravel framework. This experience allowed
          me to hone my backend development skills, and collaborate with a
          professional team.
        </Paragraph>
        <Paragraph>
          For my capstone project, I developed a mobile freelancing platform for
          Negros Oriental State University students using React Native for the
          front end and Laravel for the backend. The app allows students to
          showcase their skills and connect with clients, with secure user
          authentication and seamless API integration for optimal performance.
        </Paragraph>
      </div>
    </div>
  );
};

export default MyStory;
