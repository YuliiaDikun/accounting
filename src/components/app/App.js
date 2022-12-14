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
        { name: "John", salary: 800, increase: false, like: false, id: 1 },
        { name: "Alex", salary: 4500, increase: true, like: false, id: 2 },
        { name: "July", salary: 1500, increase: false, like: false, id: 3 },
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
    newEmployee.like = false;
    this.setState(({ data }) => {
      const updateData = [...data, newEmployee];
      return {
        data: updateData,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [prop]: !item[prop],
          };
        }
        return item;
      }),
    }));
  };

  render() {
    const employees = this.state.data.length;
    const increaseEmp = this.state.data.filter((emp) => emp.increase).length;
    return (
      <div className="App">
        <AppInfo employees={employees} increaseEmp={increaseEmp} />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeersList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeersAddForm onAddItem={this.addItem} />
      </div>
    );
  }
}

export default App;
