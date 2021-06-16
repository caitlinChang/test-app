import React, { useMemo, useState } from "react";

import { Input, Switch } from "antd";
import { deTemplated, templated } from "src/utils";
import { STATUS_NAME, store } from "src/store";

export default function FilterInput(props: {
  onChange?: (value: string) => void;
  value?: string;
}) {
  const [inputType, setInputType] = useState(false);
  const [isEncode, setEncode] = useState(false);
  function handleChange(e: any) {
    let value: string = e.target.value;

    if (isEncode) {
      value = encodeURIComponent(value);
    }
    if (inputType) {
      value = deTemplated(
        e.target.value,
        store[STATUS_NAME.ENV].value,
        store[STATUS_NAME.CLUSTER].value
      );
    }

    props.onChange && props.onChange(value);
  }

  const displayValue = useMemo(() => {
    let v = props.value || "";
    if (isEncode) {
      v = decodeURIComponent(v);
    }
    if (inputType) {
      v = templated(v);
    }
    return v;
  }, [props.value, isEncode, inputType]);

  return (
    <div>
      <Input value={displayValue} onChange={handleChange}></Input>
      <Switch
        checked={inputType}
        checkedChildren="字符串模版"
        unCheckedChildren="字符串"
        onChange={() => {
          setInputType(!inputType);
        }}
      />
      <Switch
        checked={isEncode}
        checkedChildren="解码"
        unCheckedChildren="编码"
        onChange={() => {
          setEncode(!isEncode);
        }}
      />
    </div>
  );
}
