import { AxiosPromise } from "axios";
import { STATUS_NAME, store, sync_store } from "src/store";

export function generateUrl(namespaces: string, api: string): string[] {
  const envs = sync_store[STATUS_NAME.ENV].values;
  const clusters = sync_store[STATUS_NAME.CLUSTER].values;
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
  const reg = `\$\{env\}`;
  const functionCode = `return "${str}"`;
  console.log("functionCode =", functionCode);

  let replaceStatus = new Function("env", "cluster", functionCode);
  const env = sync_store[STATUS_NAME.ENV].values[0].toLowerCase();
  const cluster = sync_store[STATUS_NAME.CLUSTER].values[0].toLowerCase();
  return replaceStatus(env, cluster);
}
