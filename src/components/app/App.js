import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
      </div>
    </div>
  );
}

export default App;
