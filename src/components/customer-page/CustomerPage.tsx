import { useEffect, useState } from "react";
import styles from "./customer-page.module.scss";
import { useAuth } from "../../provider";
import { ICustomer, ICustomerFilterInput, RequestStatus } from "../../types";
import { getCustomerList } from "../../api";
import { CustomerHeaderOption, CustomerList } from "./";

const initialFilterInputState: ICustomerFilterInput = {
  text: "",
  taxSystem: "",
  companyType: "",
};

const CustomerPage = () => {
  const { token } = useAuth();
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [status, setStatus] = useState<string>(RequestStatus.pending);
  const [filterInput, setFilterInput] = useState<ICustomerFilterInput>(
    initialFilterInputState,
  );

  useEffect(() => {
    setStatus(RequestStatus.fulfillment);
    (async (): Promise<void> => {
      try {
        let result = await getCustomerList(token);
        setCustomers(result);
        setStatus(RequestStatus.successfully);
      } catch (e) {
        setStatus(RequestStatus.error);
        console.error(e);
      }
    })();
  }, [token]);

  return (
    <section className={styles.wrapperCustomerPage}>
      <CustomerHeaderOption setCustomerFilterInput={setFilterInput} />

      <CustomerList
        status={status}
        customerList={customers}
        filter={filterInput}
      />
    </section>
  );
};

export { CustomerPage };
