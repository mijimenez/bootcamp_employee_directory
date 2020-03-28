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
    filteredResults: [],
    error: ""
  };

  // When this component mounts, search the random user API for all results
  componentDidMount() {
    API.getRandomUser()
      .then(res => this.setState({ results: res.data.results, filteredResults: res.data.results}))
      .catch(err => console.log(err));
      console.log("first render");
  }

  // Filter our results that gives us back a new array of values that correspond to condition: any values equal to search value
  searchByName = (searchValue) => {
    const filteredResult = this.state.results.filter(employee => employee.name.last === searchValue);
    this.setState({ filteredResults: filteredResult });
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
    event.preventDefault();
    if (this.state.search.trim() === "") {
      this.setState({ filteredResults: this.state.results});
      return;
    }
    this.searchByName(this.state.search);
  };



  render() {
    return (
    <Container>
      <Row>
        <Col size="md-8">
          <Card title={"Employee Directory"}>
            <EmployeesResults employees={this.state.filteredResults} />
          </Card>
        </Col>
        <Col size="md-4">
          <Card title={"Search"}>
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
