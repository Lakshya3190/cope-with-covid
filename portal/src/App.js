import React from 'react';
import './App.css';
import LandingPage from './components/landingPage/landingPage.js';
import FindService from './components/findService/findService.js';
import ProvideService from './components/provideService/provideService.js';
import VulnerabilityAnalysis from './components/vulnerabilityAnalysis/vulnerabilityAnalysis.js';
import Dashb from './components/dashboard/dashboard.js';
import RegisterShop from './components/registerShop/registerShop.js';



class App extends React.Component{

  constructor(){
    super();
    this.state = {
      route: 'home',
    }
  }

onRouteChange = (route) => {
  this.setState({route: route});
}

  render(){
    return (
      <div className="App">
      {
          this.state.route === 'home'
          ? <LandingPage onRouteChange = {this.onRouteChange}/>
          : (
            this.state.route == 'findService'
            ? <FindService onRouteChange = {this.onRouteChange}/>
            : (
              this.state.route == 'provideService'
              ? <ProvideService onRouteChange = {this.onRouteChange}/>
              : (
                this.state.route == 'vulnerabilityAnalysis'
                ? <VulnerabilityAnalysis/>
                : (
                  this.state.route == 'dashboard'
                  ? <Dashb onRouteChange = {this.onRouteChange}/>
                  : (
                    this.state.route == 'registershop'
                    ? <RegisterShop onRouteChange = {this.onRouteChange}/>
                    : <LandingPage/>
                  )
                  
                )
              )
            )
          )
      }

      </div>
    );
  }
}

export default App;
