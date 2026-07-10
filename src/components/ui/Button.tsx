import clsx from "clsx";

type Variant = "filled" | "outline"

interface ButtonProps {
  variant:Variant;
  className?:string;
  children:React.ReactNode;
}

function Button({variant,className,children}:ButtonProps) {

  const variantStyle = {
    filled: "",
    outline: "border-[2px]"
  }

  return (
    <button className={clsx(className, "rounded-[5px]", variantStyle[variant])}>
      {children}
    </button>
  );
}

export default Button
