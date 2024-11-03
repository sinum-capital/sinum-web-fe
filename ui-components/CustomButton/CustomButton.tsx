import Image from "next/image";
import styles from "./CustomButton.module.scss";

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
}) => {
  return (
    <div
      className={`${styles["button-wrapper"]} ${className}`}
      style={wrapperStyle}
    >
      <button
        onClick={onClick}
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
