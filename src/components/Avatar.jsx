import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  return (
    <>
      {/* Se as propriedades contem bordas como "true" mostre avatarWithBorder se não mostre sem bordas */}
      <img
        className={hasBorder ? styles.avatarWithBorder : styles.avatar}
        src={src}
      />
    </>
  );
}
