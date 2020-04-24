import React from 'react';
import PopUp from './popup/popup.js';
import './card.css';

class Card extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            showpopUp: false
        }
    }

    togglePopup() {  
        this.setState({  
             showPopup: !this.state.showPopup  
        });  
    }  
        

    render(){
        return(
        
            <div className = ' tc bg-light-green dib br3 pa2 ma2 bw2 shadow-5'>
                <div className = 'pa2'>
                    <h1>{this.props.kind}</h1>
                    <p><strong>Email</strong><br/>{this.props.email}</p>
                    <p><strong>Contact</strong><br/>{this.props.phone}</p>
                    <p><strong>Society</strong><br/>{this.props.society}</p>
                    <p onClick = {this.togglePopup.bind(this)} className = 'pa2 f4 pointer grow button_card b'>Description</p>
                </div>
                {this.state.showPopup ?  
                <PopUp  
                        text='Click "Close Button" to hide popup'  
                        closePopup={this.togglePopup.bind(this)} 
                        description = {this.props.description} 

                />  
                : null  
                }  
            </div>

        );
    }
   
}

export default Card;