import HeroCard from "./heroCard.jsx";
import categoryPng from "../assets/category-2.png";
import  TruckPng from "../assets/Truck.png"
import emptyWalletPng from "../assets/empty-wallet-tick.png";


export default function Hero() {
    return(
        <div style={{backgroundColor:'#121212', padding:'40px', minHeight:'408px',marginTop:'220px'}}>
            <h1 style={{fontSize:'44px',marginTop:'60px',textAlign:'center',color:'#FFFFFF'}}>Why try <span style={{color:'#FF6428'}}>VibeStrings?</span></h1>

            <div style={{display:'flex', gap:'2rem',flexWrap:'wrap', justifyContent: 'space-around', marginTop:'80px'}}>
                <HeroCard title="Smooth Browsing" paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} imageLink={categoryPng} imgAlt={"err"} />
                <HeroCard title="Easy Delivery" paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} imageLink={TruckPng} imgAlt={"error"} />
                <HeroCard title="Swift Payments" paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."} imageLink={emptyWalletPng} imgAlt={"error"} />

            </div>
        </div>
    )






}