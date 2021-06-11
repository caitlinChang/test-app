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

export default function CommitFilter(props: { onSyncToOthers: () => void }) {
  const handleSyncToOthers = function () {
    if (!store[STATUS_NAME.ENV].value || !store[STATUS_NAME.CLUSTER].value) {
      return message.warning("请选择需要同步的环境和地区");
    }

    props.onSyncToOthers();
  };

  return (
    <div
      style={{
        padding: "12px 0",
        overflow: "hidden",
        backgroundColor: "#f0f0f0",
      }}
    >
      <Button onClick={handleSyncToOthers}>同步到其他环境和地区</Button>
      <Select
        allowClear
        style={{ width: "300px", margin: "0 20px" }}
        placeholder="请选择发布环境"
        defaultValue={ENVS.TEST}
        onChange={(values) => store.updateStatus(STATUS_NAME.ENV, [values])}
      >
        {getEnvChildren()}
      </Select>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "300px" }}
        placeholder="请选择发布地区"
        defaultValue={[CLUSTERS.TH]}
        onChange={(values) => store.updateStatus(STATUS_NAME.CLUSTER, values)}
      >
        {getClusterChildren()}
      </Select>
    </div>
  );
}
