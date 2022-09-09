import React, { Component } from "react";

class Form extends Component {
  initialState = {
    name: "",
    job: "",
  };

  state = this.initialState;

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <div className="container">
        <form className="form-group">
          <label htmlFor="name" className="m-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
          <label className="m-2" htmlFor="job">
            Job
          </label>
          <input
            type="text"
            name="job"
            id="job"
            value={job}
            onChange={this.handleChange}
          />
          <input
            type="button"
            value="Submit"
            onClick={this.submitForm}
            className="btn btn-primary m-2"
          />
        </form>
      </div>
    );
  }
}

export default Form;
