import styles from "./button.module.scss";

interface IButtonProps {
  title: string;
  functionClick: () => void;
}

const Button = ({ title, functionClick }: IButtonProps) => {
  return (
    <button className={styles.button} onClick={functionClick}>
      {title}
    </button>
  );
};

export { Button };
