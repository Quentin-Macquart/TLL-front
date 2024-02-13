import "./style.css";

interface ButtonProps {
  placeholder: string;
}

export const Button: React.FC<ButtonProps> = ({ placeholder }) => {
  return (
    <button className="button" role="button" type="button">
      {placeholder}
    </button>
  );
};
