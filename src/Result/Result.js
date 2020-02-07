import React from "react";

export default class Result extends React.Component {

  render() {
    let { result } = this.props;
    let name = result.name ? result.name : result.title;

    return (
      <div className="Result">
        <h3>{name}</h3>
      </div>
    );
  }
}
