import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../../configs/global";
import { GET_TEXT_RESPONSE } from "./_api";

const getTextResponse_url = `${BASE_URL}${GET_TEXT_RESPONSE}`;

export const useGetTextResponse = async () => {
  try {
    const response: AxiosResponse = await axios.get(getTextResponse_url);
    const formattedResponse = response?.data.replace(/(\w+):/g, '"$1":'); // Add double quotes around property names
    return JSON.parse(formattedResponse);
  } catch (error) {
    console.log("ERROR FETCHING TEXT RESPONSE", error);
  }
};
