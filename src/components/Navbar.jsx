import { memo } from "react";

// eslint-disable-next-line react/prop-types
 function Navbar({adjective, getAdjective}) {
    console.log('Navbar is rendered');
    return (
        <div>
        I am a {adjective} Navbar
        <button onClick={()=>{getAdjective()}}>change me</button>
        </div>
    )
}

export default memo(Navbar);