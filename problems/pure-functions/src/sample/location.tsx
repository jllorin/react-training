import { useState } from "react";
import PlaceHolder from "./placeholder";

let currentCity: any;
let multiplier: number = 0;

export default function Location({ city }: any) {
  multiplier = multiplier + 10;
  currentCity = city;
  return (
    <PlaceHolder>      
      <CityDisplay />
      <PopulationDisplay />
    </PlaceHolder>
  )
}

function CityDisplay() {        
    return (
        <>                      
            <h1>{currentCity.name}</h1>            
        </>
    )
}

function PopulationDisplay() {
  return (
    <h2>{currentCity.population * multiplier}</h2>
  )
}
