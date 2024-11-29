"use client";

import MainPage from "./components/main";
import { useState } from "react";
import Weatherof from "./components/weatherof";


var cityin;
var tempin;
var cloudsin;

async function getCity(city) {
  cityin = city;
}
async function getTemp(temp) {
  tempin = temp;
}

async function getClouds(clouds) {
  cloudsin = clouds;
}

export default function Home() {

  const [page, setPage] = useState("home");

  return (
    <main>
        {page==="home" ? (<MainPage setter={setPage} getcity={getCity} gettemp={getTemp} getclouds={getClouds}/>):(<Weatherof setter={setPage} city={cityin} temp={tempin} clouds={cloudsin}/>)}
        
    </main>
    
  );
}
