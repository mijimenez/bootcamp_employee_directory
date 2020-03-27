import React from "react";

function EmployeesResults(props) {
  return (
    <table>
        <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.map((e, i) => {
                return (<tr key={i}>
                    <td>{e.name.first}</td>
                    <td>{e.name.last}</td>
                    <td>{e.email}</td>
                </tr>)
            })}
        </tbody>
    </table>
  );
}

export default EmployeesResults;