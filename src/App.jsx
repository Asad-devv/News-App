import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import Navbar from "./components/Navbar"
// import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import News from './components/News'
import Loading from './components/loading'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  // apikey = process.env.REACT_APP_NEWS_API
  state= {progress : 0}
  setProgress= (progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <Router>
    
      <div>
        
        <Navbar/>
        <LoadingBar height={3}
        color='blue'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        
        <Routes>
          <Route exact key="general" path="/" element ={<News  key="general"  setProgress={this.setProgress} category="general"/>} />
          <Route exact key="science" path="Science" element ={<News  key="science"  setProgress={this.setProgress} category="science" />} />
          <Route exact key="business" path="Business" element = {<News  key="business" setProgress={this.setProgress} category="business"/>} /> 
          <Route exact key="sports" path="Sports" element = {<News  key="sports" setProgress={this.setProgress} category="sports"/> } />
          <Route exact key="technology" path="Technology" element = {<News  key="technology" setProgress={this.setProgress} category="technology" />} />
          <Route exact key="health" path="Health" element = {<News  key="health" setProgress={this.setProgress} category="health" />} /> 
          <Route exact key="entertainment" path="Entertainment" element = {<News  key="entertainment" setProgress={this.setProgress} category="entertainment" />} /> 
        </Routes>
        
        

      </div>
      </Router>
    )
  }
}
