import { Select, Button, Input } from "antd";
import React, { useState } from "react";
import { CLUSTERS, ENVS } from "src/api/types";
import { store, STATUS_NAME } from "src/store";
import { getEnvChildren, getClusterChildren } from "../CommitFilter";
import OneStepSync from "../OneStepSync";

import "./index.less";

export default function CommitAction(props: {
  onRefresh: () => void;
  onCommit: () => void;
  onPublish: () => void;
  onSync: () => void;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="action_wrap">
      <section className="action_section">
        <strong>当前环境：</strong>
        <Select
          allowClear
          placeholder="请选择环境"
          style={{ width: "100px" }}
          onChange={(value) => store.updateStatus(STATUS_NAME.ENV, value)}
        >
          {getEnvChildren()}
        </Select>
      </section>
      <section className="action_section">
        <strong>当前地区：</strong>
        <Select
          allowClear
          style={{ width: "100px" }}
          placeholder="请选择地区"
          onChange={(value) => store.updateStatus(STATUS_NAME.CLUSTER, value)}
        >
          {getClusterChildren()}
        </Select>
      </section>
      <section className="action_section">
        <strong>当前命名空间：</strong>
        <Input
          style={{ display: "inline", width: "150px" }}
          disabled
          value={"frontend-config"}
        ></Input>
      </section>
      <section className="action_btn">
        <Button onClick={props.onRefresh}>刷新</Button>
        <Button type="default" onClick={props.onCommit}>
          提交修改
        </Button>
        <Button type="primary" onClick={props.onPublish}>
          发布
        </Button>
        <Button type="primary" onClick={() => props.onSync()}>
          一键同步
        </Button>
        <OneStepSync onClose={() => setVisible(false)} visible={visible} />
      </section>
    </div>
  );
}
