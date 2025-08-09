export default function HeroCard({title,paragraph, imageLink, imgAlt}) {
    return(

        <div style={{textAlign: 'center', display:'flex',flexDirection:'column', alignItems:'center'}}>

            <div style={{display:'flex', alignItems:'center', justifyContent:'center',width:'72px',height:'72px',borderRadius:'20px', backgroundColor:'#262626'}}>
                <img style={{width:'32px', height:'32px'}} src={imageLink} alt={imgAlt}/>
            </div>
            <h2 style={{color:'#FFFFFF',marginBottom:'0px'}}>{title}</h2>
            <p style={{color:'#666666',width:'230px'}}>{paragraph}</p>
        </div>


    )

}