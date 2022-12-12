import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeersList from "../employees-list/employees-list";
import EmployeersAddForm from "../employeers-add-form/employeers-add-form";
import "./App.css";

function App() {
  const data = [
    { name: "John", salary: 800, increase: false, id: 1 },
    { name: "Alex", salary: 4500, increase: true, id: 2 },
    { name: "July", salary: 1500, increase: false, id: 3 },
  ];
  return (
    <div className="App">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeersList data={data} />
      <EmployeersAddForm />
    </div>
  );
}

export default App;
