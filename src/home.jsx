import React from "react"
const Home=()=>{
    return(
        <div className="home">
            <h2>Home Page</h2>

            <Exampletwo Name="Levin" Age="21" Job="Full stack web developer"/>
            <Exampletwo Name="yuva" Age="21" Job="Full stack web developer"/>

        </div>

    )
}
// const Example=()=>{
//     return(
//         <div>
//             <div>
//                 <h3>Name:levin</h3>
//                 <h3>Age:20</h3>
//                 <h3>Job:Fullstack Web development</h3>
//             </div>
//         </div>
//     )
// }

const Exampletwo=(props)=>{
    return(
    <div>
        <h3>Name:{props.Name}</h3><br />
        <h3>Age:{props.Age}</h3><br />
        <h3>Job:{props.Job}</h3>
    </div>
    )
}

export default Home