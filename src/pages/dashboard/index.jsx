
import withAuth from '../components/withAuth.jsx';
import NavBar from '../components/NavBar.jsx'
import WeatherComponent from './components/weather.jsx'
import ChallengeComponent from './components/challenges.jsx'
import RemindersComponent from './components/reminders.jsx'

const Dashboard = () => {

  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100" >
      <NavBar pageName="Dashboard" />
      <br></br>
      <WeatherComponent />
      <br></br>
      <ChallengeComponent />
      <br></br>
      <RemindersComponent />
    </div>
  )
}

export default withAuth(Dashboard);