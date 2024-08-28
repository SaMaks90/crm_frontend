import { requestToApiServer } from "../services";

interface ISignIn {
  token: string;
  message: string;
}

const signIn = async (data: {
  email: string;
  password: string;
}): Promise<ISignIn> => {
  let response = await requestToApiServer({
    url: "auth/login",
    method: "POST",
    body: data,
  });

  if (response.status === 200) {
    let result = await response.json();
    return {
      token: result["access_token"],
      message: "",
    };
  }

  return {
    token: "",
    message: "Don't find a user with this email",
  };
};

const signOut = () => {};

export { signIn, signOut };
