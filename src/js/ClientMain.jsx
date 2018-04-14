import React from 'react';
import ClientMainLeft from './ClientMainLeft.jsx';
import ClientMainRight from './ClientMainRight.jsx';
import scss from '../scss/clientMainSection.scss';
class ClientMain extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentSlide:-90,
      pageNr:1
    }
  }
  arrowHandler = (arrow) =>{
    let direction = () => arrow == "up" ? 1 : -1;
    let pageNr = this.state.pageNr;
    let newPageNr = () => arrow == "up"
        ? pageNr === 4
          ? 1
          : pageNr+=1
        : pageNr === 1
          ? 4
          : pageNr-=1;
    this.setState((prevState) => ({
  currentSlide: prevState.currentSlide + (direction() * 90),
  pageNr:newPageNr()
}))

  }
  shouldComponentUpdate(){
      return true;
  }
    render() {
        return(<section className={scss.main__section}>
              <div className={scss.pageNr__wrapper}>
              <div className={scss.vr} />
              <div className={scss.pageNr}>0{this.state.pageNr}</div>
              </div>
                  <div className={scss.left__wrapper}>
                <ClientMainLeft
                currentSlide={this.state.currentSlide}/></div>
                <div className={scss.right__wrapper}>
                <ClientMainRight
                 upClickhandler={this.upClickhandler} downClickhandler={this.downClickhandler}
                 arrowHandler={this.arrowHandler}
                 currentSlide={this.state.currentSlide}/></div>
            </section>)
    }
}

export default ClientMain;
