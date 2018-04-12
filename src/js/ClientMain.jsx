import React from 'react';
import ClientMainLeft from './ClientMainLeft.jsx';
import ClientMainRight from './ClientMainRight.jsx';
import scss from '../scss/clientMainSection.scss';
class ClientMain extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSlide:1
    }
  }
  upClickhandler = () =>{
    console.log('up');
    this.setState((prevState) => ({
  currentSlide: prevState.currentSlide + 1
}));
  }
  downClickhandler = ()=>{
    console.log('down');
    this.setState((prevState) => ({
  currentSlide: prevState.currentSlide - 1
}));
  }
  shouldComponentUpdate(){
    console.log(this.state.currentSlide);
    return true;
  }
    render() {
        return(<section className={scss.main__section}>
                <div className={scss.left__wrapper}><ClientMainLeft/></div>
                <div className={scss.right__wrapper}><ClientMainRight upClickhandler={this.upClickhandler} downClickhandler={this.downClickhandler}/></div>
            </section>)
    }
}

export default ClientMain;
