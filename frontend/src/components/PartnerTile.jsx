import React from 'react';
import { useEffect, useState} from "react";
/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/
function PartnerTile({partnerData}) {
useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      partnerData = data;
    })
  }, [partnerData]); 
  console.log("partnertile beginning: ", partnerData)

  const [index, setIndex] = useState(0);

  const keys = Object.keys(partnerData);
  const partner = partnerData[keys[index]];
   
  const url = partner.thumbnailUrl;
  const name = partner.name;
  const description = partner.description;

  console.log("url: ", url);
  console.log("name: ", name);
  console.log("description: ", description);
  
  return (
    <div className="outer-tile"> 
    <div className="partner-tile">
      {url && <img className="partner-thumbnail" src={url} />}
      <hr />
      <div className="partner-info">
      {name &&  <h1>{name}</h1>}
      {description && <p>{description}</p>}
      </div>
    </div>
    <div className="toggle-partner">
      <button>Toggle Partner</button>
    </div>
    </div>
   
    
  );
}


export default PartnerTile;