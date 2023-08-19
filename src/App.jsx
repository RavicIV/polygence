import AddNew from "./components/AddNew/AddNew.tsx";
import { connect } from "react-redux";

import store from "./store.js";

import { getSpendings } from "./api/spendings";
import SpendingList from "./components/SpendingList/SpendingList.js";

import ErrorBox from "./components/ErrorBox/ErrorBox.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

store.dispatch(getSpendings());

function App(props) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <AddNew newSpending={props.newSpending} />
        </Col>
      </Row>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <SpendingList spendings={props.spendings} />
        </Col>
      </Row>
      <Row>
        <Col>
          {props.error && <ErrorBox error={props.error} />}
        </Col>
      </Row>
    </Container>
  );
}

function mapStateToProps(state) {
  return {
    spendings: state.spendingsReducer.spendings,
    newSpending: state.spendingsReducer.newSpending,
    error: state.spendingsReducer.error,
  };
}

export default connect(mapStateToProps)(App);
