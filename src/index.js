import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCmBLyviuGH_Gb6haTizFPzuKsD1zBRxVA';

// Create new component. This component should produce
// some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Place newly created component into DOM
module.exports = ReactDOM.render(<App />, document.querySelector('.container'));