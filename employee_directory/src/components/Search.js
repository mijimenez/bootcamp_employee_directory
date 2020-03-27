import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeesResults from "./EmployeesResults";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };

  // When this component mounts, search the random user API for all results
  componentDidMount() {
    API.getRandomUser()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  }

  getRandomUser = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

//   // Grab the input value and set the search state to this value
//   handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//       [name]: value
//     });
//   };

//   // On submit of the name search, search API by input value
//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.getRandomUser(this.state.search);
//   };

  // render() {
  //   return (
  //     <div>
  //         <h1 className="text-center">Employee Directory</h1>
  //         <p className="text-center">Filter employees by alphabetical order or search by letter.</p>
          
  //         <button>Sort up</button>
  //         <button>Sort down</button>
          
  //           <form className="search">
  //               <div className="form-group">
  //                   <label htmlFor="name">Search by Name:</label>
  //                   <input
  //                   value={this.state.search} onChange={this.handleInputChange} name="name" list="names" type="text" className="form-control" placeholder="Type in a last name to begin" id="name"
  //                   />
  //                   <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
  //                   Search
  //                   </button>
  //               </div>
  //           </form>

  //     </div>
  //   );
  // }

  render() {
    return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card>
            <EmployeesResults employees={this.state.results} />
            {/* <table>
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
          </table> */}
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search">

          </Card>
        </Col>
      </Row>
    </Container>
    )};
}

export default Search;
