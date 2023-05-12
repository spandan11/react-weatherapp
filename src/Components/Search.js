import React from 'react';

export const Search = ({ getWeatherInfo, searchValue, setSearchValue }) => {

    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type="search"
                        placeholder="search..."
                        id="search"
                        className="searchItem"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <button className="searchButton"
                        type="button"
                        onClick={getWeatherInfo}>
                        Search
                    </button>
                </div>
            </div>
        </>
    );
};
