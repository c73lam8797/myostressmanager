import React from 'react';

class HomeButton extends React.Component {
    state = { 
        isClicked: false, 
    }; 

    handleClick() {
        this.setState( {isClicked: true} );
    }

    render () {
        return (
            <div>
                <button type = "button" onClick={this.handleClick}> Home </button> 
            </div> 
        )
    };
}

export default HomeButton; 