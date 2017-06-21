/**
 * Created by consultadd on 21/6/17.
 */
import React,{Component} from 'react'
import {connect} from 'react-redux';
import Chart from "../components/chart";


class WeatherList extends Component{

    renderWeather(cityData){
        const temps = cityData.list.map(weather=>weather.main.temp);
        console.log(temps);
        return (
            <tr key={cityData.city.id}>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                   <Chart data={temps} color='red'/>
                </td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temprature</th>
                    <th>Presure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state)=>{
    return {weather:state.weather};
}

export default connect(mapStateToProps)(WeatherList);