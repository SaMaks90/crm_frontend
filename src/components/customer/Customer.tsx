import { Button } from "../button/Button";
import styles from "./customer.module.scss";
import { getCustomerList } from "../../api";
import { useAuth } from "../../provider";
import { useEffect, useState } from "react";
import { Filter } from "../filter/Filter";

interface ICustomer {
  id: number;
  name: string;
  created_on: Date;
  updated_on: Date;
  individual_tax_number: string;
  tax: Tax;
  email?: string;
  phone?: string;
  comment?: string;
  type: CompanyType;
  inactive: boolean;
}

enum Tax {
  "ZERO" = "0%",
  "SEVEN" = "7%",
  "TWENTY" = "20%",
}

enum CompanyType {
  "IE" = "individual entrepreneur",
  "LLC" = "limited liability company",
}

const Customer = () => {
  const { token } = useAuth();
  const [customers, setCustomers] = useState<ICustomer[]>([]);

  const getCustomers = async (): Promise<void> => {
    try {
      let result = await getCustomerList(token);
      setCustomers(result);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getCustomers().finally(() => console.log("Finally"));
  }, []);

  const func_first = () => console.log("func_first click");
  const func_second = () => console.log("func_second click");

  return (
    <section className={styles.wrapperCustomer}>
      <section className={styles.customerHeader}>
        <Filter name={["name"]} func={[func_first]} />
        <Button
          title={"add customer"}
          functionClick={() => console.log("click")}
        />
      </section>
      <section>
        {customers.length && (
          <article>
            <span>{customers[0].name}</span>
            <span>{customers[0].individual_tax_number}</span>
          </article>
        )}
      </section>
    </section>
  );
};

export { Customer };
