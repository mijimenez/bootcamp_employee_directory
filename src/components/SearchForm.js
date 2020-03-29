import React from "react";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group search-widget">
        <div className="input-group mb-3">
          <label htmlFor="search" className="w-100">Search by Last Name:</label><br/>
          <input
            onChange={props.handleInputChange}
            value={props.search}
            name="search"
            type="text"
            className="form-control"
            placeholder='ex. "Hunt"'
            id="search"
          />
          <div className="input-group-append">
            <button onClick={props.handleFormSubmit} className="btn btn-primary" type="button" id="button-addon2">Search<i class="fas fa-search ml-2"/></button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
