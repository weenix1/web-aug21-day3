import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";
import AddComment from "./AddComment";
import { Col, Row } from "react-bootstrap";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Row>
          <Col md={6}>
            <Card
              style={{
                border: this.state.selected ? "3px solid red" : "none",
              }}
            >
              <Row>
                <Col>
                  <Card.Img
                    variant="top"
                    style={{ width: "200px", objectFit: "cover" }}
                    src={this.props.book.img}
                    onClick={() =>
                      this.setState({ selected: !this.state.selected })
                    }
                  />
                </Col>
                <Col className="justify-content-center">
                  <Card.Body>
                    <Card.Title style={{ color: "black" }}>
                      BookTitle:
                      {this.props.book.title}
                    </Card.Title>
                    <h4> Category:{this.props.book.category}</h4>
                    <div className="d-flex justify-content-between mb-0">
                      <Button variant="warning">Buy</Button>{" "}
                      <h5 className="mb-0">€{this.props.book.price}</h5>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col md={6}>
            <div>
              {this.state.selected ? (
                <div>
                  <CommentArea id={this.props.book.asin} />
                  <AddComment id={this.props.book.asin} />
                </div>
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>
      </>
    );
  }
}

export default SingleBook;
