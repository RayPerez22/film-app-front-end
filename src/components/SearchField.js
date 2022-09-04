import React from 'react'

const SearchField = (props) => {
    return (
        <div className='col col-sm-4'>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='type to search...'></input>
        </div>
    )
}

export default SearchField