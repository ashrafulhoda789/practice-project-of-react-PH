import React from 'react';

const Country = ({ country }) => {
    const { name, capital, languages, flags, region, currencies, area, continents } = country;

    return (
        <div className='border rounded-2xl p-5'>
            <img className='w-full h-37.5 rounded-2xl' src={flags.flags.png} alt="" />
            <div>
                <h1>Name: {name.common}</h1>
                <h2>Capital: {capital.capital}</h2>
            </div>
            <div>
                <h3>
                    Languages: {languages.languages && Object.values(languages.languages).join(", ")}
                </h3>

                <h3>Region: {region.region}</h3>
            </div>
            <div>
                <h2>Continent: {continents.continents}</h2>
                
                    <div>
                        <p>
                            Currency: {
                                currencies.currencies &&
                                Object.values(currencies.currencies)
                                    .map(c => `${c.name} (${c.symbol})`)
                                    .join(", ")
                            }
                        </p>
                    </div>
                
                <h4>Area: {area.area} KM<sup>2</sup></h4>
            </div>
        </div>
    );
};

export default Country;