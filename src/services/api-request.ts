interface IRequestParams {
  method: string;
  url: string;
  body?: any;
  id?: string;
  token?: string;
}

const SERVER: string = "http://localhost:3001/";

const getHeaders = (token?: string): HeadersInit => {
  if (token) {
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "*/*",
    };
  }

  return {
    "Content-Type": "application/json",
    Accept: "*/*",
  };
};

const requestToApiServer = async (data: IRequestParams): Promise<Response> => {
  let url = `${SERVER}${data.url}`;

  if (data.id) {
    url += `/${data.id}`;
  }

  return await fetch(url, {
    method: data.method,
    headers: data.token ? getHeaders(data.token) : getHeaders(),
    body: data.body ? JSON.stringify(data.body) : null,
  })
    .then((res) => res)
    .catch((error) => error);
};

export { requestToApiServer };
