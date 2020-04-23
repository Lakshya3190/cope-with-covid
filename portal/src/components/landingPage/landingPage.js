import React from 'react';
import 'tachyons';
import './landingPage.css';
import covid from './covid.png';

const landingPage = ({onRouteChange}) => {
    return(
        <div className = 'landingPage' style = {{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center'}}>

            <p className = 'pa1 pointer'style = {{fontSize: '80px', color:'white'}}><span style = {{fontSize: '110px', color:'orange'}}>COPE</span>
                                                                                         <br/>with<br/> 
                                                                                        <span style = {{fontSize: '150px', color:'green'}}>COVID</span></p>



            <p className = 'pa1 pointer'style = {{fontSize: '250px', color:'white'}}><img className = 'pb5 grow' src = {covid} height = '100px' width = 'auto'/></p>
            <div className = 'menu pa1'>
                <p onClick = {() => onRouteChange('findService')} className = 'menu-option ma4 pointer br2 shadow-1 f2 pa3 grow'>Find a Service</p>
                <p onClick = {() => onRouteChange('provideService')} className = 'menu-option ma4 pointer br2 shadow-1 f2 pa3 grow' >Provide a Service</p>
                <p onClick = {() => onRouteChange('registershop')} className = 'menu-option ma4 pointer br2 shadow-1 f2 pa3 grow'>Register Your Shop</p>
                <p onClick = {() => onRouteChange('vulnerabilityAnalysis')} className = 'menu-option ma4 pointer br2 shadow-1 f2 pa3 grow' >Vulnerability Analysis</p>
                <p onClick = {() => onRouteChange('dashboard')} className = 'menu-option ma4 pointer br2 shadow-1 f2 pa3 grow' >Covid-19 Dashboard</p>
            </div>
        </div>
            

    );
}

export default landingPage;