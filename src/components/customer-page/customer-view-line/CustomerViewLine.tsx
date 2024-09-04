import { Link } from "react-router-dom";
import styles from "./customer-view-line.module.scss";
import { ICustomer, Tax } from "../../../types";
import { clsx } from "clsx";

interface ICustomerViewLineProps {
  elem: ICustomer;
}

const CustomerViewLine = ({ elem }: ICustomerViewLineProps) => {
  const { id, name, tax, individual_tax_number, type } = elem;

  return (
    <Link to={`${id}`} className={styles.customerViewLink}>
      <span
        className={clsx(styles.customerViewField, styles.customerViewFieldName)}
      >
        {name}
      </span>
      <span
        className={clsx(styles.customerViewField, styles.customerViewFieldInn)}
      >
        {individual_tax_number}
      </span>
      <span
        className={clsx(
          styles.customerViewField,
          styles.customerViewFieldTaxSystem,
        )}
      >
        {Tax[tax]}
      </span>
      <span
        className={clsx(
          styles.customerViewField,
          styles.customerViewFieldCompanyType,
        )}
      >
        {type}
      </span>
    </Link>
  );
};

export { CustomerViewLine };
