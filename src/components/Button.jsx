const Button = ({ className, href, onClick, children, px, white, my }) => {
  const classes = `button relative  rounded-lg inline-flex items-center font-semibold justify-center h-10  transition-colors hover:text-n-2  ${
    px || "px-4"
  }   ${white ? "text-n-2 border border-n-3" : "bg-n-1 text-n-6 "} ${
    className || ""
  } ${my || "my-4"}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
