import { destroyCookie } from "nookies";

export const HttpClient = async <TBody>(
  url: string,
  { headers, body, ...options }: RequestInit
): Promise<TBody> => {
  return fetch(url, {
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    ...options,
  }).then((response) => {
    if (response.ok) {
      return response.json() as Promise<TBody>;
    }

    throw new Error("Failed to fetch data from the server");
  });
};

export const loginService = {
  async login({ username, password }: { username: string; password: string }) {
    // Uncomment and implement the login logic if needed
    // return HttpClient(
    //   "https://instalura-api-omariosouto.vercel.app/api/login",
    //   {
    //     method: "POST",
    //     body: {
    //       username,
    //       password,
    //     },
    //   }
    // ).then((response) => {
    //   const { token } = response.data;
    //   const DAY_IN_SECONDS = 86400;
    //   setCookie(null, "APP_TOKEN", token, {
    //     path: "/",
    //     maxAge: DAY_IN_SECONDS * 7,
    //   });
    //   return {
    //     token,
    //   };
    // });
  },
  logout() {
    destroyCookie(null, "APP_TOKEN");
  },
};
