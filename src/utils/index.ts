import { AxiosPromise } from "axios";
import { STATUS_NAME, api_store } from "src/store";

export function generateUrl(namespaces: string, api: string): string[] {
  const envs = api_store[STATUS_NAME.ENV].values;
  const clusters = api_store[STATUS_NAME.CLUSTER].values;
  return envs
    .map((env) => {
      return clusters.map((cluster) => {
        return `/envs/${env}/clusters/${cluster}/namespaces/${namespaces}${api}`;
      });
    })
    .flat();
}

export function generateRequest(
  urls: string[],
  request: (url: string) => AxiosPromise<any>
) {
  return urls.map((url: string) => request(url));
}

export function templateFilter(str: string) {
  let replaceStatus = new Function("env", "cluster", `return ${str}`);
  const env = api_store[STATUS_NAME.ENV].values[0].toLowerCase();
  const cluster = api_store[STATUS_NAME.CLUSTER].values[0].toLowerCase();
  return replaceStatus(env, cluster);
}
