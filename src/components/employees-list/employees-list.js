import "./employees-list.css";
import EmployeersListItem from "../employeer-list-item/employeers-list-item";
const EmployeersList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((employee) => {
    const { id, ...employeeProps } = employee;
    return (
      <EmployeersListItem
        key={id}
        {...employeeProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) =>
          onToggleProp(id, e.currentTarget.getAttribute("data-toggle"))
        }
      />
    );
  });
  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeersList;
