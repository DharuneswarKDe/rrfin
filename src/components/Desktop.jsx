import React from 'react';
import { FunctionComponent } from 'react';
import { Link } from "react-router-dom";
import styles from './Desktop.module.css';
import Image from 'react-bootstrap/Image';
import Video from './Video';
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const Desktop = () => {

  	return (
    		<div className={styles.desktop2}>
      			<div className={styles.navbar}>
        				<div className={styles.navbarChild} />
        				<Link to="/about" ><div className={styles.about}>ABOUT</div></Link>
        				<Link to="/insights" ><div className={styles.insights}>INSIGHTS</div></Link>
        				<Link to="/tools"> <div className={styles.tools}>TOOLS</div></Link>
        				<div className={styles.rectangleParent}>
          					<div className={styles.groupChild} />
          					<Link to="/whattodo"> <div className={styles.whatWeDo}>WHAT WE DO</div></Link>
        				</div>
        				<div className={styles.buttonParent}>
          					<div className={styles.button}>
            						<div className={styles.stateLayer} />
          					</div>
          					<Link to="/contact"><div className={styles.contactUs}>Contact Us</div></Link>
        				</div>
        				<div className={styles.rrFinvests}>RR FINVESTS</div>
      			</div>
      			<div className={styles.header}>
        				<div className={styles.buttonGroup}>
          					<div className={styles.button1}>
            						<div className={styles.stateLayer1} />
          					</div>
          					<Link to="/contact"><div className={styles.connect}>Connect</div></Link>
        				</div>
        				
        				
						<div className={styles.joinUsToday}>{`Join us today and let your money work hard as you do `}</div>
      			</div>
				<Video />
      			<div className={styles.about1}>
        				<div className={styles.howInvestmentsAre}>How investments are intelligent with us</div>
        				<div className={styles.aboutChild}></div>
        				<div className={styles.aboutItem}>
						<Image src="src/assets/WhatsApp Image 2024-09-04 at 18.25.18_f2c7542e.jpg" fluid/>
						</div>
        				<div className={styles.aboutInner} />
        				<div className={styles.loremIpsumJnfsdjnfContainer}>
          					<span className={styles.makeIntelligentInvestmentsContainer1}>
            						<p className={styles.makeIntelligent}>Lorem ipsum jnfsdjnf</p>
            						<p className={styles.nsfdnjdsSioofdoisdDsigso}>nsfdnjds sioofdoisd dsigso i dsiofsdo iddifosdjn ifgnnodi  oinffo v fnxgvo fnvon oifngvoin sdfhs fiod vofdnv fshiu fsdoifhoi sidfjois fdosdifoisd f idhfo sdfdihfisdhfoisdihfi sdoihfosdihf ijfijojoi isdfjo sfgdgd gfgh thf sdofnon ids gifdgi sdif dsjgid gdsigoidg fidg oidfg sifjoisd oifdogm gdsoig gdio sngisog iomgmg rjio isfs fnsi fmssijis siofisdm sgifdjigodgs sfsi fsi frfois oirijdjs f rjidjgidj gjg dijrgd gjrgjjdr gj</p>
          					</span>
        				</div>
      			</div>
      			<div className={styles.counter}>
        				<div className={styles.theFirm}>The Firm</div>
        				<div className={styles.fjhvkbblOuhoiHiu}>Fjhvkbbl ouhoi  hiu oihoi pijj o oi uu oihoj pkop ouio iu oiy uiouiouoi uio uiooiuiojomoiononkn oihoin oni ni nn oiohioho bigiu bbi vyuy g uhi uib iu g ihuih ihiuninin iun</div>
        				<div className={styles.aud}>AUD</div>
        				<div className={styles.aud1}>AUD</div>
        				<div className={styles.aud2}>AUD</div>
        				<div className={styles.aud3}>AUD</div>
        				<div className={styles.aud4}>AUD</div>
        				<div className={styles.rectangleGroup}>
          					<div className={styles.groupItem} />
          					<div className={styles.groupInner} />
          					<div className={styles.rectangleDiv} />
          					<div className={styles.groupChild1} />
          					<div className={styles.groupChild2} />
          					<div className={styles.div}>100+</div>
          					<div className={styles.div1}>100+</div>
          					<div className={styles.div2}>100+</div>
          					<div className={styles.div3}>100+</div>
          					<div className={styles.div4}>100+</div>
        				</div>
      			</div>
      			<div className={styles.whatWeBuilt2}>
        				<div className={styles.option1}>OPTION 1</div>
        				<div className={styles.option2}>OPTION 2</div>
        				<div className={styles.option3}>OPTION 3</div>
        				<div className={styles.option4}>OPTION 4</div>
        				<div className={styles.whatWeBuilt2Child} />
        				<div className={styles.whatWeBuilt2Item} />
        				<div className={styles.whatWeBuilt2Inner} />
        				<div className={styles.whatWeBuilt2Child1} />
        				<div className={styles.whatWeBuild}>{`What We Build `}</div>
      			</div>
      			<div className={styles.ceo}>
        				<div className={styles.rakeshJayaprakashFounderContainer}>
          					<span className={styles.makeIntelligentInvestmentsContainer1}>
            						<p className={styles.makeIntelligent}>
              							<b>Rakesh Jayaprakash</b>
              							<span className={styles.span}>{` `}</span>
            						</p>
            						<p className={styles.makeIntelligent}>{`Founder & CEO`}</p>
          					</span>
        				</div>
        				<div className={styles.kfdSfdpjFokfnod}>kfd sfdpj fokfnod gimifxmfosdsndj idsjf oisdn sdiufhsu fsfhs oidsjjf osf sdfjsdjf sifdjiosdf osdijfisdj foisdnosds xcovnonv sdoifn sdfs fisd vvsdnvidnvoisdv sdonoisd oovn vosdnvo odoisdf fd oidnnf xnc odno vdoniodsno nsdn fods dsifnoi odxnvo v</div>
        				<div className={styles.ceoChild} />
      			</div>
      			<div className={styles.portfolio}>
				 
        				<div className={styles.portfolioSpotlight}>Portfolio Spotlight</div>
        				<div className={styles.kdmOdfsoOkfdsmContainer}>
          					<span className={styles.makeIntelligentInvestmentsContainer1}>
							  <CCarousel controls transition="crossfade">
 							  <CCarouselItem>
    								<CImage className="d-block w-100" src="./assets/iStock-1386672296-4.jpg" alt="slide 1" />
  							  </CCarouselItem>
  							  <CCarouselItem>
    								<CImage className="d-block w-100" src="./assets/WhatsApp Image 2024-09-04 at 18.25.18_f2c7542e.jpg" alt="slide 2" />
  							  </CCarouselItem>
  							  <CCarouselItem>
    								<CImage className="d-block w-100" src="/images/angular.jpg" alt="slide 3" />
  							  </CCarouselItem>
							</CCarousel>
            						<p className={styles.nsfdnjdsSioofdoisdDsigso}>{`KDM ODFSO  OKFDSM M FODGM DFKO GFDPOI `}</p>
            						<p className={styles.makeIntelligent}>{`SDFGN SDFGI FGDOGN ODFNG ODF NG OIG `}</p>
          					</span>
        				</div>
      			</div>
      			<div className={styles.news}>
        				<div className={styles.newsChild} />
        				<div className={styles.newsItem} />
        				<div className={styles.newsInner} />
        				<div className={styles.news1FidofdmOf}>news1 fidofdm of</div>
        				<div className={styles.news1FidofdmOf1}>news1 fidofdm of</div>
        				<div className={styles.news1FidofdmOf2}>news1 fidofdm of</div>
        				<div className={styles.news1}>NEWS</div>
        				<div className={styles.frameDiv} />
      			</div>
      			<div className={styles.footer}>
        				<div className={styles.stayUpTo}>STAY UP TO DATE</div>
        				<div className={styles.getRegularInvestment}>Get Regular Investment updates right at your Inbox</div>
        				<div className={styles.footerChild} />
        				<div className={styles.footerItem} />
        				<img className={styles.footerInner} alt="" src="Rectangle 30.svg" />
        				<div className={styles.scrappedNewsFrom}>SCRAPPED NEWS FROM FORBES!!!!</div>
        				<div className={styles.builtWithRr}>Built with RR Finvests</div>
        				<div className={styles.chennaiPhaseContainer}>
          					<span className={styles.makeIntelligentInvestmentsContainer1}>
            						<p className={styles.makeIntelligent}>CHENNAI</p>
            						<p className={styles.makeIntelligent}>{`Phase - I, Ground Floor, `}</p>
            						<p className={styles.makeIntelligent}>Spencer Plaza Mall,</p>
            						<p className={styles.makeIntelligent}>{`G-24, Anna Salai, `}</p>
            						<p className={styles.makeIntelligent}>{`Chennai, `}</p>
            						<p className={styles.makeIntelligent}>Tamil Nadu 600002</p>
          					</span>
        				</div>
        				<div className={styles.connectUsThorugh}>Connect Us thorugh</div>
        				<div className={styles.instagram}>Instagram</div>
        				<div className={styles.linkedin}>LinkedIn</div>
        				<div className={styles.twitter}>Twitter</div>
        				<div className={styles.email}>Email</div>
      			</div>
      			<div className={styles.copyright}>
        				<div className={styles.rrFinvests1}>{`@2024 rR FINVESTS `}</div>
        				<div className={styles.legalT}>{`Legal T & C Disclaimer `}</div>
      			</div>
    		</div>);
};

export default Desktop;




  	