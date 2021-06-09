import React, { useEffect, useState } from "react";
import { Button, Form, FormInstance, Input, Typography, Collapse } from "antd";

import FilterInput from "./components/filterInput";

const { Panel } = Collapse;

export default function ConfigPage(props: {
  onCommit: (form: FormInstance) => void;
  onRefresh: () => void;
  initialValues: any;
}) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(props.initialValues);
  }, [props.initialValues]);

  return (
    <div>
      <Button onClick={props.onRefresh}>刷新</Button>
      <Button onClick={() => props.onCommit(form)}>提交修改</Button>
      <Form form={form}>
        <Form.List name="Graphs">
          {(fields) => (
            <Collapse>
              {fields.map((field, index) => {
                return (
                  <Panel header={`Graph ${index}`} key={index}>
                    <Form.Item
                      label="title"
                      name={[field.name, "title"]}
                      fieldKey={[field.fieldKey, "title"]}
                    >
                      <Input></Input>
                    </Form.Item>
                    <Form.Item
                      label="tooltip"
                      name={[field.name, "tooltip"]}
                      fieldKey={[field.fieldKey, "tooltip"]}
                    >
                      <Input></Input>
                    </Form.Item>

                    <Form.Item
                      label="promParams.query"
                      name={[field.name, "promParams", "query"]}
                      fieldKey={[field.fieldKey, "promParams", "query"]}
                    >
                      <FilterInput />
                    </Form.Item>
                    <Form.Item
                      label="promParams.ratioQuery"
                      name={[field.name, "promParams", "ratioQuery"]}
                      fieldKey={[field.fieldKey, "promParams", "ratioQuery"]}
                    >
                      <FilterInput />
                    </Form.Item>
                  </Panel>
                );
              })}
            </Collapse>
          )}
        </Form.List>
      </Form>
    </div>
  );
}
