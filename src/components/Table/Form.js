import React, {Component} from 'react'

class Form extends Component {
  initialState = {
    name: '',
    job: '',
  };

  state = this.initialState;

  handleChange = (event) => {
    const {name, value} = event.target;

    this.setState({
      [name]: value,
    })
  };

  submitForm = () => {
    this.props.handleSubmit(this.state);
    this.setState(this.initialState);
  };

  render() {
    const { name, job } = this.state;

    return (
      <form className="col-12 col-md-4">
        <label htmlFor="name"
               className="text-info mt-3" >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="form-control"
          onChange={this.handleChange} />
        <label htmlFor="job"
               className="text-info mt-3">
          Job
        </label>
        <input
          type="text"
          name="job"
          id="job"
          value={job}
          className="form-control"
          onChange={this.handleChange} />
        <input
          type="button"
          value="Submit"
          className="btn btn-primary mt-2"
          onClick={this.submitForm} />
      </form>
    );
  }

}

export default Form;

