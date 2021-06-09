import { FormInstance } from "antd";
import React, { useEffect, useState } from "react";
import ConfigPage from "../config";
import api from "../../api/apollo";
import { CLUSTERS, ENVS } from "src/api/types";
import CommitFilter from "../components/CommitFilter";

export default function Home() {
  const [values, setValues] = useState({});
  let put_info = {};
  const handleCommit = function (form: FormInstance) {
    const value = form.getFieldsValue();
    console.log(value);
    // api.put({
    //   ...put_info,
    //   value: JSON.stringify(value),
    // });
  };
  const getFormData = async () => {
    const res = await api.getConfig({
      envs: ENVS.TEST,
      clusters: CLUSTERS.TH,
      namespaces: "frontend-config",
    });
    if (res) {
      const { baseInfo, items } = res.data;
      const valueList = items.map((info) => {
        const {
          item: { value },
        } = info;
        put_info = info.item;
        return value;
      });

      valueList.forEach((value) => {
        const parsedValue = JSON.parse(value);
        const {
          TrafficManagementCentre: { Overview },
        } = parsedValue;
        console.log("value =", Overview);
        setValues(Overview);
      });
    }
  };
  useEffect(() => {
    getFormData();
  }, []);
  return (
    <div>
      <CommitFilter />
      <ConfigPage
        initialValues={values}
        onRefresh={getFormData}
        onCommit={handleCommit}
      />
    </div>
  );
}
