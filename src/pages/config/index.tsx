import React, { useEffect } from "react";
import { Button, Form, Input } from "antd";
import api from "../../api/apollo";
import { CLUSTERS, ENVS } from "src/api/types";

export default function ConfigPage() {
  const getFormData = async () => {
    const res = await api.getConfig({
      envs: ENVS.TEST,
      clusters: CLUSTERS.TH,
      namespaces: "frontend-config",
    });
    if (res) {
      const { baseInfo, items } = res;
      items.forEach((item) => {
        const { value } = item;
      });
    }
    console.log(res);
  };
  const handleRefresh = function () {
    getFormData();
  };
  useEffect(() => {
    getFormData();
  }, []);
  return (
    <div>
      <Button onClick={handleRefresh}>刷新</Button>
      <Button>提交修改</Button>
      <Form>
        <Form.Item></Form.Item>
      </Form>
    </div>
  );
}
