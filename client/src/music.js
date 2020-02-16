import React from 'react';

function Music(){
    return(
        <div >
            <h2 style={{fontFamily: 'Montserrat', color: 'white'}} >Some Recommended Music...</h2>
            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP" 
            width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{padding: '10px'}} />

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC" 
            width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{padding: '10px'}} />

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4PP3DA4J0N8" 
            width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{padding: '10px'}} />

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4fpCWaHOned" 
            width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{padding: '10px'}} />

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX9if5QDLdzCa" 
            width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{padding: '10px'}} />
            
            <iframe src="https://open.spotify.com/embed/album/5Eevxp2BCbWq25ZdiXRwYd?si=D_xaXLNkQTqGjEqydKQ-Ig" 
            allowTransparency="true" allow="encrypted-media" width={300} height={380} frameBorder={0} style={{padding: '10px'}} />

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX3Ogo9pFvBkY" 
            width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{padding: '10px'}} />

            <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5Q5wA1hY6bS" 
            width={300} height={380} frameBorder={0} allowTransparency="true" allow="encrypted-media" style={{padding: '10px'}} />
        </div>
    )
}

export default Music