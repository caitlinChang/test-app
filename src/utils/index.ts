import { AxiosPromise } from "axios";
import { CLUSTERS, ENVS, NAMESPACES } from "src/constant";
import { STATUS_NAME, store, sync_store } from "src/store";

export function getBaseUrl(
  env?: ENVS,
  cluster?: CLUSTERS,
  namespace?: NAMESPACES
): string {
  
  env = env || store[STATUS_NAME.ENV].value;
  cluster = cluster || store[STATUS_NAME.CLUSTER].value;
  namespace = namespace || store[STATUS_NAME.NAMESPACE].value;
  
  if(!env || !cluster !|| !namespace) {
    return ''
  }
  return `/envs/${env}/clusters/${cluster}/namespaces/${namespace}`;
}

export function generateRequest(
  urls: string[],
  request: (url: string) => AxiosPromise<any>
) {
  return urls.map((url: string) => request(url));
}

export function deTemplated(str: string, env: ENVS, cluster: CLUSTERS): string {
  let r: string = str;
  if (env) {
    r = r.replaceAll('"${env}"', `"${env.toLowerCase()}"`);
  }
  if (cluster) {
    r = r.replaceAll('"${cluster}"', `"${cluster.toLowerCase()}"`);
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
