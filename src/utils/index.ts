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
