import React from "react";
import ApiContext from "../ApiContext";
import Result from "../Result/Result";

import uuidv4 from "uuid/v4";
import { StyleSheet, css } from "aphrodite";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";

export default class ResultsList extends React.Component {
  static contextType = ApiContext;

  render() {
    return (
      <section className={css(styles.resultsList)}>
        <h2 className={css(styles.title)}>Search Results</h2>
        <LoadingIndicator />
        {this.context.hasSearched && this.context.results.length <= 0 ? (
          <p className={css(styles.error)}>No search results found!</p>
        ) : (
          <ul className={css(styles.results)}>
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

const styles = StyleSheet.create({
  resultsList: {
    padding: "20px",
    backgroundColor: "#0B1F3A",
    height: "100vh"
  },

  results: {
    padding: "10px",
    listStyle: "none"
  },

  title: {
    color: "#BDBDBD",
    textShadow: "2px 1px 2px black"
  },

  error: {
    padding: "20px",
    color: "red",
    textShadow: "2px 1px 2px black"
  },

  directions: {
    padding: "20px",
    color: "#BDBDBD",
    textShadow: "2px 1px 2px black"
  }
});
