import React from "react";
import Alert from "react-bootstrap/Alert";

export default function ErrorBox(props) {
  return (
    <Alert key="danger" variant="danger" className="position-fixed bottom-0 end-0">
      {props.error}
    </Alert>
  );
}
