import { getMethodRequest, postMethodRequest } from "@/utils/ajax";

export const reqGetText = params => {
  return getMethodRequest("/chen-service/abc/def/666", params);
};
export const reqPostText = data => {
  return postMethodRequest("/chen-service/def/abc/999", data);
};
