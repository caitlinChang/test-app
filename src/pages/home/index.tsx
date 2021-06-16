import { FormInstance, Form } from "antd";
import React, { useEffect, useState } from "react";
import { set, get } from "lodash";
import ConfigPage from "../config";
import api from "../../api/apollo";
import { CLUSTERS, ENVS, PutParam } from "src/api/types";
import CommitAction from "../components/CommitAction";
import { getCurrentBaseUrl } from "src/utils";

const EDIT_PATH = ["TrafficManagementCentre", "Overview"];

export default function Home() {
  const [form] = Form.useForm();
  let commit_info: null | PutParam = null;
  const handleCommit = function () {
    if (!commit_info) return;
    const changedValue = form.getFieldsValue();
    const editContent = set(
      JSON.parse(commit_info.value),
      EDIT_PATH,
      changedValue
    );
    console.log("editContent =", editContent);

    api.put({
      url: getCurrentBaseUrl(),
      config: {
        ...commit_info,
        value: JSON.stringify(editContent),
      },
    });
  };

  const handlePublish = function () {};
  /**
   * 获取apollo配置
   */
  const getFormData = async () => {
    const res = await api.getConfig({ url: getCurrentBaseUrl() });
    if (res) {
      const { baseInfo, items } = res.data;
      commit_info = items[0].item;
      const parseValue = get(JSON.parse(commit_info.value), EDIT_PATH);
      console.log("parseValue =", parseValue);

      form.setFieldsValue(parseValue);
    }
  };
  useEffect(() => {
    getFormData();
  }, []);
  return (
    <div>
      {/* <CommitFilter /> */}
      <CommitAction
        onPublish={handlePublish}
        onCommit={handleCommit}
        onRefresh={getFormData}
      />
      <ConfigPage form={form} />
    </div>
  );
}
