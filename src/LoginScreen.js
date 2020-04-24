import React, { Component } from 'react';
import './App.css';
import img_elBgImage from './images/LoginScreen_elBgImage_421330.jpg';
import img_elTentIcon from './images/LoginScreen_elTentIcon.png';

// UI framework component imports
import Button from 'muicss/lib/react/button';

export default class LoginScreen extends Component {

  // Properties used by this component:
  // appActions, deviceInfo

  constructor(props) {
    super(props);
    
    this.state = {
      userNameField: '',
      passwordField: '',
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
  }

  componentWillReceiveProps(nextProps) {
  }

  textInputChanged_userNameField = (event) => {
    this.setState({userNameField: event.target.value});
  }
  
  textInputChanged_passwordField = (event) => {
    this.setState({passwordField: event.target.value});
  }
  
  onClick_elButton = (ev) => {
    // Go to screen 'Adventures'
    this.props.appActions.goToScreen('adventures', { transitionId: 'fadeIn' });
  
  }
  
  
  render() {
    let layoutFlowStyle = {};
    let baseStyle = {};
    if (this.props.transitionId && this.props.transitionId.length > 0 && this.props.atTopOfScreenStack && this.props.transitionForward) {
      baseStyle.animation = '0.25s ease-in-out '+this.props.transitionId;
    }
    if ( !this.props.atTopOfScreenStack) {
      layoutFlowStyle.height = '100vh';
      layoutFlowStyle.overflow = 'hidden';
    }
    
    const style_elBgImage = {
      backgroundImage: 'url('+img_elBgImage+')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 50%',
      backgroundSize: 'cover',
     };
    
    const style_elTentIcon = {
      backgroundImage: 'url('+img_elTentIcon+')',
      backgroundSize: '100% 100%',
     };
    const style_elHeaderTitle = {
      fontSize: 30.1,
      color: 'white',
      textAlign: 'center',
     };
    
    const style_elUserNameField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      fontSize: 17.2,
      pointerEvents: 'auto',
     };
    
    const style_elPasswordField = {
      display: 'block',
      backgroundColor: 'white',
      paddingLeft: '1rem',
      boxSizing: 'border-box', // ensures padding won't expand element's outer size
      fontSize: 17.2,
      pointerEvents: 'auto',
     };
    
    const style_elButton = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      cursor: 'pointer',
      pointerEvents: 'auto',
     };
    
    return (
      <div className="AppScreen LoginScreen" style={baseStyle}>
        <div className="background">
          <div className="containerMinHeight elBgImage" style={style_elBgImage} />
        </div>
        
        <div className="layoutFlow" style={layoutFlowStyle}>
          <div className="elTentIcon">
            <div style={style_elTentIcon} />
          </div>
          
          <div className="elHeaderTitle">
            <div className="font-avenirNextDemiBold" style={style_elHeaderTitle}>
              <div><div dangerouslySetInnerHTML={{__html: this.props.locStrings.login_headertitle_957097.replace(/\n/g, '<br>')}}></div></div>
            </div>
          </div>
          
          <div className="elUserNameField">
            <input className="font-avenirNextRegular" style={style_elUserNameField} type="text" placeholder={this.props.locStrings.login_usernamefield_184628} onChange={this.textInputChanged_userNameField} value={this.state.userNameField}  />
          </div>
          
          <div className="elPasswordField">
            <input className="font-avenirNextRegular" style={style_elPasswordField} type="text" placeholder={this.props.locStrings.login_passwordfield_268823} onChange={this.textInputChanged_passwordField} value={this.state.passwordField}  />
          </div>
          
          <div className="elButton">
            <Button className="actionFont" style={style_elButton}  variant="raised" color="primary" onClick={this.onClick_elButton} >
              {this.props.locStrings.login_button_71145}
            </Button>
          </div>
        </div>
        
      </div>
    )
  }
  
}
