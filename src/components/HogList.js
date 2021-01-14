import React, { useState } from "react"

import HogItem from "./HogItem"

function HogList({hogs}) {

const [isGreaseClicked, setIsGreaseClicked] = useState(false);


// const [newHogsList, setNewHogsList] = useState(hogsList)

function handleClick(event) { 
    setIsGreaseClicked(!isGreaseClicked)
}

    console.log(hogs)
    const hogsList = hogs.map((hog) => { 
        return <HogItem 
        name={hog.name}
        key={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
       
        />
    })

    const filteredHogs = hogs.filter((hog) => 
        hog.greased === true
    )

    console.log(filteredHogs)
    
    const greasedHogs = filteredHogs.map((hog) => {
        return  <HogItem 
        name={hog.name}
        key={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={hog.weight}
        />
    })

    function handlePigClick(event) {

        console.log(event.target)
    
    }

    return (
    <div>
        <button className="filterHogs" onClick={handleClick}>Filter Hogs</button><br></br><br></br>
        <ul className="ui grid container" onClick={handlePigClick}>
            {isGreaseClicked ? greasedHogs : hogsList}
        </ul>
    </div>
    )
}
    
export default HogList