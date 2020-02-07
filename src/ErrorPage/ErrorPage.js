import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class ErrorPage extends React.Component {
    state = {
        error: null
    }

    static getDerivedStateFromError(error) {
        return {error};
    }

    render() {
        if(this.state.error) {
            return (
                <div className={css(styles.errorPage)}>
                    <h2 className={css(styles.errorHeader)}>Something seems to have gone wrong</h2>
                    <p className={css(styles.errorText)}>Try refreshing the page</p>
                </div>
            );
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    errorPage: {
        backgroundColor: 'tomato',
        width: '75%',
        margin: 'auto auto',
        padding: '20px',
        borderRadius: '20px'
    },

    errorHeader: {
        color: 'red',
        textDecoration: 'underline'
    },

    errorText: {
        color: '#bdbdbd',
        fontSize: 'x-large'
    }
});