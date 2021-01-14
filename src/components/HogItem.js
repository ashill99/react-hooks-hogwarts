import React, {useState} from "react" 
import PigImage from './PigImage'

function HogItem({name, specialty, greased, weight, key,}) {
    const [isClicked, setIsClicked] = useState(false);
   
    // if (<PigImage name={name}/> )
    // const babeImage = name.toLowerCase() === pigImages.key ? pigImages.value : null 

    function handleClick(event) { 
        setIsClicked(!isClicked)
    }
    const extraInfo = isClicked ? 
        <><h4 className={weight}>Weight: {weight}</h4>
        <h4 className={specialty}>Specialty: {specialty}</h4>
        <h4>Greased: {greased.toString()}</h4>
        </>
    : null 


    return (
    <div>
        <li>
            <div className="pigTile" onClick={handleClick}>
                <h3 className={name}>{name}</h3>
                <PigImage className={name} name={name}/>
                {extraInfo}
            </div>
        </li>
    </div>
    )
}

export default HogItem