import { Component } from "react";
import Button from "react-bootstrap/Button";

class DeleteComment extends Component {
  delete = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${this.props.id}
      `,
        {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWQwNjRiYjUzZDAwMTViMTllY2YiLCJpYXQiOjE2MzIzMTI1ODIsImV4cCI6MTYzMzUyMjE4Mn0.tSp1EnE2_Y3RGsIwKu7LMvWNTMZBAt-XyxQPWXlnb60",
          },
        }
      );
      if (response.ok) {
        alert("comment succesfully deleted");
      } else {
        alert("ERROR: failed to delete comment");
      }
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <Button onClick={this.delete} variant="danger" type="submit">
        Delete
      </Button>
    );
  }
}

export default DeleteComment;
