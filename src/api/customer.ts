import { requestToApiServer } from "../services";

const getCustomerList = async (token: string): Promise<any> => {
  const response = await requestToApiServer({
    url: "customer",
    method: "GET",
    token,
  });

  return await response.json();
};

export { getCustomerList };
