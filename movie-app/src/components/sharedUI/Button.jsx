import classNames from "classnames";
import IonIcon from "@reacticons/ionicons";

const Button = ({
  variant = "primary",
  color,
  loading = false,
  size = "md",
  className,
  btnName,
  ...props
}) => {
  return (
    <div
      className={classNames(
        className,
        "flex justify-center items-center rounded cursor-pointer",
        variant === "primary" &&
          (color === "primary"
            ? "bg-blue-500"
            : color === "success"
            ? "bg-green-400"
            : color === "warn"
            ? "bg-red-500"
            : "bg-yellow-400"),

        variant === "outline" &&
          (color === "primary"
            ? "border border-blue-500 text-blue-500"
            : color === "success"
            ? "border border-green-400 text-green-400"
            : color === "warn"
            ? "border border-red-500 text-red-500"
            : "border border-yellow-400 text-yellow-400"),

        {
          // Size
          "gap-1  p-2 text-sm": size === "sm",
          "h-10 gap-2 px-4": size === "md",
          "text-md h-12 gap-3 px-5": size === "lg",
        }
      )}
      {...props}
    >
      {loading ? (
        <IonIcon name="radio-button-on-outline" className="animate-ping" />
      ) : (
        btnName
      )}
    </div>
  );
};

export default Button;
