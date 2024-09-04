import styles from "./customer-list-header.module.scss";
import { clsx } from "clsx";

const CustomerListHeader = () => {
  return (
    <article className={styles.customerListHeader}>
      <span
        className={clsx(styles.customerListHeaderTitle, styles.companyName)}
      >
        Name
      </span>
      <span className={clsx(styles.customerListHeaderTitle, styles.companyInn)}>
        Individual Tax Number
      </span>
      <span
        className={clsx(
          styles.customerListHeaderTitle,
          styles.companyTaxSystem,
        )}
      >
        Tax System
      </span>
      <span
        className={clsx(styles.customerListHeaderTitle, styles.companyType)}
      >
        Company Type
      </span>
    </article>
  );
};

export { CustomerListHeader };
