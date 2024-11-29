"use client"
import React from 'react';
import WeatherAPI from '../lib/apiConnect';


export default function search({setter, getcity, gettemp, getclouds}) {

  async function handleSearch () {
    const cityInputRef = document.getElementById('city');
    try{
        const data = await WeatherAPI(cityInputRef.value);
        setter('weather');
        console.log(data);
        gettemp(data[1]);
        getcity(data[0]);
        getclouds(data[2]);
      }catch(error){}
      
    }else{}
  };



  return (
    <div className="mt-10 flex flex-col xl:ml-11">
      <input
        id="city"
        type="text"
        className="rounded-lg p-2 mb-4 placeholder:text-gray-300 bg-gray-400
        text-black font-bold"
        name="city input"
        placeholder='City name'
      />
      <button 
       id="useApi" onClick={handleSearch}
      className="bg-blue-300 w-full rounded-lg text-black font-bold py-2 px-4 mt-4 hover:bg-blue-500 hover:shadow-2xl transition-all duration-300"
      >Consult</button>  
    </div>
  );
};
