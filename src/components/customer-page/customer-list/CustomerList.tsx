import React from "react";
import styles from "./customer-list.module.scss";

interface ICustomersListProps {
  children: React.ReactNode;
}

const CustomerList = ({ children }: ICustomersListProps) => {
  return <section className={styles.customerList}>{children}</section>;
};

export { CustomerList };
