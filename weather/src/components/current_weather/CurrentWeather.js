import './CurrentWeather.css';

const CurrentWeather = () => { // display current weather details
    return (
        <div className="weather">
            <div className='top'>
                <p className='city'>Static</p>
                <p className='description'>Description</p>
            </div>
            <img alt='weather' className='weather-icon' src='icons/sunny.png' />
        </div>
    );
}

export default CurrentWeather;