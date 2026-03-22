import React from 'react';

const Country = ({ country }) => {
    const { name, capital, languages, flags, region, currencies, area, continents } = country;

    return (
        <div className='border rounded-2xl p-5 space-y-3 flex flex-col'>
            <img className='w-full h-37.5 rounded-2xl' src={flags.flags.png} alt="" />
            <div className='text-center'>
                <h1 className='font-bold text-2xl'>Name: <span className='font-semibold'>{name.common}</span></h1>
                <h2 className='font-semibold text-xl'>Capital: {capital.capital}</h2>
            </div>

            <div className='bg-white py-4 px-2 rounded-2xl flex-1 space-y-4'>

                <div className='text-center bg-gray-100 text-black rounded-2xl p-3'>
                    <h3 className='font-bold text-lg'>
                        Languages:
                    </h3>
                    <p className='font-medium bg-gray-200 p-4 rounded-xl mt-4'>{languages.languages && Object.values(languages.languages).slice(0, 3).join(", ")}</p>
                </div>

                <div className='flex justify-around items-center bg-gray-100 p-2 rounded-lg text-black'>
                    <h3 className='text-[16px] font-medium '>Region: {region.region}</h3>
                    <h2 className='text-[16px] font-medium '>Continent: {continents.continents}</h2>
                </div>

                <div className='text-center bg-gray-100 p-3 rounded-xl mt-4 text-black'>
                    <h2 className='text-xl font-semibold'>Currency: </h2>

                    {
                        currencies.currencies &&
                        Object.values(currencies.currencies).map((c, index) => (
                            <div key={index} className='flex justify-around mt-2'>
                                <p className='font-medium text-lg'>{c.name}</p>
                                <p className='text-sm'>Symbol: {c.symbol}</p>
                            </div>
                        ))
                    }

                </div>

                <h4 className='bg-gray-100 mt-4 p-3 text-center text-black rounded-lg text-lg'>Area: {area.area} KM<sup>2</sup></h4>
            </div>
        </div>
    );
};

export default Country;