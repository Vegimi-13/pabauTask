export default function Logo({width, height,fSize}) {


    return (
        <div style={{
            display: 'flex',
            width: 'fit-content',
            height: 'fit-content',
            alignItems: 'center',
            gap:'1rem',
            margin:'62px 0 0 120px',
        }}>

            <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.1497 14.7262C13.7657 22.0669 7.59189 27.9146 0 28V0C7.59189 0.0854653 13.7657 5.9331 14.1497 13.2738C14.5287 6.02987 20.5459 0.239902 28 0.00640446V27.9937C20.5459 27.7602 14.5287 21.9702 14.1497 14.7262Z" fill="#FF6428"/>
            </svg>
            <h2 style={{
                // fontFamily: 'Satoshi',
                weight: '500',
                fontSize: fSize
            }}>VibeStrings</h2>
        </div>
    )
}