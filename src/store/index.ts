import { CLUSTERS, ENVS } from "src/api/types";
import { StatusManager, SingletonStatusManager } from "./base";

export enum STATUS_NAME {
  ENV = "env",
  CLUSTER = "cluster",
  NAMESPACE = "namespace",
}

export type NAMESPACES = "frontend-config";

export const NAMESPACE = "frontend-config";

class Store {
  [STATUS_NAME.ENV]: SingletonStatusManager<ENVS>;
  [STATUS_NAME.CLUSTER]: SingletonStatusManager<CLUSTERS>;
  [STATUS_NAME.NAMESPACE]: SingletonStatusManager<NAMESPACES>;

  constructor() {
    this.env = new SingletonStatusManager(ENVS.TEST);
    this.cluster = new SingletonStatusManager(CLUSTERS.TH);
    this.namespace = new SingletonStatusManager(NAMESPACE);
  }

  // TODO: value的类型判断
  updateStatus(name: STATUS_NAME, value: any) {
    this[name].update(value);
  }
}

class Sync_Store {
  [STATUS_NAME.ENV]: StatusManager;
  [STATUS_NAME.CLUSTER]: StatusManager;
  [STATUS_NAME.NAMESPACE]: SingletonStatusManager<NAMESPACES>;

  constructor() {
    this.env = new StatusManager([ENVS.TEST]);
    this.cluster = new StatusManager([CLUSTERS.TH]);
    this.namespace = new SingletonStatusManager(NAMESPACE);
  }

  // TODO: value的类型判断
  updateStatus(name: STATUS_NAME, value: any) {
    this[name].update(value);
  }
}

export const store = new Store();

export const sync_store = new Sync_Store();
