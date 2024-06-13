
import withAuth from '../components/withAuth.jsx';
import NavBar from '../components/NavBar.jsx'
import WeatherComponent from './components/weather.jsx'
import ChallengeComponent from './components/challenges.jsx'
import RemindersComponent from './components/reminders.jsx'
import openWeatherLogo from './logo/OpenWeatherLogo.png'
import Image from 'next/image'

const Dashboard = () => {

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100" >
      <NavBar pageName="Dashboard" />
      <br></br>
      <WeatherComponent />
      <div className="flex items-center text-center space-x-2 widget p-4 bg-gray-100 rounded-lg shadow-md">
        <a href="https://openweathermap.org/" className="text-sm text-blue-500 hover:underline" >Weather data provided by OpenWeather </a>
        <Image
          src={openWeatherLogo}
          width={40}
          height={40}
          alt="Open Weather logo"
          className="object-contain"
        />
      </div>
      <br></br>
      <ChallengeComponent />
      <br></br>
      <RemindersComponent />
    </div>
  )
}

export default withAuth(Dashboard);