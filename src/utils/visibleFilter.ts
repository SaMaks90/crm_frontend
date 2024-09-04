import { CompanyType, ICustomer, ICustomerFilterInput, Tax } from "../types";

export const getCustomerListWithFilter = (
  customerList: ICustomer[],
  filterInput: ICustomerFilterInput,
) => {
  return customerList
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
};
