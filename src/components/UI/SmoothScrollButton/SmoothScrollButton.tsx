"use client";

import { ComponentPropsWithoutRef, FC } from "react";

interface SmoothScrollButtonProps extends ComponentPropsWithoutRef<"button"> {
  targetId: string;
}

const SmoothScrollButton: FC<SmoothScrollButtonProps> = ({
  targetId,
  className = "",
  children,
  ...rest
}) => {
  const handleClick = () => {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button onClick={handleClick} className={className} {...rest}>
      {children}
    </button>
  );
};

export default SmoothScrollButton;
