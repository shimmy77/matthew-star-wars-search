import React from 'react';
import ApiContext from '../ApiContext';
import config from '../config';

export default class SearchBar extends React.Component {
    static contextType = ApiContext;

    state = {
        searchWord: { value: '', touched: false },
        searchType: { value: '', empty: false }
    }

    setSearchWord = word => {
        this.setState({ searchWord: { value: word, touched: true } });
    }

    setSearchType = type => {
        this.setState({ searchType: { value: type } });
    }

    handleFormSubmit(event) {
        event.preventDefault();

        if(this.state.searchType.value.length <= 0) {
            this.setState({ searchType: { value: '', empty: true } });
        }

        let { searchType, searchWord } = this.state;

        let endPoint = `${config.BASE_URL}/${searchType.value}/?search=${searchWord.value}`;

        fetch(endPoint)
            .then(resp => {
                if(!resp.ok) {
                    return resp.json().then(e => Promise.reject(e));
                }
                return resp.json();
            })
            .then(respJson => {
                this.context.setResults(respJson.results);
            })
            .catch(error => {
                console.log(error)
                this.context.setError(error);
            });
    }

    validateSearchWord() {
        let { searchWord } = this.state;
        if(searchWord.value.length <= 0) {
            return 'Search Word must not be blank';
        }
    }

    validateSearchType() {
        let { searchType } = this.state;
        if(searchType.value.length <= 0) {
            return 'Please select a Search Type'
        }
    }

    render() {
        return(
            <section className='SearchBar'>
                <form 
                    className='SearchBar-form'
                    onSubmit={event => this.handleFormSubmit(event)}
                >
                    <label htmlFor='search-word'>
                        Search
                        {this.state.searchWord.touched &&
                            <p className='error'>{this.validateSearchWord()}</p>}
                    </label>
                    <input 
                        id='search-word' 
                        type='text' 
                        placeholder='Skywalker'
                        value={this.state.searchWord.value}
                        onChange={e => this.setSearchWord(e.target.value)}
                    />

                    <label htmlFor='search-type'>
                            Search Type
                            {this.state.searchType.empty &&
                                <p className='error'>{this.validateSearchType()}</p>}
                    </label>
                    <select 
                        id='search-type'
                        onChange={e => this.setSearchType(e.target.value)}
                    >
                        <option value=''>-- Select Search Type --</option>
                        {['Films', 'People', 'Planets', 'Species', 'Starships', 'Vehicles']
                            .map(type => <option key={type} value={type.toLowerCase()}>{type}</option>)};
                    </select>

                    <button type='submit' disabled={this.validateSearchWord()}>Search</button>
                </form>
            </section>
        );
    }
}