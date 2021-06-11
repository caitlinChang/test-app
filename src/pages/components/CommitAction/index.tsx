import { Select, Button, FormInstance, Input } from "antd";
import React, { useEffect, useState } from "react";
import { CLUSTERS, ENVS } from "src/api/types";
import { store, STATUS_NAME } from "src/store";
import { getEnvChildren, getClusterChildren } from "../CommitFilter";
import OneStepSync from "../OneStepSync";

export default function CommitAction(props: {
  onRefresh: () => void;
  onCommit: () => void;
  onPublish: () => void;
}) {
  return (
    <div>
      <strong></strong>
      <Select
        allowClear
        style={{ width: "300px", margin: "0 10px" }}
        placeholder="请选择环境"
        defaultValue={ENVS.TEST}
        onChange={(values) => store.updateStatus(STATUS_NAME.ENV, [values])}
      >
        {getEnvChildren()}
      </Select>
      <Select
        allowClear
        style={{ width: "300px" }}
        placeholder="请选择地区"
        defaultValue={CLUSTERS.TH}
      >
        {getClusterChildren()}
      </Select>
      <Input
        style={{ width: "300px" }}
        disabled
        value={"frontend-config"}
      ></Input>
      {/* <Select
        allowClear
        style={{ width: "300px" }}
        placeholder="请选择namespaces"
        defaultValue={"frontend-config"}
      ></Select> */}
      <Button onClick={props.onRefresh}>刷新</Button>
      <Button type="default" onClick={props.onCommit}>
        提交修改
      </Button>
      <Button type="primary" onClick={props.onPublish}>
        发布
      </Button>
      <OneStepSync />
    </div>
  );
}
