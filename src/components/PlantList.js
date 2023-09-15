import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {

  const pList = plants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)
  console.log(pList)
  return (
    <ul className="cards">{pList}</ul>
  );
}

export default PlantList;
