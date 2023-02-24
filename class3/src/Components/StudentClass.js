import React from "react";

export class StudentClass extends React.Component {
  render() {
    let student = this.props.student[0];

    return (
      <div>
        <h2>
          Class student: {student.name} {student.lastName}
        </h2>
        <h2>Index:{student.index}</h2>
      </div>
    );
  }
}
