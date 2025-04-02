const Button = ({
  children,
  onClick,
}: {
  children: string;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
