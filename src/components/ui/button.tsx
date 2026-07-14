import clsx from "clsx";

type Variant = "filled" | "outline"

interface ButtonProps {
  variant?:Variant;
  className?:string;
  children:React.ReactNode;
}

function Button({variant="filled",className,children}:ButtonProps) {

  const variantStyle = {
    filled: "",
    outline: "border-[2px] border-white"
  }

  return (
    <button
      className={clsx(
        className,
        "rounded-[5px] hover:scale-110 transition-all duration-300 cursor-pointer",
        variantStyle[variant],
      )}
    >
      {children}
    </button>
  );
}

export default Button
