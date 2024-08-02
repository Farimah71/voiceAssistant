import { ResponseModeType } from "../../../../types/response-mode.type";

export type ResponseModeProps = {
  responseModeHandler: (mode: ResponseModeType) => void;
};
