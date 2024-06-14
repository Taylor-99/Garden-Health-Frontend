
import '../App.css'
import withAuth from './components/withAuth'
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const App = ({Component, pageProps}) => {

  return (
    <div>
      {/* <NavBar /> */}
      <Component classame="App" {...pageProps} />
    </div>
  )
}

export default withAuth(App);