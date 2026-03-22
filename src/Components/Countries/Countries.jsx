import React, { use } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    // console.log(countriesData);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1 className='text-2xl md:text-4xl font-bold text-center'>All Countries</h1>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;