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
    upClickhandler = (e) =>{
      this.props.upClickhandler();
    }
    downClickhandler = (e) =>{
      this.props.downClickhandler();
    }
    render() {
        return(<div className={scss.right__content}>
            <div><Slider sliderType="pictures"
            picture1={pic1}
            picture2={pic2}
            picture3={pic3}
            picture4={pic4}/>
            </div>
            <div className={scss.slider}>
            <div className={scss.tag}><h2>NAME TAG BLA BLA</h2></div>
            <div className={scss.arrows}>
            <FontAwesomeIcon icon={faAngleUp} className="fa-3x" onClick={this.upClickhandler} />
            <FontAwesomeIcon icon={faAngleDown} className="fa-3x" onClick={this.downClickhandler} />
            </div>
            </div>
        </div>);
    }
}

export default ClientMainRight;
