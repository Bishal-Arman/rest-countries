import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>


            <h2 style={{ textAlign: "center", color: 'blue', marginBottom: "30px" }}>TOTAL REST-COUNTRIES={countries.length}!!!</h2>
            <div className='countries'>
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca2}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;