import styles from "./customer-header-option.module.scss";
import { Filter, Button } from "../../";
import { CompanyType, ICustomerFilterInput, Tax } from "../../../types";
import { Dispatch, SetStateAction } from "react";

interface ICustomerHeaderOptionProps {
  setCustomerFilterInput: Dispatch<SetStateAction<ICustomerFilterInput>>;
}

const CustomerHeaderOption = ({
  setCustomerFilterInput,
}: ICustomerHeaderOptionProps) => {
  const handlerChangeInputValue = (name: string, value: any): void => {
    switch (name) {
      case "tax-system":
        setCustomerFilterInput((prevState) => ({
          ...prevState,
          taxSystem: value ? Tax[value] : "",
        }));
        break;
      case "company-type":
        setCustomerFilterInput((prevState) => ({
          ...prevState,
          companyType: value ? CompanyType[value] : "",
        }));
        break;
      case "name":
        setCustomerFilterInput((prevState) => ({ ...prevState, text: value }));
        break;
      default:
        console.error("Don`t find case: ", name);
    }
  };

  return (
    <section className={styles.customerOptions}>
      <Filter name={"name"} func={handlerChangeInputValue} />
      <Filter name={"tax-system"} func={handlerChangeInputValue} />
      <Filter name={"company-type"} func={handlerChangeInputValue} />

      <Button
        title={"add customer"}
        functionClick={() => console.log("click")}
      />
    </section>
  );
};

export { CustomerHeaderOption };
