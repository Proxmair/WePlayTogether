import axios from "axios";
import { errorHandler } from "./baseService";

interface RegisterInterface {
  email: string;
  password: string;
}

export const registerUser = errorHandler(
  async ({ email, password }: RegisterInterface) => {
    const response = await axios.post("/api/v1/auth/register", {
      email,
      password,
    });
    return response;
  }
);

export const loginUser = errorHandler(
  async ({ email, password }: RegisterInterface) => {
    const response = await axios.post("/api/v1/auth/login", {
      email,
      password,
    });
    return response;
  }
);

export const loadUser = errorHandler(async () => {
  const response = await axios.get("/api/v1/auth/token");
  return response;
});