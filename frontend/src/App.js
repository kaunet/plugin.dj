import './App.css';
//import YouTubePlayer from './components/YouTubePlayer';
import YouTubePlayer from './components/YouTubeFramePlayer';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <YouTubePlayer video="mYFaghHyMKc" autoplay="true" rel="0" modest="1"/>
      <Button onClick={onButtonClick}/>
    </div>
  );
}

function onButtonClick() {
  const player = document.getElementById('player');
  //const player = document.getElementsByTagName('YouTubePlayer')[0];
  console.log('onButtonClick:', player, window['yp']);
  window['yp'].loadVideoById({videoId: 'bHQqvYy5KYo'});//playVideo();
}

export default App;
