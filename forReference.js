import React from 'react';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';

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
                <Button size="large" variant="contained" colour="primary" onClick={this.handleClick}> Home </Button> 
            </div> 
        )
    };
}

export default HomeButton; 