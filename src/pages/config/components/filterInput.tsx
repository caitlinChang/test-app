import React, { useMemo, useState } from "react";

import { Input } from "antd";

export default function FilterInput(props: {
  onChange?: (value: string) => void;
  value?: string;
}) {
  function handleChange(e: any) {
    const value = encodeURIComponent(e.target.value);
    props.onChange && props.onChange(value);
  }

  return (
    <>
      <Input
        value={decodeURIComponent(props.value || "")}
        onChange={handleChange}
      ></Input>
      <div>编码结果: {encodeURIComponent(props.value || "")}</div>
    </>
  );
}
