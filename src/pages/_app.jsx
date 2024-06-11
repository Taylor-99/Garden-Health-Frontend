
import '../App.css'
import withAuth from './components/withAuth'
// import NavBar from './components/NavBar'

const App = ({Component, pageProps}) => {

  return (
    <div>
      {/* <NavBar /> */}
      <Component classame="App" {...pageProps} />
    </div>
  )
}

export default withAuth(App);