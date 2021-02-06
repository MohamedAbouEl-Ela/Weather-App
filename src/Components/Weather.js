import React  from 'react';
import "./Weather.css"
const Weather =(props) => {
        return(
            <div className="test">
            
            {
                props.city && <p className="info">City:  <span className="info-value">{props.city}</span> </p>
            }
            {
                props.country && <p className="info">Country: <span className="info-value">{props.country}</span></p>
            }
            {
                props.temperature && <p className="info">temperature: <span className="info-value">{props.temperature}</span></p>
            }
            {
                props.humidity && <p  className="info">humidity: <span className="info-value">{props.humidity}</span></p>
            }
            {
                props.description && <p className="info">description:<span className="info-value">{props.description}</span> </p>
            }
            {
                props.error && <p className="info">error: <span className="info-value">{props.error}</span></p>
            }
            </div>
        )
    
}

export default Weather ;