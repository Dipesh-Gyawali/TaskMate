import { useState } from "react"
import './BoxCard.css';

export const BoxCard = ({result, children}) => {
    const [show, setShow] = useState(true);

    return (
        <div className={show ? "" : "hidden"}>              {/* CSS use gareko + ternary operator to hide stuff */}   
            <div className={`box ${result}`}>               {/* how to send values along with text and dynamic content....+ String in Javascript */}
                {children}
                <button onClick={() => setShow(!show)} className="trigger">Hide</button>
            </div>
       </div> 
    )
}
