import Logo from "./Logo.jsx";
export default function Header() {
    return (
        <header style={{
            // margin: '0 0 0 2rem',
            display: 'flex',
            justifyContent: 'space-between',
        }}>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                flex:'1',
            }}>

                <Logo width={28} height={28} fSize="24px" />

                    <div style={{
                        maxWidth:'508px',
                        marginLeft:'120px',
                        // alignSelf: 'center',
                        position: 'relative',
                        marginTop: '80px',
                    }}>
                        <h1 style={{
                            marginBottom: '0px',
                            textAlign: 'center',
                            fontSize: '56px'
                        }}>Browse top quality <span style={{color: '#FF6428'}}>Guitars</span> online</h1>

                        <p style={{
                            color: '#666666',
                            height: 'fit-content',
                            width:'398px',
                            textAlign: 'center',
                        }}>Explore 50k+ latest collections of branded guitars online with VibeStrings.</p>
                    </div>
                </div>



            <div className="test" style={{

                width: '672px',
                height: '586px',
                borderRadius: '0 0 151px 360px',
            }}>



            </div>
        </header>
    )
}