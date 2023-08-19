import React from "react";
import { useEffect, useState } from "react";
import Input from "../Input/Input.tsx";
import { currencies } from "../../utils/constants.js";
import store from "../../store";
import { addNewValidator } from "../../utils/validators.js";
import { setAddNew } from "../../api/spendings.js";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function AddNew(props) {
  
  const [newSpending, setNewSpending] = useState({
    description: props.newSpending.description,
    amount: props.newSpending.amount,
    currency: props.newSpending.currency,
  });

  const [errors, setErrors] = useState({});

const handleChange = (e) => {
  const { name, value } = e.target;
  console.log(name, value)
  
  setNewSpending({
    ...newSpending,
    [name]: value
  })
};

const handleSubmit = (event) => {
  const checkedErrors = addNewValidator(newSpending)
  setErrors({...checkedErrors});

  if (Object.keys(checkedErrors).length === 0) {
    console.log(errors)
    store.dispatch(setAddNew(newSpending));

    setNewSpending({
      description: props.newSpending.description,
      amount: props.newSpending.amount,
      currency: props.newSpending.currency,
    });
  }

  event.preventDefault();
}
  return (
    <Container className="justify-content-md-center p-3">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <Input
              md={{ span: 2 }}
              label="description"
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              value={newSpending.description}
              error={errors.description}
            />
          </Col>
          <Col>
            <Input
              md={{ span: 2 }}
              label="amount"
              id="amount"
              name="amount"
              type="number"
              onChange={handleChange}
              value={newSpending.amount}
              error={errors.amount}
            />
          </Col>
          <Col>
            <Form.Select
              id="currency"
              name="currency"
              onChange={handleChange}
              value={newSpending.currency}
            >
              {currencies.map((currency, i) => (
                <option key={i}>{currency}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Button variant="primary" className="mr-1" type="submit">
              SAVE
            </Button>
          </Col>
        </Row>
        </Form>
    </Container>
  );
}
