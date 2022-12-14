import { Component } from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employees-list/employees-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "John", salary: 800, increase: false, id: 1 },
        { name: "Alex", salary: 4500, increase: true, id: 2 },
        { name: "July", salary: 1500, increase: false, id: 3 },
      ],
    };
    this.id = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  addItem = (employee) => {
    const newEmployee = employee;
    newEmployee.increase = false;
    newEmployee.id = this.id++;

    this.setState(({ data }) => {
      const updateData = [...data, newEmployee];
      return {
        data: updateData,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeersList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeersAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
