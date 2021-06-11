import React, { useMemo, useState } from "react";

import { Input, Switch, Tooltip } from "antd";
import { templateFilter } from "src/utils";

export default function FilterInput(props: {
  onChange?: (value: string) => void;
  value?: string;
}) {
  const [inputType, setInputType] = useState(false);
  const [isEncode, setEncode] = useState(false);
  function handleChange(e: any) {
    let value: string = e.target.value;

    if (inputType) {
      value = templateFilter(e.target.value);
    }

    if (isEncode) {
      value = encodeURIComponent(value);
    }

    props.onChange && props.onChange(value);
  }

  const displayValue = useMemo(() => {
    if (isEncode) {
      return decodeURIComponent(props.value || "");
    }
    return props.value;
  }, [props.value, isEncode]);

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
        checkedChildren="编码"
        unCheckedChildren="编码"
        onChange={() => {
          setEncode(!isEncode);
        }}
      />
      {isEncode && (
        <Tooltip title={encodeURIComponent(props.value || "")}>
          编码结果
        </Tooltip>
      )}
      {inputType && <Tooltip title="">字符串匹配结果</Tooltip>}
    </div>
  );
}
