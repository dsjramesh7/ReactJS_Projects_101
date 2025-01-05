import classNames from "classnames";
import IonIcon from "@reacticons/ionicons";

const Button = ({
  variant = "primary",
  color = "primary",
  className,
  children,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <div
      className={classNames(
        className,
        "px-4 py-2 font-semibold rounded-md cursor-pointer",

        variant === "primary" &&
          (color === "primary"
            ? "bg-yellow-400"
            : color === "success"
            ? "bg-green-400"
            : "bg-red-500"),
        variant === "outline" &&
          (color === "primary"
            ? "border-2 border-yellow-400"
            : color === "success"
            ? "border-2 border-green-400"
            : "bg-red-500")
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <IonIcon name="radio-button-on-outline" className="animate-ping" />
      ) : (
        children
      )}
    </div>
  );
};

export default Button;
