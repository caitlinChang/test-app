import { Button, Select, FormInstance, message } from "antd";
import React, { useEffect, useState } from "react";
import { CLUSTERS, ENVS } from "src/api/types";
import { store, STATUS_NAME } from "src/store";

const { Option } = Select;

export const getEnvChildren = function () {
  return Object.entries(ENVS).map(([key, value]) => {
    return (
      <Option key={value} value={value}>
        {value}
      </Option>
    );
  });
};

export const getClusterChildren = function () {
  return Object.entries(CLUSTERS).map(([key, value]) => {
    return (
      <Option key={value} value={value}>
        {value}
      </Option>
    );
  });
};

export default function CommitFilter(props: {
  onUpdate: (name: STATUS_NAME, value: string) => void;
}) {
  return (
    <div
      style={{
        padding: "12px 0",
        overflow: "hidden",
      }}
    >
      <strong>请选择</strong>
      <Select
        allowClear
        style={{ width: "100px", margin: "0 20px" }}
        placeholder="请选择发布环境"
        defaultValue={ENVS.TEST}
        onChange={(value) => props.onUpdate(STATUS_NAME.ENV, value)}
      >
        {getEnvChildren()}
      </Select>

      <Select
        allowClear
        style={{ width: "100px" }}
        placeholder="请选择发布地区"
        defaultValue={CLUSTERS.TH}
        onChange={(value) => props.onUpdate(STATUS_NAME.CLUSTER, value)}
      >
        {getClusterChildren()}
      </Select>
    </div>
  );
}
