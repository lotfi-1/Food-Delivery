/** @format */

import { BASE_URL } from "../config/Urls";
import errorHandler from "./../utils/errorHandler";

const apiCall = async (endpoint, props) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    errorHandler(error);
    throw error;
  }
};

export const signIn = async (props) => {
  if (!props.phone || !props.password)
    throw new Error("Invalid Phone Number Or Password");
  return apiCall("/login", props);
};

export const signUp = async (props) => {
  if (!props.phone || !props.password || !props.name || !props.code)
    throw new Error("Invalid Phone Number, Password, Name, or Code");
  return apiCall("/register/verify", props);
};

export const sendSms = async (phone, password, name) => {
  if (!phone || !password || !name)
    throw new Error("Invalid Phone Number, Password, or Name");
  return apiCall("/register", { phone });
};
