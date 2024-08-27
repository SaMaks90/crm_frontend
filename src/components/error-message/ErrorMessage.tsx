import styles from "./error-message.module.scss";

interface IErrorMessage {
  message: string;
}

const ErrorMessage = ({ message }: IErrorMessage) => {
  return <span className={styles.message}>{message}</span>;
};

export { ErrorMessage };
