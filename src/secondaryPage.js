import React from 'react'
// import "./_oldstyle.css";
import "./roadmap.css";
import Logo from "./img/LOGO.png";
import aboutImg from "./img/header/About.png";
import faqImg from "./img/header/FAQ.png";
import roadmapImg from "./img/header/ROADMAP.png";
import aboutGif from "./img/main/eggs/About GIF.gif";
import faqGif from "./img/main/eggs/FAQ-ROADMAP GIF.gif";
import mintBtn from "./img/main/buttons/MINT.png";
import hitlerImg from "./img/main/eggs/Regular Hitler.jpg";
import AirbornehitlerImg from "./img/main/eggs/Airborne Hitler.jpg";
import CowBoyhitlerImg from "./img/main/eggs/Cowboy Hitler.jpg";
import PimphitlerImg from "./img/main/eggs/Pimp Hitler.jpg";
import HentaihitlerImg from "./img/main/eggs/Hentai Hitler.jpg";
import DiahitlerImg from "./img/main/eggs/Dia De Muertos Hitler.jpg";
import RobothitlerImg from "./img/main/eggs/Robot Hitler.jpg";
import RockyhitlerImg from "./img/main/eggs/Rocky Horror Hitler.jpg";

const SecondaryPage = () =>{
    return (
        <div>
            <nav className="transparent navigation_buttons row">
                <div className="col s12 l4">
                    <a href="#about"><img src={aboutImg} /></a>
                </div>
                <div className="col s12 l4">
                    <a href="#roadmap"><img src={roadmapImg} /></a>
                    
                </div>
                <div className="col s12 l4">
                    <a href="#faq"><img src={faqImg} /></a>
                </div>
            </nav>
            {/* About Section */}
            <section id="about" className="row">
                <div className="" >
                    <div >
                        <a href="/"><img src={Logo} className="logo_image"/></a>
                        <div className="logo_subtitle">
                            <div className="first_part">
                                <h2>About</h2>
                                <h3>IN ANOTHER UNIVERSE...</h3>
                                <p>...there is another you and that person is about to read their Wikipedia entry about the notorious Austrian flamenco dancer, Adolf Hitler!</p>
                                <p>Welcome to the Bad Eggs Institute.</p>
                                <p>Our egg hunters have searched all of the multiverses to track down the bad guys from our reality to find out if their interdimensional counterparts led better lives than the bad eggs that ruined ours!</p>
                                <p>We noticed some archetypes popping up as we travelled to each dimension;<br/>
                                    Hitler must have secretly wanted to be a flamenco dancer.</p>
                            </div>
                            <div className="second_part">
                                <h3>CALLING ALL EGG HUNTERS!</h3>
                                <p>The multiverse is an infinite realm of limitless possibilities but our Egg Hunters discovered that the human psyche plays an important part in building our characters and we noticed some key recurring traits that our bad guys had across all of the dimensions.</p>
                                <p>Who knows, maybe if our own evil Hitler had been allowed to play Hentai dress up, then maybe he would not have become such a murderous evil shit!</p>
                                <br />
                                <div className="center">
                                    <div className=" row s12">
                                        <div className="col">
                                            <img src={hitlerImg} />
                                        </div>
                                        <div className="col">
                                            <img src={AirbornehitlerImg} />
                                        </div>
                                        <div className="col">
                                            <img src={CowBoyhitlerImg} />
                                        </div>
                                        <div className="col">
                                            <img src={PimphitlerImg} />
                                        </div>
                                        <div className="col">
                                            <img src={HentaihitlerImg} />
                                        </div>
                                        <div className="col">
                                            <img src={DiahitlerImg} />
                                        </div>
                                        <div className="col">
                                            <img src={RobothitlerImg} />
                                        </div>
                                        <div className="col">
                                            <img src={RockyhitlerImg} />
                                        </div>
                                    </div>
                                </div>
                                <h3>10,000 HITLER BAD EGGS WILL POTENTIALLY PASS THROUGH THE EGGSTRACTOR PORTAL</h3><br />
                            </div>
                        </div>
                    </div>
                    <div className="row s12 m6">
                        <div className="center">
                            <a href="/"><img className="about_mint_button" src={mintBtn}/></a>
                        </div>
                        <div className="firt_part">
                            <h3>THE 11 ARCHETYPES</h3><br />
                            <p>Regular, Airborne, Cowboy, Flamenco, Rocky Horror, Hasidic, Day Of The Dead, Hentai, Pimp, Robot, Samurai</p>
                            <p>We're sure that the Bad Eggs from our reality would hate seeing themselves depicted in these ways</p>
                            <p>There are many different characters that will be created by mixing and matching the traits from each archetype. You can become an Egg Hunter by minting your own Bad Egg which will mix the 10+ traits of these archetypes for 1000s of combinations</p>

                        </div>
                        <div className="center">
                            <img className="about_gif" src={aboutGif}/>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            {/* Road Map Section */}
            <section id="roadmap" className="row">
                <div className="col s12">
                    <h2 className="center">ROADMAP</h2><br />
                    <div class="roadmapBox">
                        <div class="box lSide">
                            <div class="data">
                                <h4>PRE-SALE</h4>
                                <p>Only 20 Hitler Bad Eggs will be minted to reward the most active Egg Hunters across our social media. These will be transparently awarded to the winners just before launch.</p>
                            </div>
                        </div>
                        <div class="box rSide">
                            <div class="data">
                                <h4>Resale Listing</h4>
                                <p>The Institute is currently talking to the major NFT marketplaces to ensure that Egg Hunters will be able to trade their Bad Eggs after launch.</p>
                            </div>
                        </div>
                        <div class="box lSide">
                            <div class="data">
                                <h4>AirDrops</h4>
                                <p>Two weeks after launch the first airdrops of Institute Apparatus will be sent to eligible Egg Hunters.  The Apparatus will give Egg Chasers preferential treatment to use the Eggstractor.</p>
                            </div>
                        </div>
                        <div class="box rSide">
                            <div class="data">
                                <h4>5 More Community Voted Collections</h4>
                                <p>Four weeks after launch the community will vote on the next Bad Eggs search target. Our Artist will then prepare them for the Eggstractor.</p>
                            </div>
                        </div>
                        <div class="box lSide">
                            <div class="data">
                                <h4>Institute DAO Vault</h4>
                                <p>After the first 5 collections have been released, Q1 2022 will bring the release of the Bad Eggs Insititute DAO. Institute members will decide on the future of the Bad Eggs Metaverse and reap the rewards for holding proofs of eggstraction!</p>
                            </div>
                        </div>
                        <div class="box rSide">
                            <div class="data">
                                <h4>Institute Token AirDrop</h4>
                                <p>All Institute members will be part of the token genesis and will receive an airdrop with the new token that will enable the community to decide the direction of the Bad Eggs Institute.</p>
                            </div>
                        </div>
                        <div className="box">
                        </div>
                    </div>
                    <div className="row s12 m6">
                        <div className="center">
                            <img className="faq_gif" src={faqGif }/>
                        </div><br />
                        <div className="center">
                            <a href="/"><img class="faq_mint_button" src={mintBtn}/></a>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            {/* FAQ Section */}
            <section id="faq" className="row">
                <div className="">
                    <div className="">
                        <div class="logo_subtitle">
                            <h2 >FREQUENTLY ASKED QUESTIONS</h2><br />
                            <h4>WTF Is The Bad Eggs Institute?</h4>
                            <p>B.E.I. is a series of NFT collections that showcase the most evil shits in human history in ways that they would hate if they could see them.</p>
                            <h4>A Series?</h4>
                            <p>Yes. Everyone can become an Egg Hunter by using the Institute's Eggstractor Portal to search the multiverse for for the current seaon's nominated Bad Egg. <br/>
                                To kick things off we are looking for alternate Hitlers - the community will vote on the target for the next Bad Egg Collection. This will form the basis of the Institute DAO, more details in the roadmap.</p>
                            <h4>Any Perks For Egg Hunters?</h4>
                            <p>Absolutely! Verified Egg Hunters with a Bad Egg in their wallets serving as Proof Of Eggstraction, will not only be airdropped further Institute Apparatus but will also get to the front of the queue to use the Eggstractor Portal for future collections.</p>
                            <p>The Eggstractor Portal will have enough power to identify and generate 10,000 Bad Eggs from across an almost infinite multiverse.  Some traits will be rarer than others.</p>
                            <h4>What About Gamification?</h4>
                            <p>After the first 5 collections have been released, Q1 2022 will bring the release of the Bad Eggs Insititute DAO. <br/>
                                Institute members will decide on the future of the Bad Eggs Metaverse and reap the rewards for holding proofs of eggstraction!</p><br />
                        </div>
                    </div>
                    <div className="row s12 m6">
                        <div className="center">
                            <a href="/"><img class="faq_mint_button" src={mintBtn}/></a>
                        </div>
                        <div className="center">
                            <img className="faq_gif" src={faqGif }/>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer_section">
                <p>@ copyrighted by Badeggs 2021.</p>
            </footer>
        </div>
    )
}

export default SecondaryPage;