import React, { Component } from "react";
import API from "../../utils/API";

class SearchEmployeeContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the random user API for all results
  componentDidMount() {
    API.getRandomUser()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
          <h1 className="text-center">Employee Directory</h1>
          <p>Filter employees by alphabetical order or search by letter.</p>
          
          <button>Sort up</button>
          <button>Sort down</button>
          Filter by Last Name<input />

          <table>
              <thead>
                  <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.results.map((e, i) => {
                      return (<tr key={i}>
                          <td>{e.name.first}</td>
                          <td>{e.name.last}</td>
                          <td>{e.email}</td>
                      </tr>)
                  })}
              </tbody>
          </table>
      </div>
    );
  }
}

export default SearchEmployeeContainer;
