import axios from "axios";
import { setToken } from "../reducers/authReducer";
// import { setUser } from "../reducers/profileReducer";

export const login = (email, password, navigate) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
      {
        email,
        password,
      }
    );

    const data = response.data;
    const token = data.token;
    // localStorage.setItem("token", token);
    console.log(token);
    dispatch(setToken(token));
    // navigate("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return;
    }
    alert(error?.message);
  }
};
