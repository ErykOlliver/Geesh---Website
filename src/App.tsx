import './App.css'
import AboutApp from './Screens/AboutApp'
import Advantages from './Screens/Advantages'
import DownloadApp from "./Screens/DownloadApp"
import { DownloadAppNow } from './Screens/DownloadAppNow'
import Footer from './Screens/Footer'
import TeamGeesh from './Screens/TeamGeesh'


function App() {
  document.title = 'Geesh'
  return (
    <div className='w-screen h-fit flex flex-col gap-2.5 bg-White-80 items-center justify-center '>
      <DownloadApp />
      <AboutApp />
      <Advantages />
      <TeamGeesh />
      <DownloadAppNow />
      <Footer />
    </div>
  )
}

export default App
