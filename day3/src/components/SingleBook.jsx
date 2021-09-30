import React from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CommentArea from "./CommentArea";

class SingleBook extends React.Component {
  state = {
    selected: false,
  };

  render() {
    return (
      <>
        <Card
          onClick={() => this.setState({ selected: !this.state.selected })}
          style={{ border: this.state.selected ? "3px solid red" : "none" }}
        >
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body>
            <Card.Title style={{ color: "black" }}>
              {this.props.book.title}
            </Card.Title>
            <h4> Category:{this.props.book.category}</h4>
            <div className="d-flex justify-content-between mb-0">
              <Button variant="warning">Buy</Button>{" "}
              <h5 className="mb-0">€{this.props.book.price}</h5>
            </div>
          </Card.Body>
          <h5>comment:</h5>
          <CommentArea id={this.props.book.asin} />
        </Card>
      </>
    );
  }
}

export default SingleBook;
