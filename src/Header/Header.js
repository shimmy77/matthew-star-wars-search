import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJediOrder } from '@fortawesome/free-brands-svg-icons';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {
    return (
        <header className={css(styles.header)}>
            <h1 className={css(styles.headerText)}>
                Star Wars Search{' '}
                <FontAwesomeIcon className={css(styles.iconSpin)} icon={faJediOrder} />
            </h1>
        </header>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#0B1B32'
    },

    iconSpin: {
        animationName: {
            'from': {
                transform: 'rotate(0deg)'
            },
            'to': {
                transform: 'rotate(360deg)'
            }
        },
        animationDuration: '20s',
        animationIterationCount: 'infinite'
    },

    headerText: {
        padding: '30px',
        color: '#BDBDBD',
        textShadow: '2px 1px 2px black'
    }
})