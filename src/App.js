import {Article, Brand, CTA, Feature, Navbar} from './components/index';
import {Speakers, SpeakerDialog, Features, Footer, Header, Possibility, WhatFutureX} from './container/index';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <WhatFutureX/>
      <Speakers/>
      <SpeakerDialog />
      <Brand/>
      <Feature/>
      <Article/>
      <CTA/>
      <Features/>
      <Possibility/>
      <Footer/>
    </div>
  );
}

export default App;
