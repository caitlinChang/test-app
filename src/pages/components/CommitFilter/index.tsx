import { Select, FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { CLUSTERS, ENVS } from "src/api/types";

const { Option } = Select;

const getEnvChildren = function () {
  return Object.entries(ENVS).map(([key, value]) => {
    console.log(key, value);
    return (
      <Option key={value} value={value}>
        {value}
      </Option>
    );
  });
};

const getClusterChildren = function () {
  return Object.entries(CLUSTERS).map(([key, value]) => {
    return (
      <Option key={value} value={value}>
        {value}
      </Option>
    );
  });
};

export default function Home() {
  return (
    <div style={{ margin: "20px auto", borderBottom: "1px solid #000" }}>
      <strong>请选择发布环境(env)和地区(cluster): </strong>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "300px", margin: "0 20px" }}
        placeholder="请选择发布环境"
        defaultValue={[ENVS.TEST]}
      >
        {getEnvChildren()}
      </Select>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "300px" }}
        placeholder="请选择发布地区"
        defaultValue={[CLUSTERS.TH]}
      >
        {getClusterChildren()}
      </Select>
    </div>
  );
}
