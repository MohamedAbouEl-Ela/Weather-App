import React , {Component} from 'react';
import Weather from './Components/Weather';
import Form from './Components/Form';
import "./App.css";

const API_KEY="88860d9e37497a884896ff76e3f8b481";

class App extends Component  {
  state = {
    temperature:'',
    city:'',
    country:'',
    humidity:'',
    description:'',
    error:''
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.city.value;
    const country = e.target.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_KEY}`);
    const data = await api.json();

    if (city&&country){
      this.setState({
      temperature:data.main.temp,
      city:data.name,
      country:data.sys.country,
      humidity:data.main.humidity,
      description:data.weather[0].description,
      error:''
    })
    } else{
      this.setState({
        temperature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'Please Enter Data'
      })
    }
  }


  render() {
    return(
      <div className="App">
        <div className="weather-content">
        <h1> Weather App</h1>
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        /> 
        </div>
      </div>
    )
  }
}

export default App;
