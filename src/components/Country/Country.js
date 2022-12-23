import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, flags, capital, area } = props.country;
    return (
        <div className='country bg-transparent'>
            <h3>Name:{name.common}</h3>
            <h4>Capital:{capital}</h4>
            <p>Area:{area}</p>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;