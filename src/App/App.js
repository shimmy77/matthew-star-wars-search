import React from "react";
import { StyleSheet, css } from "aphrodite";

import Header from "../Header/Header";
import SearchBar from "../SearchBar/SearchBar";
import ResultsList from "../ResultsList/ResultsList";
import ApiContext from "../ApiContext";

export default class App extends React.Component {
  state = {
    results: [],
    hasSearched: false,
    error: null
  };

  setResults = results => {
    this.setState({ results });
  };

  setSearched = hasSearched => {
    this.setState({ hasSearched })
  }

  setError = error => {
    this.setState({ error });
  };

  render() {
    const value = {
      results: this.state.results,
      hasSearched: this.state.hasSearched,
      setResults: this.setResults,
      setSearched: this.setSearched,
      setError: this.setError
    };
    return (
      <ApiContext.Provider value={value}>
        <div className={css(styles.app)}>
          <Header />
          <main>
              <SearchBar />
              <ResultsList />
          </main>
        </div>
      </ApiContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    textAlign: "center",
  }
});
