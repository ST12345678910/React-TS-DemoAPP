
import React from 'react'
import './App.css';
const url = "https://cataas.com/cat/says/";
const buttonStyle = {
  padding: '20px',
  borderRadius: '35px',
  margin: '5px',
  backgroundColor: 'coral',
  color: 'white'
}
const openGithub = () => {
  window.open("https://github.com/ST12345678910");
};
const openPortfolio = () => {
  window.open("https://github.com/ST12345678910/PersonalPortfolio");
};
const openLinkedin = () => {
  window.open("https://www.linkedin.com/in/shaun-tehranchi-1581431b7/");
};
const openAPIdocs = () => {
  window.open("https://cataas.com/#/");
};
const descStyle = {
  margin: '2px',
  fontSize: 'calc(10px + 1vmin)'
}
const defaultImage = "https://cataas.com/cat";
class Catform extends React.Component<
  {},
  {
    text: string;
  }
> {
  state = {
    text: ""
  };
  placeholderimg = {
    text: "https://cataas.com/cat/says/"
  };

  onChange = (e: React.FormEvent<HTMLInputElement>): void => {
    this.setState({ text: e.currentTarget.value });
  };
  
  render() {
    return (
      
      <div className='userCat'>
      <div className='formCat'>
          <input type="text" value={this.state.text} onChange={this.onChange} placeholder={"Caption a cat!"}/>
      </div>
      <div className='catFrame'>
          
          <img className='catSize' src={url + this.state.text}></img>
          <div id="buttonBox">
            <div style={descStyle} className="descriptionBox">
              <br></br>
            </div>
            <button style={buttonStyle} className="button1" onClick={openGithub}>Github</button>
            <button style={buttonStyle} className="button2" onClick={openPortfolio}>Portfolio</button>
            <button style={buttonStyle} className="button2" onClick={openLinkedin}>LinkedIn</button>
            <button style={buttonStyle} className="button2" onClick={openAPIdocs}>API Docs</button>
          </div>
      </div>
      </div>
    );
  }
}
export default Catform