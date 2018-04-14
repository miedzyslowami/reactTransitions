import React from 'react';
import scss from '../scss/clientMainSection.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '../../node_modules/@fortawesome/fontawesome-free-solid/faAngleUp';
import faAngleDown from '../../node_modules/@fortawesome/fontawesome-free-solid/faAngleDown';
import Slider from './Slider.jsx';
import pic1 from '../img/1.jpg';
import pic2 from '../img/2.jpg';
import pic3 from '../img/3.jpg';
import pic4 from '../img/4.jpg';

class ClientMainRight extends React.Component {
    constructor(props){
        super(props)
    }
    arrowHandler = (e) =>{
      this.props.arrowHandler(e.currentTarget.dataset.arrow);
    }

    render() {
        return(<div className={scss.right__content}>
            <div><Slider sliderType="pictures"
            picture1={pic1}
            picture2={pic2}
            picture3={pic3}
            picture4={pic4}
            currentSlide={this.props.currentSlide}/>
            </div>
            <div className={scss.slider}>
            <div className={scss.tag}><div className={scss.hr}/><h2>World of Fashion</h2></div>
            <div className={scss.arrows}>
            <div onClick={this.arrowHandler} data-arrow="up">
            <FontAwesomeIcon icon={faAngleUp} className="fa-3x"  /></div>
            <div onClick={this.arrowHandler} data-arrow="down" >
            <FontAwesomeIcon icon={faAngleDown} className="fa-3x"  /></div>
            </div>
            </div>
        </div>);
    }
}

export default ClientMainRight;
