import { requestToApiServer } from "../services";

const getUser = async (token: string): Promise<any> => {
  let response = await requestToApiServer({
    url: "user",
    method: "GET",
    token: token,
  });

  if (response.status === 200) {
    let result = await response.json();

    console.log(result);

    // return {
    //   user: result["access_token"],
    // };
  }
};

export { getUser };
