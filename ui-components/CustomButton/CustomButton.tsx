import Image from "next/image";
import styles from "./CustomButton.module.scss";
import React, { useState } from "react";

//r1 - border-radius=8px, r2 - 12px, r3 - 30px
//b1 - gradient border 2px with set border-redius
//c1, c2, ... - see figma design12

//clr1 - all (color, active, disabled, hover) ffffff,
//clr2 - all ffffff, hover - fffefe,
//clr3 - ffffff, #B8B4B4, #000000, #000000,
//clr4 - all #FAFAFA
//clr5 - ffffff, ffffff, #1F1F21, ffffff
//clr6 - #CDC9C9, #CDC9C9, #1F1F21, #CDC9C9
//clr7 - ffffff, ffffff, #1F1F21, ffffff
//clr8 - #FFFFFF, #E2DFDF, #FFFFFF, FFFFFF

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
  colorSet?:
    | "c1"
    | "c2"
    | "c3"
    | "c4"
    | "c5"
    | "c6"
    | "c7"
    | "c8"
    | "c9"
    | "c10"
    | "c11"
    | "c12"
    | "c13"
    | "c14"
    | "c15"
    | "c16"
    | "c17"
    | "c18"
    | "c19";
  textStyle?: {
    fontWeight?: number;
    fontSize?: string;
    lineHeight?: string;
    colorSet?:
      | "clr1"
      | "clr2"
      | "clr3"
      | "clr4"
      | "clr5"
      | "clr6"
      | "clr7"
      | "clr8";
  };
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  imageProps,
  onClick,
  className = "",
  disabled = false,
  wrapperStyle,
  borderRadius = "r1",
  gradientBorder,
  colorSet = "c1",
  textStyle,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const buttonColorStyles: React.CSSProperties =
    colorSet === "c12"
      ? {
          background:
            disabled || isPressed || isHovered
              ? "linear-gradient(180deg, var(--button12-d-h-p-color1), var(--button12-d-h-p-color2))"
              : "linear-gradient(180deg, var(--button12-color1), var(--button12-color2))",
        }
      : {
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
        style={buttonColorStyles}
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
        {text && (
          <p
            style={{
              fontWeight: textStyle?.fontWeight,
              fontSize: textStyle?.fontSize,
              lineHeight: textStyle?.lineHeight,
            }}
            className={styles[textStyle?.colorSet || "clr1"]}
          >
            {text}
          </p>
        )}
      </button>
    </div>
  );
};
