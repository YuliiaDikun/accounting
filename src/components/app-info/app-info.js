import "./app-info.css";
const AppInfo = ({ increaseEmp, employees }) => {
  return (
    <header>
      <h1 className="header">Accounting</h1>
      <div className="app-info">
        <h2>Company: 'AnyCompany'</h2>
        <h2>Total employees: {employees}</h2>
        <h2>Promotion for: {increaseEmp}</h2>
      </div>
    </header>
  );
};
export default AppInfo;
