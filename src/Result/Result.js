import React from "react";
import { StyleSheet, css } from 'aphrodite';

export default class Result extends React.Component {

  render() {
    let { result } = this.props;
    let name = result.name ? result.name : result.title;

    return (
      <div className={css(styles.result)}>
        <h3 className={css(styles.title)}>{name}</h3>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    padding: '10px',
    width: '50%',
    margin: '10px auto',
    backgroundColor: '#1D3656',
    borderRadius: '10px'
  },

  title: {
    color: '#BDBDBD',
    textShadow: '2px 1px 2px black'
  }
});
