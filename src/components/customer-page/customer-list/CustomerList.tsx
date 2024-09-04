import React from "react";
import styles from "./customer-list.module.scss";
import { CustomerListHeader, CustomerViewLine } from "../";
import { ICustomer, ICustomerFilterInput, RequestStatus } from "../../../types";
import { Loading } from "../../";
import { getCustomerListWithFilter } from "../../../utils";

interface ICustomersListProps {
  status: any;
  customerList: ICustomer[] | [];
  filter: ICustomerFilterInput;
}

const CustomerList = ({
  status,
  customerList,
  filter,
}: ICustomersListProps) => {
  const visibleCustomerList: ICustomer[] = getCustomerListWithFilter(
    customerList,
    filter,
  );

  const isVisibleCustomerList: boolean =
    status === RequestStatus.successfully && visibleCustomerList.length !== 0;

  return (
    <section className={styles.customerList}>
      <CustomerListHeader />
      {status === RequestStatus.fulfillment && (
        <Loading style={{ width: "100%", marginTop: "250px" }} />
      )}
      {isVisibleCustomerList &&
        visibleCustomerList.map((elem: ICustomer) => (
          <CustomerViewLine key={elem.id} elem={elem} />
        ))}
    </section>
  );
};

export { CustomerList };
