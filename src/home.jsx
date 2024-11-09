import React from "react"
const Home=()=>{
    return(
        <div className="home">
            <h2>Home Page</h2>

            <Exampletwo Name="Levin" Age="21" Job="Full stack web developer" Exp="2 years"/>
            <Exampletwo Name="yuva" Age="21" Job="Full stack web developer" Exp="3 years"/>


        </div>

    )
}


const Exampletwo=(props)=>{
    return(
    <div>
        <h3>Name:{props.Name}</h3><br />
        <h3>Age:{props.Age}</h3><br />
        <h3>Job:{props.Job}</h3>
        <h3>Exp:{props.Exp}</h3>
    </div>
    )
}

export default Home



