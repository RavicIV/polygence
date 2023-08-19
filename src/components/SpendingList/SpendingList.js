import React from "react";
import { currencies, sortByOptions } from "../../utils/constants";
import { ISODatetoMs } from "../../utils/helpers";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moment from "moment";

export default function AddNew(props) {
  const [currentCurrency, setCurrentCurrency] = useState("ALL");
  const [sortBy, setSortBy] = useState("dateDESC");
  const [spendings, setSpendings] = useState(props.spendings);

  const handleCurrencyChange = (event) => {
    setCurrentCurrency(event);
  };

  const handleSortBy = (event) => {
    setSortBy(event);
  };

  useEffect(() => {
    setSpendings(props.spendings);
  }, [props.spendings]);

  useEffect(() => {
    const newSpends = props.spendings
      .filter(
        (spending) =>
          (currentCurrency === "ALL" ||
            spending.currency === currentCurrency) &&
          spending
      )
      .sort((a, b) =>
        sortBy === "amountDESC"
          ? a.amount - b.amount
          : sortBy === "amountASC"
          ? b.amount - a.amount
          : sortBy === "dateDESC"
          ? ISODatetoMs(a.spent_at) - ISODatetoMs(b.spent_at)
          : ISODatetoMs(b.spent_at) - ISODatetoMs(a.spent_at)
      );
    console.log(newSpends, currentCurrency, sortBy, props.spendings);
    setSpendings(newSpends);
  }, [currentCurrency, sortBy]);

  return (
    <Container>
      <Row>
        <Col md={{ span: 6 }}>
          <Form.Select
            id="sortBy"
            name="sortBy"
            value={sortBy}
            onChange={(e) => handleSortBy(e.target.value)}
          >
            {sortByOptions.map((sortBy, i) => (
              <option key={i} value={sortBy.id}>
                {sortBy.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={{ span: 6 }}>
          {[...currencies, "ALL"].map((currency, id) => (
            <Button
              key={id}
              variant={currency === currentCurrency ? "primary" : "link"}
              className="mr-1"
              onClick={() => handleCurrencyChange(currency)}
            >
              {currency}
            </Button>
          ))}
        </Col>
      </Row>
      <Row>
        <Col>
          {spendings.map((spend, id) => {
            return (
              <Row key={id}>
                <Card>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>{spend.description}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {moment(spend.spent_at).format(
                            "h:mm A - MMMM D, YYYY"
                          )}
                        </Card.Subtitle>
                      </Col>
                      <Col>
                        <Card.Text>
                          {spend.currency} {spend.amount}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Row>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
