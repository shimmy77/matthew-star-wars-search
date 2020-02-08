import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';
import { StyleSheet, css } from 'aphrodite';

export default function LoadingIndicator(props) {
    const { promiseInProgress } = usePromiseTracker();
    return(
        (promiseInProgress && 
        <div className={css(styles.loading)}>
            <Loader type='ThreeDots' color='#BDBDBD' height='100' width='100' />
        </div>)
    );
}

const styles = StyleSheet.create({
    loading: {
        width: '100%',
        height: '100',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});