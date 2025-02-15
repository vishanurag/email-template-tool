import { ReactEventHandler, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Footer from './components/Footer';
import './App.css';

function App() {

  const [isDownloadClicked, setIsDownloadClicked] = useState(false);
  const sendForDownload = (e: ReactEventHandler)=> {
    setIsDownloadClicked(true);
  }
  return (
    <div className="body">
      <Header sendForDownload={sendForDownload} />
      <MainBody
      isDownloadClicked={isDownloadClicked}
      setIsDownloadClicked={setIsDownloadClicked} />
      <Footer />
    </div>
  )
}

export default App
