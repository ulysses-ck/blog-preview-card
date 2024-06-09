import styles from "./GenericMediaContainer.module.css";

export default function GenericMediaContainer({
  children,
  width,
  height,
  className,
}) {
  return (
    <div
      className={
        className
          ? `${styles.GenericMediaContainer} ${className}`
          : styles.GenericMediaContainer
      }
      style={{
        width: width || "",
        height: height || "",
      }}
    >
      {children}
    </div>
  );
}
