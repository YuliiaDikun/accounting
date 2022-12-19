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
      filter: "",
      btn: "all",
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

  searchEmp = (items, filter) => {
    if (!filter.length) {
      return items;
    }
    return items.filter((item) => item.name.includes(filter));
  };

  onUpdateFilter = (filter) => {
    this.setState({
      filter,
    });
  };

  btnPost = (items, btn) => {
    switch (btn) {
      case "promoted":
        return items.filter((emp) => emp.increase);
      case "salaryMoreThen1000":
        return items.filter((emp) => emp.salary > 1000);
      default:
        return items;
    }
  };

  onBtnSelect = (btn) => {
    this.setState({
      btn,
    });
  };

  render() {
    const { data, filter, btn } = this.state;
    const employees = data.length;
    const increaseEmp = data.filter((emp) => emp.increase);
    const visibleData = this.btnPost(this.searchEmp(data, filter), btn);
    return (
      <section className="App">
        <AppInfo employees={employees} increaseEmp={increaseEmp.length} />

        <nav className="search-panel">
          <SearchPanel onUpdateFilter={this.onUpdateFilter} />
          <AppFilter btn={btn} onBtnSelect={this.onBtnSelect} />
        </nav>
        <main>
          <EmployeersList
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
          />
        </main>
        <EmployeersAddForm onAddItem={this.addItem} />
      </section>
    );
  }
}

export default App;
