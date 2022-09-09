import React from 'react'

const SearchField = (props) => {
    return (
        <div className='top col-sm-4'>
            <input
                className='form-control'
                value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}
                placeholder='search film...'>
            </input>
        </div>
    )
}

export default SearchField