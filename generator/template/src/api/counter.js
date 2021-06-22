import httpclient from "@/utils/httpclient";

export function getDemo(params) {
  return httpclient.get("/count/demo", params);
}
