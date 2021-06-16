import { AxiosPromise } from "axios";
import { CLUSTERS, ENVS } from "src/constant";
import { STATUS_NAME, store, sync_store } from "src/store";

// export function generateBaseUrl(): string[] {
//   const envs = sync_store[STATUS_NAME.ENV].values;
//   const clusters = sync_store[STATUS_NAME.CLUSTER].values;
//   const namespace = sync_store[STATUS_NAME.NAMESPACE].value;
//   return envs
//     .map((env) => {
//       return clusters.map((cluster) => {
//         return `/envs/${env}/clusters/${cluster}/namespaces/${namespace}`;
//       });
//     })
//     .flat();
// }

export function getCurrentBaseUrl(): string {
  return `/envs/${store[STATUS_NAME.ENV].value}/clusters/${
    store[STATUS_NAME.CLUSTER].value
  }/namespaces/${store[STATUS_NAME.NAMESPACE].value}`;
}

export function generateRequest(
  urls: string[],
  request: (url: string) => AxiosPromise<any>
) {
  return urls.map((url: string) => request(url));
}

// export function templateFilter(str: string) {
//   const reg = `\$\{env\}`;
//   const functionCode = `return "${str}"`;
//   console.log("functionCode =", functionCode);

//   let replaceStatus = new Function("env", "cluster", functionCode);
//   const env = sync_store[STATUS_NAME.ENV].values[0].toLowerCase();
//   const cluster = sync_store[STATUS_NAME.CLUSTER].values[0].toLowerCase();
//   return replaceStatus(env, cluster);
// }

export function deTemplated(str: string, env: ENVS, cluster: CLUSTERS): string {
  let r: string = str;
  if (env) {
    r = r.replaceAll('"${env}"', `"${env}"`);
  }
  if (cluster) {
    r = r.replaceAll('"${cluster}"', `"${cluster}"`);
  }
  return r;
}
/**
 * 特殊规则，要匹配的字符串必须由双引号包裹，匹配后的字符串也是由双引号包裹
 * @param str
 * @returns
 */
export function templated(str: string): string {
  let r: string = str;

  const env = Object.values(ENVS).find((value) =>
    str.includes(value.toLowerCase())
  );
  const cluster = Object.values(CLUSTERS).find((cluster) =>
    str.includes(cluster.toLowerCase())
  );

  if (env) {
    r = r.replaceAll(`"${env.toLowerCase()}"`, '"${env}"');
  }
  if (cluster) {
    r = r.replaceAll(`"${cluster.toLowerCase()}"`, '"${cluster}"');
  }
  return r;
}
