import { AxiosResponse } from "axios";
import { fetch } from "./base";
import {
  ENVS,
  CLUSTERS,
  PutParam,
  GetConfigParam,
  GetApiResponse,
} from "./types";

export default {
  async put(params: PutParam) {
    const namespaces = "frontend-config";
    const envs = ENVS.TEST;
    const clusters = CLUSTERS.TH;
    const api = "/item";

    return await fetch({
      method: "PUT",
      url: `/envs/${envs}/clusters/${clusters}/namespaces/${namespaces}${api}`,
      params,
      headers: {
        "content-type": "application/json",
      },
    });
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
