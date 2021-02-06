import React from 'react';
import "./Form.css"
const Form = (props) => {

    return(
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="ُEnter Your City . . ." required/>
            <input type="text" name="country" placeholder="Enter Your Country . . ." required/>
            <button>Get Forecast</button>
        </form>
    )
}

export default Form ;