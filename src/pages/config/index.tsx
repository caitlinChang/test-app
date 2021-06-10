import React, { useEffect, useState } from "react";
import { Button, Form, FormInstance, Input, Typography, Collapse } from "antd";

import FilterInput from "./components/filterInput";

const { Panel } = Collapse;

export default function ConfigPage(props: { form: FormInstance }) {
  return (
    <Form form={props.form}>
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
  );
}
