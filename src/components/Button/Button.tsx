import React from "react";

interface Props {
  title?: string;
  onClick: () => void;
  size?: "small" | "medium" | "large";
  type?: "alert" | "default" | "secondary";
}

const Button = ({ title, onClick, size, type, ...props }: Props) => {
  const sizeStyles = (() => {
    switch (size) {
      case "small":
        return "px-6 py-3 text-xs";
      case "medium":
        return "px-4 py-2 text-sm";
      case "large":
        return "px-2.5 py-1.5 text-xs base";
      default:
        return "w-full h-full text-inherit";
    }
  })();

  const typeStyles = (() => {
    switch (type) {
      case "alert":
        return "text-white bg-red-800 hover:bg-red-600";
      case "default":
        return "text-blue-100 bg-blue-800 hover:bg-blue-600";
      case "secondary":
        return "text-black bg-green-800 hover:bg-green-600";
      default:
        // TODO: check is it work
        return "bg-inherit text-inherit";
    }
  })();

  return (
    <button
      onClick={onClick}
      {...props}
      className={`${sizeStyles} ${typeStyles}`}
    >
      {title}
    </button>
  );
};

export default Button;
