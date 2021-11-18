import React from 'react'
import LOGO from "./img/LOGO.png";
import aboutImg from "./img/header/About.png";
import faqImg from "./img/header/FAQ.png";
import roadmapImg from "./img/header/ROADMAP.png";
import mintImg from "./img/header/Mint Button.png";

export default function primaryPage() {
    return (
    <div>
      <nav className="transparent navigation_buttons row">
          <div className="col s12 l4 z-depth-3">
            <a href="/about"><img src={aboutImg} /></a>
          </div>
          <div className="col s12 l4 z-depth-3">
            <a href="/faq"><img src={faqImg} /></a>
          </div>
          <div className="col s12 l4 z-depth-3">
            <a href="/roadmap"><img src={roadmapImg} /></a>
          </div>
      </nav>
        <div className="backgrond_hero_wrapper">
          <a href="/"><img src={LOGO} className="mobile_logo"/></a>

          <div className="background_hero">
          </div>
        <img src={mintImg} className="mint_button" onClick={()=>{alert('Minting NFT');} }/>
      </div>
      <div className="subtitle_text">
          <h1>Welcome to the Bad Eggs Institute</h1>
          <p>Click the red button above to run the Eggstractor and mint your Bad Egg or see below more info!</p>
      </div>
      <footer className="footer_section">
        <p>@ copyrighted by Badeggs 2021.</p>
      </footer>
    </div>
    )
}
