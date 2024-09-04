import { useEffect, useState } from "react";
import styles from "./customer-page.module.scss";
import { useAuth } from "../../provider";
import { CompanyType, ICustomer, RequestStatus, Tax } from "../../types";
import { Button, Filter, Loading } from "../";
import { getCustomerList } from "../../api";
import { CustomerList, CustomerListHeader, CustomerViewLine } from "./";

interface IFilterInput {
  text: string;
  taxSystem: Tax | any;
  companyType: CompanyType | any;
}

const initialFilterInputState: IFilterInput = {
  text: "",
  taxSystem: "",
  companyType: "",
};

const CustomerPage = () => {
  const { token } = useAuth();
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [status, setStatus] = useState<string>(RequestStatus.pending);
  const [filterInput, setFilterInput] = useState<IFilterInput>(
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

  const func_first = (name: string, value: any): void => {
    switch (name) {
      case "tax-system":
        setFilterInput((prevState) => ({
          ...prevState,
          taxSystem: value ? Tax[value] : "",
        }));
        break;
      case "company-type":
        setFilterInput((prevState) => ({
          ...prevState,
          companyType: value ? CompanyType[value] : "",
        }));
        break;
      case "name":
        setFilterInput((prevState) => ({ ...prevState, text: value }));
        break;
      default:
        console.error("Don`t find case: ", name);
    }
  };

  const visibleCustomerList: ICustomer[] = customers
    .filter(
      (elem) =>
        elem.name.toLowerCase().includes(filterInput.text.toLowerCase()) ||
        elem.individual_tax_number.includes(filterInput.text.toLowerCase()),
    )
    .filter(
      (elem) =>
        Tax[elem.tax] === filterInput.taxSystem || !filterInput.taxSystem,
    )
    .filter(
      (elem) =>
        !filterInput.companyType ||
        CompanyType[elem.type] === filterInput.companyType,
    );

  const isVisibleCustomerList: boolean =
    status === RequestStatus.successfully && visibleCustomerList.length !== 0;

  return (
    <section className={styles.wrapperCustomerPage}>
      <section className={styles.customerOptions}>
        <Filter name={"name"} func={func_first} />
        <Filter name={"tax-system"} func={func_first} />
        <Filter name={"company-type"} func={func_first} />

        <Button
          title={"add customer"}
          functionClick={() => console.log("click")}
        />
      </section>

      <CustomerList>
        <CustomerListHeader />
        {status === RequestStatus.fulfillment && (
          <Loading style={{ width: "100%", marginTop: "250px" }} />
        )}
        {isVisibleCustomerList &&
          visibleCustomerList.map((elem: ICustomer) => (
            <CustomerViewLine key={elem.id} elem={elem} />
          ))}
      </CustomerList>
    </section>
  );
};

export { CustomerPage };
