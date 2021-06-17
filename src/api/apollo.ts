import { AxiosResponse } from "axios";
import { fetch } from "./base";
import {
  GetConfigParam,
  GetApiResponse,
  GetNamespaceParam,
  GetNamespaceResponse,
  PutApiParam,
  ReleaseApiParam
} from "./types";

import moment from "moment";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  async put(params: PutApiParam) {
    const api = "/item";
    return await fetch({
      method: "PUT",
      url: params.url + api,
      data: params.config,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async release(params:{
    url:string;
  }){
    const api = "/releases";
    const title = moment().format('YYYYMMDDHHmmss')
    const config :ReleaseApiParam = {
      isEmergencyPublish:false,
      releaseComment:"",
      releaseTitle:`${title}-release`,
    }
    
    return await fetch({
      method: "POST",
      url: params.url + api,
      data: config,
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  async getConfig(
    params: GetConfigParam
  ): Promise<AxiosResponse<GetApiResponse>> {
    const url = params.url;
    return await fetch({
      method: "GET",
      url,
    });
  },

  async getNamespace(
    params: GetNamespaceParam
  ): Promise<AxiosResponse<GetNamespaceResponse>> {
    const url = params.url;
    return await fetch({
      method: "GET",
      url,
    });
  },
};
