export class StatusManager<T> {
  values: T[];

  constructor(defaultValue: T[]) {
    this.values = defaultValue;
  }

  update(values: T[]) {
    this.values = values;
  }
}

export class SingletonStatusManager<T> {
  value: T;

  constructor(defaultValue: T) {
    this.value = defaultValue;
  }

  update(v: T) {
    this.value = v;
  }
}
