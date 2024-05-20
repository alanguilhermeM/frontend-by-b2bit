import axios, { AxiosResponse } from "axios";
import {
  BadRequest,
  // ErrorResponse,
  LoginRequestBody,
  TUser,
  UserProfile,
} from "../types";

export const login = async (
  body: LoginRequestBody
): Promise<
  | AxiosResponse<{
      tokens: { access: string; refresh: string };
      user: UserProfile;
    }>
  | AxiosResponse<BadRequest>
> => {

  try {
    const response = await axios.post(
      "https://api.homologation.cliqdrive.com.br/auth/login/",
      body,
      {
        headers: {
          Accept: "application/json;version=v1_web",
          "Content-Type": "application/json"
        }
      }
    );

    const tokens = JSON.stringify(response.data.tokens)

    localStorage.setItem('tokens', tokens)

    return response;
  } catch (error: any) {
    console.log(error.response)
    return error.response;
  }
};

export const getProfile = async (
  accessToken: string
): Promise<AxiosResponse<TUser>> => {
  try {
    const response = await axios.get(
      "https://api.homologation.cliqdrive.com.br/auth/profile/",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json;version=v1_web",
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};
