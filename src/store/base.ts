import { makeAutoObservable } from "mobx";

export class StatusManager<T> {
  values: T[];

  constructor(defaultValue: T[]) {
    this.values = defaultValue;

    makeAutoObservable(this)
  }

  update(values: T[]) {
    this.values = values;
  }
}

export class SingletonStatusManager<T> {
  value: T | undefined;

  constructor(defaultValue?: T) {
    this.value = defaultValue;
    makeAutoObservable(this)
  }

  update(v: T) {
    this.value = v;
  }
}
