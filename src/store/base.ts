export class StatusManager {
  values: string[];

  constructor(defaultValue: string | string[]) {
    if (typeof defaultValue === "string") {
      this.values = [defaultValue];
    } else {
      this.values = defaultValue;
    }
  }

  update(values: string[]) {
    this.values = values;
  }
}

export class SingletonStatusManager<T> {
  value: T;

  constructor(defaultValue: T) {
    this.value = defaultValue;
  }

  update(v: any) {
    this.value = v as T;
  }
}
