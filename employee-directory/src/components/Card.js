import React from "react";

function Card(props) {
  return (
    <div className="card">
      {props.employees.map((employee) => (
        <div className="row emp-card" key={employee.id.value}>
          <div className="col-md-1">
            <img src={employee.picture.medium} alt="Emp Img" />
          </div>
          <div className="col-md-1">{employee.name.first}</div>
          <div className="col-md-1">{employee.name.last}</div>
          <div className="col-md-2">{employee.phone}</div>
          <div className="col-md-3">{employee.email}</div>
          <div className="col-md-2">{employee.location.city}</div>
          <div className="col-md-2">{employee.dob.date.split("T")[0]}</div>
        </div>
      ))}
    </div>
  );
}

export default Card;
