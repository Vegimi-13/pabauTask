import {useQuery,gql} from "@apollo/client";
import {useNavigate} from "react-router-dom";
import Header from "../components/Header.jsx";
import './BrandsPage.css';
import Hero from "../components/Hero.jsx";
import Footer from "../components/Footer.jsx";

import apple from '../assets/apple.png'
import google from '../assets/google.png';
import ellipsePic from '../assets/ellipsePic.png'

const GET_BRANDS = gql`
    query {
      findAllBrands{
        id
        name
        image
      }
    }
`;
export default function BrandsPage() {
    const {loading, error, data} = useQuery(GET_BRANDS);

    const navigate = useNavigate();
    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <p>Error loading brands...</p>
    }

    const eightBrands  = data.findAllBrands.slice(0,8);



    return (
        <>
            <Header />
            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>

                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap:'5px'
                }}>
                    <h2 style={{marginBottom:'0px',fontSize: '44px'}}>Featuring the <span style={{color: '#FF6428'}}>Best Brands</span></h2>
                    <p style={{marginTop: '0px',fontSize:'16px', color:'#666666'}}>Select your preferred brand and explore our exquisite collection.</p>
                </div>


                <div className="brands-grid">
                    {eightBrands.map((brand) => (
                        <div
                            className="brand-card"
                            key={brand.id}
                            style={{ cursor: "pointer" }}
                            onClick={() => navigate(`/brands/${brand.id}`,{
                                state:{
                                    brandName: brand.name,
                                    brandImage: brand.image,
                                }
                            })}
                        >
                            <img
                                src={brand.image}
                                alt={brand.name}
                                className="brand-image"
                            />
                            {/*<p>{brand.name}</p>*/}
                        </div>
                    ))}
                </div>
            </div>

            <Hero />

            <div>
                <div style={{display:'flex',flexWrap:'wrap' ,alignItems:'center', marginTop:'100px', justifyContent:'space-around'}}>
                    <div  style={{display:'flex', flexDirection:'column',height:'533px',justifyContent:'center', gap:'2rem'}}>
                        <h1 style={{lineHeight:'140%',fontSize: '48px', width:'484px', textAlign:'center'}}>Browse and buy your <span style={{color:'#FF6428'}}>favorite guitars</span> with VibeString.</h1>
                        <div style={{display:'flex', gap:'2rem'}}>
                            <img style={{width:'193px'}} src={apple} alt="apple" />
                            <img style={{width:'193px'}} src={google} alt="apple" />
                        </div>
                    </div>
                    <div className={"Ellipse"}>
                        <img src={ellipsePic} />
                    </div>
                </div>
            </div>

            <Footer />


        </>

    )
}




