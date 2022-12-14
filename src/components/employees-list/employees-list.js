import "./employees-list.css";
import EmployeersListItem from "../employeer-list-item/employeers-list-item";
const EmployeersList = ({ data, onDelete }) => {
  const elements = data.map((employee) => {
    const { id, ...employeeProps } = employee;
    return (
      <EmployeersListItem
        key={id}
        {...employeeProps}
        onDelete={() => onDelete(id)}
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
