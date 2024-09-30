const Paragraph = ({ children, className, my }) => {
  return (
    <div
      className={`${
        className ||
        " leading-5  text-[1rem] md:text-xl lg:text-[1.1rem] text-n-3 "
      } ${my || "my-5"}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
