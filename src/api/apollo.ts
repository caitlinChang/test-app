import { AxiosResponse } from "axios";
import { fetch } from "./base";
import { PutParam, GetConfigParam, GetApiResponse } from "./types";
import { generateRequest, generateUrl } from "src/utils";

const NAMESPACES = "frontend-config"; //当前所有环境下所有的命令空间，这里先写死

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async put(params: PutParam) {
    const api = "/item";

    const request = (url: string) =>
      fetch({
        method: "PUT",
        url,
        data: params,
        headers: {
          "Content-Type": "application/json",
        },
      });

    const fns = generateRequest(generateUrl(NAMESPACES, api), request);

    return await Promise.all(fns);
  },

  async getConfig(
    params: GetConfigParam
  ): Promise<AxiosResponse<GetApiResponse>> {
    const url = `/envs/${params.envs}/clusters/${params.clusters}/namespaces/${params.namespaces}`;
    return await fetch({
      method: "GET",
      url,
    });
  },
};
