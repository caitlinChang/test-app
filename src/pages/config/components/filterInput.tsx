import React, { useState } from "react";

import { Input, Switch } from "antd";
import { templateFilter } from "src/utils";

export default function FilterInput(props: {
  onChange?: (value: string) => void;
  value?: string;
}) {
  const [inputType, setInputType] = useState(false);
  function handleChange(e: any) {
    if (inputType) {
      const value = templateFilter(e.target.value);
      props.onChange && props.onChange(encodeURIComponent(value));
    } else {
      props.onChange && props.onChange(encodeURIComponent(e.target.value));
    }
  }

  return (
    <div>
      <Input
        value={decodeURIComponent(props.value || "")}
        onChange={handleChange}
      ></Input>
      <Switch
        checked={inputType}
        checkedChildren="字符串模版"
        unCheckedChildren="字符串"
        onChange={() => {
          setInputType(!inputType);
        }}
      />
      <div>编码结果: {encodeURIComponent(props.value || "")}</div>
      <div></div>
    </div>
  );
}
