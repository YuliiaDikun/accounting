import { Component } from "react";
import "./search-panel.css";
class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
    };
  }
  onUpdateFilter = (e) => {
    const filter = e.target.value;
    this.setState({ filter });
    this.props.onUpdateFilter(filter);
  };
  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Find employee"
        value={this.state.filter}
        onChange={this.onUpdateFilter}
      />
    );
  }
}

export default SearchPanel;
