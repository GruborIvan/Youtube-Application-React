import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {

    // UseState Hook!
    const [entry, setEntry] = useState('');

    // Event Handlers!
    const onFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(entry);
    };

    const onHomePage = () => {
        onSubmit("");
        setEntry('');
    }

    // Render method!
    return (
        <div className="ui segment search-bar" style={{backgroundColor: 'FireBrick', overflow: 'hidden', width: 2000}}>
            <div style={{width : 90, float: 'left', marginLeft: 500}}>
                <img src="https://thumbs.dreamstime.com/b/web-189206689.jpg" 
                    alt="Yotutube logo" 
                    style={{height: 65, width: 85, marginTop: 10}}
                    onClick={ onHomePage }
                />
            </div>

            <div style={{overflow: 'hidden'}}>
                <form className="ui form" style={{width: '700px',marginLeft: 30}} onSubmit={onFormSubmit}>
                    <div className="field">
                        <h4 style={{marginLeft: 250}}> Search YouTube for videos </h4>
                        <input type="text" name="srcInput" value={entry} onChange={(e) => setEntry(e.target.value)}/>
                    </div>
                </form>
            </div>
        </div>
    );

};

export default SearchBar;