export interface ICustomer {
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

export enum Tax {
  ZERO = "0%" as any,
  SEVEN = "7%" as any,
  TWENTY = "20%" as any,
}

export enum CompanyType {
  "IE" = "individual entrepreneur" as any,
  "LLC" = "limited liability company" as any,
}
