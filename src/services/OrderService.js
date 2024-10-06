import { axiosJWT } from "./UserService";

export const createOrder = async (access_token, data) => {
  const res = await axiosJWT.post(
    `${process.env.REACT_APP_URL_BACKEND}/order/create`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};