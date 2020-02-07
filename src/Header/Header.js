import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
    return (
        <header>
            <h1 className={css(styles.headerText)}>Star Wars Search</h1>
        </header>
    );
}

const styles = StyleSheet.create({
    headerText: {
        backgroundColor: '#0B1F3A'
    }
})