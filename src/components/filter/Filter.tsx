import React from "react";
import styles from "./filter.module.scss";
import { CompanyType, Tax } from "../../types";

interface IFilterProps {
  name: string;
  func: (name: string, value: any) => void;
}

const FilterTaxSystem = ({ name, func }: IFilterProps) => {
  let values = Object.values(Tax);
  let keys = Object.keys(Tax);

  const handlerChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    func(name, value);
  };

  return (
    <select
      name={name}
      defaultValue={undefined}
      onChange={handlerChange}
      className={styles.filterInput}
    >
      <option value={undefined}></option>
      {values.map((elem, index) => (
        <option key={index} value={keys[index]}>
          {elem}
        </option>
      ))}
    </select>
  );
};

const FilterCompanyType = ({ name, func }: IFilterProps) => {
  let values = Object.values(CompanyType);
  let keys = Object.keys(CompanyType);

  const handlerChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    const { name, value } = event.target;
    func(name, value);
  };

  return (
    <select
      name={name}
      defaultValue={undefined}
      onChange={handlerChange}
      className={styles.filterInput}
    >
      <option value={undefined}></option>
      {values.map((elem, index) => (
        <option key={index} value={keys[index]}>
          {elem}
        </option>
      ))}
    </select>
  );
};

const Filter = ({ name, func }: IFilterProps) => {
  if (name === "tax-system") {
    return <FilterTaxSystem name={name} func={func} />;
  }

  if (name === "company-type") {
    return <FilterCompanyType name={name} func={func} />;
  }

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    func(name, value);
  };

  return (
    <input
      className={styles.filterInput}
      title={name}
      type={"text"}
      name={name}
      onChange={handlerChange}
    />
  );
};

export { Filter };
