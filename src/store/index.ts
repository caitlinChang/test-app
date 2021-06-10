import { CLUSTERS, ENVS } from "src/api/types";
import { StatusManager } from "./base";

export enum STATUS_NAME {
  ENV = "env_status",
  CLUSTER = "cluster_status",
}

class API_Store {
  [STATUS_NAME.ENV]: StatusManager;
  [STATUS_NAME.CLUSTER]: StatusManager;

  constructor() {
    this.env_status = new StatusManager(ENVS.TEST);
    this.cluster_status = new StatusManager(CLUSTERS.TH);
  }

  // TODO: value的类型判断
  updateStatus(name: STATUS_NAME, value: string[]) {
    console.log(value);

    this[name].update(value);
  }
}

export const api_store = new API_Store();
