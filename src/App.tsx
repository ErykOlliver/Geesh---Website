import './App.css'

import DownloadApp from "./Screens/DownloadApp"


function App() {
  return (
    <div className='w-screen h-fit flex flex-col items-center gap-6 justify-center pt-10 sm:pt-20 bg-gradient-to-b from-azure to-bluishWhite'>
      <DownloadApp />
    </div>
  )
}

export default App
