import "./app-filter.css";
const AppFilter = ({ btn, onBtnSelect }) => {
  const buttonsData = [
    {
      name: "all",
      label: "All employees",
    },
    {
      name: "promoted",
      label: "Get promoted",
    },
    {
      name: "salaryMoreThen1000",
      label: "Salary more than 1000$",
    },
  ];
  const buttons = buttonsData.map(({ name, label }) => {
    const active = btn === name;
    const classNames = active ? "btn btn-light" : "btn btn-outline-light";
    return (
      <button
        className={classNames}
        type="button"
        key={name}
        onClick={() => onBtnSelect(name)}
      >
        {label}
      </button>
    );
  });
  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
