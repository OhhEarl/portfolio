const Section = ({ className, id, children, customPaddings }) => {
  return (
    <div
      id={id}
      className={`relative px-[1.5rem] lg:px-[6.5rem]   ${
        customPaddings || `py-10 lg:py-16 xl:py-20 }  `
      }  ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
