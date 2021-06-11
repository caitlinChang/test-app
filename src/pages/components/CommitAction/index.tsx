import { Select, Button, FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { CLUSTERS, ENVS } from "src/api/types";
import { api_store, STATUS_NAME } from "src/store";
import { getEnvChildren, getClusterChildren } from "../CommitFilter";

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
        style={{ width: "300px", margin: "0 20px" }}
        placeholder="请选择环境"
        defaultValue={ENVS.TEST}
        onChange={(values) => api_store.updateStatus(STATUS_NAME.ENV, [values])}
      >
        {getEnvChildren()}
      </Select>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "300px" }}
        placeholder="请选择地区"
        defaultValue={[CLUSTERS.TH]}
        onChange={(values) =>
          api_store.updateStatus(STATUS_NAME.CLUSTER, values)
        }
      >
        {getClusterChildren()}
      </Select>
      <Select
        mode="multiple"
        allowClear
        style={{ width: "300px" }}
        placeholder="请选择namespaces"
        defaultValue={[CLUSTERS.TH]}
        onChange={(values) =>
          api_store.updateStatus(STATUS_NAME.CLUSTER, values)
        }
      >
        {getClusterChildren()}
      </Select>
      <Button onClick={props.onRefresh}>刷新</Button>
      <Button type="default" onClick={props.onCommit}>
        提交修改
      </Button>
      <Button type="primary" onClick={props.onPublish}>
        发布
      </Button>
    </div>
  );
}
