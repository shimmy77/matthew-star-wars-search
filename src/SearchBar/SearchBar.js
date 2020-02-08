import React from "react";
import ApiContext from "../ApiContext";
import config from "../config";

import { StyleSheet, css } from "aphrodite";
import { trackPromise } from "react-promise-tracker";

export default class SearchBar extends React.Component {
  static contextType = ApiContext;

  state = {
    searchWord: { value: "", touched: false },
    searchType: { value: "", empty: false }
  };

  setSearchWord = word => {
    this.setState({ searchWord: { value: word, touched: true } });
  };

  setSearchType = type => {
    this.setState({ searchType: { value: type } });
  };

  handleFormSubmit(event) {
    event.preventDefault();

    this.context.setSearched(false);
    this.context.setResults([]);

    if (this.state.searchType.value.length <= 0) {
      this.setState({ searchType: { value: "", empty: true } });
    }

    let { searchType, searchWord } = this.state;

    let endPoint = `${config.BASE_URL}/${searchType.value}/?search=${searchWord.value}`;

    trackPromise(
      fetch(endPoint)
        .then(resp => {
          if (!resp.ok) {
            return resp.json().then(e => Promise.reject(e));
          }
          return resp.json();
        })
        .then(respJson => {
          this.context.setResults(respJson.results);
          this.context.setSearched(true);
        })
        .catch(error => {
          console.log(error);
          this.context.setError(error);
        })
    );
  }

  validateSearchWord() {
    let { searchWord } = this.state;
    if (searchWord.value.length <= 0) {
      return "Search Word must not be blank";
    }
  }

  validateSearchType() {
    let { searchType } = this.state;
    if (searchType.value.length <= 0) {
      return "Please select a Search Type";
    }
  }

  render() {
    return (
      <section className={css(styles.searchBar)}>
        <form
          className="searchBarForm"
          onSubmit={event => this.handleFormSubmit(event)}
        >
          {this.state.searchType.empty && (
            <p className={css(styles.error)}>{this.validateSearchType()}</p>
          )}
          {this.state.searchWord.touched && (
            <p className={css(styles.error)}>{this.validateSearchWord()}</p>
          )}

          <label className={css(styles.label)} htmlFor="searchWord">
            Key Word
          </label>
          <input
            className={css(styles.input)}
            id="searchWord"
            type="text"
            placeholder="Skywalker"
            value={this.state.searchWord.value}
            onChange={e => this.setSearchWord(e.target.value)}
          />

          <label className={css(styles.label)} htmlFor="searchType">
            Search Type
          </label>
          <select
            className={css(styles.input)}
            id="searchType"
            onChange={e => this.setSearchType(e.target.value)}
          >
            <option value="">-- Select Search Type --</option>
            {[
              "Films",
              "People",
              "Planets",
              "Species",
              "Starships",
              "Vehicles"
            ].map(type => (
              <option key={type} value={type.toLowerCase()}>
                {type}
              </option>
            ))}
            ;
          </select>

          <button
            className={css(styles.button, styles.hover)}
            type="submit"
            disabled={this.validateSearchWord()}
          >
            Search
          </button>
        </form>
      </section>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    backgroundColor: "#0B1F3A",
    padding: "5px"
  },

  hover: {
    ":hover": {
      cursor: "pointer",
      opacity: "0.5"
    }
  },

  label: {
    padding: "5px",
    color: "#BDBDBD",
    textShadow: "2px 1px 2px black"
  },

  input: {
    padding: "5px"
  },

  button: {
    marginLeft: "10px",
    border: "none",
    borderRadius: "5px",
    padding: "7px",
    backgroundColor: "#010D1E",
    color: "#CACACA"
  },

  error: {
    margin: "5px auto",
    padding: "5px",
    borderRadius: "5px",
    textAlign: "center",
    color: "red",
    textShadow: "2px 1px 2px black"
  }
});
