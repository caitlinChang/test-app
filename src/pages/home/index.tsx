import { FormInstance, Form, message } from "antd";
import React, { useEffect, useState } from "react";
import { set, get } from "lodash";
import ConfigPage from "../config";
import api from "../../api/apollo";
import { CLUSTERS, ENVS, PutParam } from "src/api/types";
import CommitAction from "../components/CommitAction";
import { getBaseUrl, templated, deTemplated } from "src/utils";
import { STATUS_NAME, store } from "src/store";

import { observer } from "mobx-react-lite";

const EDIT_PATH = ["TrafficManagementCentre", "Overview"];

function translateString(str: string, env: ENVS, cluster: CLUSTERS) {
  return encodeURIComponent(
    deTemplated(templated(decodeURIComponent(str)), env, cluster)
  );
}

function Home() {
  const [form] = Form.useForm();
  let commit_info: null | PutParam = null;

  const handleCommit = function () {
    const changedValue = form.getFieldsValue();
    structureBody(changedValue);
  };

  async function structureBody(
    changedValue: any,
    env?: ENVS,
    cluster?: CLUSTERS
  ) {
    if (!commit_info) return;
    const editContent = set(
      JSON.parse(commit_info.value),
      EDIT_PATH,
      changedValue
    );
      // console.log('editContent =', editContent);
      // return ;
      
    await api.put({
      url: getBaseUrl(env, cluster),
      config: {
        ...commit_info,
        value: JSON.stringify(editContent),
      },
    });
  }

  const handlePublish = async function (env?:ENVS,cluster?:CLUSTERS) {
    await api.release({ url:getBaseUrl(env,cluster)})
  };
  /**
   * 一键同步
   */
  const handleSync = async function () {
    const env = ENVS.LIVE;
    // const cluster = CLUSTERS.BR;
    Object.values(CLUSTERS).map(async (cluster) => {
      const res = await api.getConfig({ url: getBaseUrl(env, cluster) });
      if (res) {
        const { items } = res.data;
        commit_info = items[0].item;
        const isEditValueExit = get(JSON.parse(commit_info.value), EDIT_PATH);
        if (isEditValueExit) {
          const currentValues = form.getFieldsValue();
          const newData = currentValues.Graphs.map((graph: any) => {
            graph.promParams.query = translateString(
              graph.promParams.query,
              env,
              cluster
            );

            graph.promParams.ratioQuery = translateString(
              graph.promParams.ratioQuery,
              env,
              cluster
            );
            return graph;
          });
          
          await structureBody({
            Graphs:newData
          }, env, cluster);
          // @ts-ignore
          // if(env !== ENVS.LIVE){
          //   await handlePublish(env,cluster)
          // }

          

          message.success("提交成功！");
        } else {
          console.log(`${env}环境下的${cluster}地区没有该字段可以替换`);
        }
      }
    });
  };

  /**
   * 获取apollo配置
   */
  const getFormData = async () => {
    const url = getBaseUrl();
    console.log('url =', url);
    
    if(!url){
      return message.warning('请先选择环境和地区')
    }

    const res = await api.getConfig({ url });
    if (res) {
      const { items } = res.data;
      commit_info = items[0].item;
      const parseValue = get(JSON.parse(commit_info.value), EDIT_PATH);
      console.log("parseValue =", parseValue);

      form.setFieldsValue(parseValue);
    }
  };
  useEffect(() => {
    console.log('发生改变', store[STATUS_NAME.ENV].value, store[STATUS_NAME.CLUSTER].value);
    
    if(store[STATUS_NAME.ENV].value, store[STATUS_NAME.CLUSTER].value){
      getFormData();
    }
  }, [store[STATUS_NAME.ENV].value, store[STATUS_NAME.CLUSTER].value]);
  return (
    <div>
      {/* <CommitFilter /> */}
      <CommitAction
        onPublish={handlePublish}
        onCommit={handleCommit}
        onRefresh={getFormData}
        onSync={handleSync}
      />
      <ConfigPage form={form} />
    </div>
  );
}

export default observer(Home)
