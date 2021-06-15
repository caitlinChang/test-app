import { CLUSTERS, ENVS } from "src/api/types";
import { StatusManager, SingletonStatusManager } from "./base";

export type NAMESPACES = "frontend-config";

export enum STATUS_NAME {
  ENV = "ENVS",
  CLUSTER = "CLUSTERS",
  NAMESPACE = "NAMESPACES",
}

export const NAMESPACE = "frontend-config";

class Store {
  [STATUS_NAME.ENV]: SingletonStatusManager<ENVS>;
  [STATUS_NAME.CLUSTER]: SingletonStatusManager<CLUSTERS>;
  [STATUS_NAME.NAMESPACE]: SingletonStatusManager<NAMESPACES>;

  constructor() {
    this[STATUS_NAME.ENV] = new SingletonStatusManager(ENVS.TEST);
    this[STATUS_NAME.CLUSTER] = new SingletonStatusManager(CLUSTERS.TH);
    this[STATUS_NAME.NAMESPACE] = new SingletonStatusManager(NAMESPACE);
  }

  // TODO: value的类型判断
  updateStatus(name: STATUS_NAME, value: any) {
    this[name].update(value);
  }
}

class Sync_Store {
  [STATUS_NAME.ENV]: StatusManager<ENVS>;
  [STATUS_NAME.CLUSTER]: StatusManager<CLUSTERS>;
  [STATUS_NAME.NAMESPACE]: SingletonStatusManager<NAMESPACES>;

  constructor() {
    this[STATUS_NAME.ENV] = new StatusManager([ENVS.TEST]);
    this[STATUS_NAME.CLUSTER] = new StatusManager([CLUSTERS.TH]);
    this[STATUS_NAME.NAMESPACE] = new SingletonStatusManager(NAMESPACE);
  }

  // TODO: value的类型判断
  updateStatus(name: STATUS_NAME, value: any) {
    this[name].update(value);
  }
}

/**
 * 当前环境和地区
 */
export const store = new Store();

/**
 * 一键同步的store
 */
export const sync_store = new Sync_Store();
