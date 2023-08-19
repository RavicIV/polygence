import React from "react";
import Form from "react-bootstrap/Form";

export default function Input(props) {
  return (
    <>
      <Form.Control
        id={props.id}
        name={props.name}
        type={props.type}
        onChange={props.onChange}
        value={props.value}
      />
      <Form.Control.Feedback type="invalid" className="d-block">
        {props.error}
      </Form.Control.Feedback>
    </>
  );
}
