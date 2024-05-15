import axios, { AxiosResponse } from "axios";
import {
  BadRequest,
  ErrorResponse,
  LoginRequestBody,
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

    return response;
  } catch (error: any) {
    console.log(error.response)
    return error.response;
  }
};

export const getProfile = async (
  accessToken: string
): Promise<AxiosResponse<UserProfile> | AxiosResponse<ErrorResponse>> => {
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
