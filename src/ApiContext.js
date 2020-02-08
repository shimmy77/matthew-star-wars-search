import React from 'react';

export default React.createContext({
    results: [],
    hasSearched: false,
    setResults: () => {},
    setSearched: () => {},
    setError: () => {}
});