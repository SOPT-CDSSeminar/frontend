import { PostBody } from "../dataType";
import { reqAPI } from ".";
export const postData = (postBody: PostBody) => {
  return reqAPI.post("/review", postBody);
};
