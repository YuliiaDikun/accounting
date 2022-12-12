import "./employees-list.css";
import EmployeersListItem from "../employeer-list-item/employeers-list-item";
const EmployeersList = ({ data }) => {
  const elements = data.map((employee) => {
    return <EmployeersListItem {...employee} />;
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
