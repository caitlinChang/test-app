import { Button, FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import { CLUSTERS, ENVS } from "src/api/types";

export default function CommitAction(props: {
  onRefresh: () => void;
  onCommit: () => void;
  onPublish: () => void;
}) {
  return (
    <div>
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
