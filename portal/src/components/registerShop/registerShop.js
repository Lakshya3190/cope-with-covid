import React from 'react';
import 'tachyons';



class registerShop extends React.Component {
    constructor(props) {
        super();

        this.state = {
            type: '',
            delivery_type: '',
            contact: '',
            shop_name: '',
            society: '',
            description: ''
        }
    }

    onTypeChange = (event) => {
        this.setState({type: event.target.value});
    }

    onDeliveryTypeChange = (event) => {
        this.setState({delivery_type: event.target.value});
    }

    onContactChange = (event) => {
        this.setState({contact: event.target.value});
    }

    onShopNameChange = (event) => {
        this.setState({contact: event.target.value})
    }

    onSocietyChange = (event) => {
        this.setState({society: event.target.value})
    }

    onDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    onSubmitRegister = () => {
        fetch('http://localhost:3005/registerShop', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                type: this.state.type,
                delivery_type: this.state.delivery_type,
                contact: this.state.contact,
                society: this.state.society,
                description: this.state.description 
            })
        })

        .then(response => response.json())
        .then(this.props.onRouteChange('home'))
        .then(alert("Registeration Successful"))
    }
    


    render(){
        return(
        <div>

            <main class="pa4 black-80">
                <div className="measure center form pa3 br3">
                    <fieldset id="sign_up" class="ba b--transparent ph0 mh0 pa4">
                        <legend style = {{color: 'white'}} className="f2 fw6 ph0 mh0 pa3">Register Your Shop</legend>

                        <div className = 'pa3'>
                                <span style = {{color: 'white'}} className = 'pa4'>Choose the category of products you can offer:<br/></span> 
                                    <select onChange = {this.onTypeChange} id="type" name="Type">
                                        <option value="Medical">Medical</option>
                                        <option value="Groceries">Groceries</option>
                                        <option value="Hygiene">Hygiene</option>
                                        <option value="Fruits/Vegetables">Fruits/Vegetables</option>
                                    </select>
                        </div>

                        <div className = 'pa3'>
                                <span style = {{color: 'white'}} className = 'pa4'>Choose delivery method:<br/></span> 
                                    <select onChange = {this.onDeliveryTypeChange} id="kind" name="Kind">
                                        <option value="Home Delivery">Home Delivery</option>
                                        <option value="Pick-Up">Pick-Up</option>
                                    </select>
                        </div>

                        <div class="mt3">
                            <label style = {{color: 'white'}} className="db fw6 lh-copy f6" htmlFor="email-address">Contact</label>
                            <input onChange = {this.onContactChange} className="pa2 input-reset ba bg-white hover-bg-black hover-white w-60" type="email" name="email-address"  id="email-address"/>
                        </div>

                        <div class="mt3">
                            <label style = {{color: 'white'}}  className="db fw6 lh-copy f6" htmlFor="email-address">Shop Name</label>
                            <input  onChange = {this.onShopNameChange} className="pa2 input-reset ba bg-white hover-bg-black hover-white w-60" type="email" name="email-address"  id="email-address"/>
                        </div>

                        <div class="mt3">
                            <label  style = {{color: 'white'}} className="db fw6 lh-copy f6" htmlFor="email-address">Name of Society</label>
                            <input onChange = {this.onSocietyChange} className="pa2 input-reset ba bg-white hover-bg-black hover-white w-70" type="email" name="email-address"  id="email-address"/>
                        </div>

                    <div className = 'pa3'>
                            <label style = {{color: 'white'}} htmlFor="comment" className="f6 b db mb2">Description of Service <span class="normal black-60">(optional)</span></label>
                            <textarea onChange = {this.onDescriptionChange} id="comment" name="comment" className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2" aria-describedby="comment-desc"></textarea>
                            <small style = {{color: 'white'}} id="comment-desc" className="f6 black-60">Add a description of services you are willing to offer.</small>
                    </div>

                    </fieldset>
                    <div className="">
                    <input style = {{color: 'white'}} onClick = {this.onSubmitRegister} className="b ph3 pv2 input-reset ba b--white bg-blue grow pointer f6 dib form button" type="submit" value="Submit"/>
                    <p  onClick = {() => this.props.onRouteChange('home')} style = {{flex: 'flex', justifyContent: 'start', color: 'white'}} className = 'b ph3 pv2 input-reset ba b--white bg-blue grow pointer f6 dib form button'>Home</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
    
}

export default registerShop;