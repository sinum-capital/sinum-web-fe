import Image from "next/image";
import styles from "./CustomButton.module.scss";
import { useState } from "react";

//r1 - border-radius=8px, r2 - 12px, r3 - 30px
//b1 - gradient border 2px with set border-redius

interface CustomButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  wrapperStyle?: React.CSSProperties;
  imageProps?: {
    iconSrc: string;
    icopAlt?: string;
    imageStyles?: React.CSSProperties;
    width: number;
    height: number;
  };
  borderRadius?: "r1" | "r2" | "r3";
  gradientBorder?: "b1";
  colorSet?: "c1" | "c2" | "c3" | "c4" | "c5" | "c6" | "c7" | "c8" | "c9" | "c10" | "c11" | "c12" | "c13" | "c14" | "c15" | "c16" | "c17" | "c18" | "c19"
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  imageProps,
  onClick,
  className = "",
  disabled = false,
  wrapperStyle,
  borderRadius,
  gradientBorder,
  colorSet
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const colorStyles: React.CSSProperties = {
    backgroundColor: disabled
      ? `var(--button${colorSet?.slice(1)}-disabled-color)`
      : isPressed
      ? `var(--button${colorSet?.slice(1)}-pressed-color)`
      : isHovered
      ? `var(--button${colorSet?.slice(1)}-hover-color)`
      : `var(--button${colorSet?.slice(1)}-color)`,
  };
  return (
    <div
      className={`${styles["button-wrapper"]} ${className}`}
      style={wrapperStyle}
    >
      <button
      style={colorStyles}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        disabled={disabled}
        className={`${styles["custom-button"]} ${
          borderRadius ? styles[borderRadius] : ""
        } ${gradientBorder ? styles[gradientBorder] : ""}`}
      >
        {imageProps && (
          <Image
            src={imageProps.iconSrc}
            alt={imageProps.icopAlt || "sinum-image"}
            width={imageProps.width}
            height={imageProps.height}
            className={styles["button-icon"]}
            style={imageProps.imageStyles || {}}
          />
        )}
        {text && <p>{text}</p>}
      </button>
    </div>
  );
};
