import "./employees-list.css";
import EmployeersListItem from "../employeer-list-item/employeers-list-item";
const EmployeersList = ({ data }) => {
  const elements = data.map((employee) => {
    const { id, ...employeeProps } = employee;
    return <EmployeersListItem key={id} {...employeeProps} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
