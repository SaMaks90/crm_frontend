import { requestToApiServer } from "../services";

const getUser = async (token: string): Promise<any> => {
  let response = await requestToApiServer({
    url: "user",
    method: "GET",
    token: token,
  });

  return await response.json();
};

export { getUser };
