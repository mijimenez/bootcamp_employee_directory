import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import EmployeesResults from "./EmployeesResults";
import SearchForm from "./SearchForm";
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

  // Search by name function will change results state to name entered
  searchByName = () => {
    API.getRandomUser()
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };

  // When the user inputs a name, it changes the search state to this value
  handleInputChange = event => {
    const value = event.target.value;
    this.setState({
      search: value
    });
  };

  // When search button is clicked, change results to last name searched
  handleFormSubmit = event => {
    if (this.state.search.trim() === "") {
      return;
    }
    let employees = this.state.result.filter(employee => employee.name.last);
    this.setState({
      result: employees
    });
    console.log(employees);
  };



  render() {
    return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card title={"Employee Directory"}>
            <EmployeesResults employees={this.state.results} />
          </Card>
        </Col>
        <Col size="md-4">
          <Card heading="Search" title={"Search"}>
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Card>
        </Col>
      </Row>
    </Container>
    )};
}

export default Search;
