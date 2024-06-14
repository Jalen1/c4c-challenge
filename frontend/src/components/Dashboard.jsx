import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import AddPartner from './AddPartner';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {

  const [partners, setPartners] = useState({});

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
    .then((res) => res.json())
    .then((data) => {
      setPartners(data);
      console.log(data);
    })
  }, []);


  return (
    <div className="main-content">
      <AddPartner />
      <div className="main-partners-grid">
        <PartnerTile partnerData= {partners} />
      </div>
      
    </div>
  )
}

export default Dashboard;