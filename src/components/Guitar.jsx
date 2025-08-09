export default function Guitar({imgSrc,name,price}) {
    const imgStyle = {
        width: '364px',
        height: '190px',
        objectFit: 'contain',
    }
    const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(price);
    return (
        <div style={{display:'flex', flexDirection:'column', gap:'4rem', alignItems:'center', flexWrap:'wrap', width:'364px'}}>
            <img style={imgStyle} src={imgSrc} alt={name} />

            <div style={{display:'flex', flexDirection:'column',width:'100%', justifyContent:'flex-start', gap:'10px'}}>
                <p style={{margin:'0px'}}>{name}</p>
                <p style={{fontSize:'14px', color:'#666666', margin:'0'}}>{formatted}</p>
            </div>
        </div>
    )



}