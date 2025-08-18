import './App.css'
import AboutApp from './Screens/AboutApp'

import DownloadApp from "./Screens/DownloadApp"
import TeamGeesh from './Screens/TeamGeesh'


function App() {
  return (
    <div className='w-screen h-fit flex flex-col items-center gap-6 justify-center pt-10 sm:pt-20 bg-gradient-to-b from-azure to-bluishWhite'>
      <DownloadApp />
      <AboutApp />
      <div className='py-5 text-5xl font-bold uppercase text-White-80'>
        <h1>Mais que um aplicativo. uma ideia em movimento.</h1>
      </div>
      <TeamGeesh />
    </div>
  )
}

export default App
