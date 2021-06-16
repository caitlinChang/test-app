import React from "react";
import { Button, Modal } from "antd";
import CommitFilter from "../CommitFilter/index";
import { sync_store } from "src/store";

const ModalFooter = function (props: {
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <>
      <Button onClick={props.onClose}>取消</Button>
      <Button onClick={props.onConfirm} type="primary">
        确认
      </Button>
    </>
  );
};

export default function OneStepSync(props: {
  visible: boolean;
  onClose: () => void;
}) {
  const handleConfirm = function () {
    // 如何发请求
  };
  return (
    <Modal
      visible={props.visible}
      footer={<ModalFooter onClose={props.onClose} onConfirm={handleConfirm} />}
      onCancel={props.onClose}
    >
      <CommitFilter onUpdate={sync_store.updateStatus} />
    </Modal>
  );
}
