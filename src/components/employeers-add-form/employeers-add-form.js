import { Component } from "react";
import "./employeers-add-form.css";
class EmployeersAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      salary: "",
    };
  }

  onInputValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const employee = this.state;
    this.props.onAddItem(employee);
    this.setState({
      name: "",
      salary: "",
    });
  };
  render() {
    const { name, salary } = this.state;
    return (
      <div className="app-add-form">
        <h3>Add a new employeer</h3>
        <form className="add-form d-flex" onSubmit={this.onFormSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            className="form-control new-post-label"
            placeholder="What is his/her name?"
            onChange={this.onInputValueChange}
          />
          <input
            type="number"
            name="salary"
            value={salary}
            className="form-control new-post-label"
            placeholder="Salary in $?"
            onChange={this.onInputValueChange}
          />
          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeersAddForm;
