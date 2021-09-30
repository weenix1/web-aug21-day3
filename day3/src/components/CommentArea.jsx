import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import DeleteComment from "./DeleteComment";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  // componentDidMount is a lifecycle method happening AFTER the initial render
  // componentDidMount happens JUST ONCE for the whole lifecycle of the component
  // because of this it's the PERFECT PLACE for EXPENSIVE OPERATIONS (i.e. fetches)

  fetchComments = async (id) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + id,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2MzIzMTI1ODIsImV4cCI6MTYzMzUyMjE4Mn0.tSp1EnE2_Y3RGsIwKu7LMvWNTMZBAt-XyxQPWXlnb60",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS MY DATA", data);
        this.setState({
          comments: data,
        });
      } else {
        // we'll fall here if the URL is mispelled or if the server has a problem
        console.log("an error happened in the fetch!");
      }
    } catch (error) {
      // this is for a more generic error, something like an internet issue
      console.log(error);
    }
  };

  componentDidMount = async () => {
    // here I can write my code, being sure that it will be executed:
    // 1) just once!
    // 2) immediately after the initial invocation of render()
    console.log("this is componentDidMount!");
    // here we're going to do the fetch...
    this.fetchComments(this.props.id);
  };

  render() {
    return (
      <>
        <ListGroup>
          {this.state.comments.map((c) => (
            <div>
              <ListGroup.Item key={c._id}>{c.comment}</ListGroup.Item>
              <DeleteComment id={c._id} />
            </div>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default CommentArea;
