import React from 'react'
import Navbar from '../components/navbar'
import FormationCard from '../components/formationCard'

function Formations() {
  return (
    <main>
        <Navbar/>
        <FormationCard titre={'Developpement web fullstack'} description={'9 mois de formations intensive'} duree={'9mois'} tarif={255000}/>

    </main>
  )
}

export default Formations

// https://countriesnow.space/api/v0.1/countries/