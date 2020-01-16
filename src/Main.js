import React, { Component } from "react";
import "./styles.css";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Wasif", marks: 78 },
        { id: 2, name: "Ali", marks: 88 },
        { id: 3, name: "Saad", marks: 68 },
        { id: 4, name: "Asad", marks: 79 },
        { id: 5, name: "Shashi", marks: 80 }
      ]
    };
  }

  renderTableHeader() {
    let header = Object.keys(this.state.students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  details() {
    return this.state.students.map((student, index) => {
      const { id, name, marks } = student; //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{marks}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 id="title">Student Details</h2>
        <table id="students">
          <tbody>
            <tr>{this.renderTableHeader()}</tr>
            {this.details()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Main;
