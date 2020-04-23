import React from 'react';
import Card from './card/card.js';
import './servicePortal.css';
import Card_Shop from './card_shop/card_shop.js';


class servicePortal extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            optionRoute: 'resident'
        }
    }

    onOptionClick = (optionRoute) => {
        this.setState({optionRoute: optionRoute})
    }

    render(){
        const {card, card_shop} = this.props;
        const cardArray = card.map(
            (user,i) => {
                return (
                    <Card key = {i}
                    kind = {card[i].kind}
                    email = {card[i].email}
                    phone = {card[i].phone}
                    society = {card[i].society}
                    description = {card[i].description}/>
                );
            })
    
            const cardArrayShop = card_shop.map(
                (user,i) => {
                    return (
                        <Card_Shop key = {i}
                        type = {card_shop[i].type}
                        delivery_type = {card_shop[i].delivery_type}
                        contact = {card_shop[i].contact}
                        shop_name = {card_shop[i].shop_name}
                        society_name = {card_shop[i].society_name}
                        description = {card_shop[i].description}/>
                    );
                })

            return(
                <div className = 'port'>
                    <p onClick = {() => this.props.onRouteChange('home')} style = {{flex: 'flex', justifyContent: 'start'}}className = 'grow dim pointer f3 option'>Home</p>
    
                    <h1 className = 'title f1'>Services Available in Your Society</h1>
    
                    <div className ='serviceOptions bb bw2 b--black br bw1 b--black' style = {{display: 'flex' ,justifyContent: 'center'}}>
                        <p onClick = {() => this.onOptionClick('resident')} className = ' pr2 pointer grow f3 b--white option'>Residents</p>
                        <p onClick = {() => this.onOptionClick('shops')} className = 'pl2 pointer grow f3 b--white option'>Shops</p>
                    </div>
                    
                    {
                        this.state.optionRoute === 'shops'
                        ? <div>
                            {cardArrayShop}
                            </div>
                        : <div>
                            {cardArray}
                            </div>
                    }
                    
                </div>
            )
    }
    
}

    
        
   

        
        
        
  

export default servicePortal;

