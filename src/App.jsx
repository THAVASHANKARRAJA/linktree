import { useEffect } from 'react';
import * as THREE from "three";
import avatar from '../public/avatar.jpg'
import BIRDS from 'vanta/src/vanta.birds'
function App(){
  useEffect(() => {
    BIRDS({
      el:'#vanta',
      quantity:2,
      THREE: THREE,
      birdSize:2,
      backgroundAlpha:0,
      separation:100
      
    })
    
  },[])

  return (
    <div className="page " id='vanta'>
      <div className='page-container'> 

      <div className="hero">
    <img src={avatar}  alt='avatar'/>
    <p>@thavashankar</p>
    </div>
    <div className='container'>
    <a href="https://github.com/THAVASHANKARRAJA">GITHUB</a>
    <a href="https://thavashankarraja-portfolio.netlify.app/">PORTFOLIO</a>
  <a href="https://www.linkedin.com/in/thavashankarraja-k-c-311581208/">LINKEDIN</a>
    </div>
      </div>
    
    
    
    </div>
  )

}

export default App;