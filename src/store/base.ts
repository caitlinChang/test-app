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
