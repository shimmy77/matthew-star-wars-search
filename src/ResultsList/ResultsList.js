import React from "react";
import ApiContext from "../ApiContext";
import Result from "../Result/Result";

import uuidv4 from "uuid/v4";

export default class ResultsList extends React.Component {
  static contextType = ApiContext;

  render() {
    return (
      <section className="ResultsList">
        <h2>Search Results</h2>
        {this.context.results.length <= 0 ? (
          <p className="error">No search results found!</p>
        ) : (
          <ul>
            {this.context.results.map(result => (
              <li key={uuidv4()}>
                <Result result={result} />
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
}
