import "./app-info.css";
const AppInfo = ({ increaseEmp, employees }) => {
  return (
    <div className="app-info">
      <h1>Employees accounting in company </h1>
      <h2>Total employees: {employees}</h2>
      <h2>Promotion for: {increaseEmp}</h2>
    </div>
  );
};
export default AppInfo;
