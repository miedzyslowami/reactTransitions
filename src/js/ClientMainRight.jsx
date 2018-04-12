import React from 'react';
import scss from '../scss/clientMainSection.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faAngleUp from '../../node_modules/@fortawesome/fontawesome-free-solid/faAngleUp';
import faAngleDown from '../../node_modules/@fortawesome/fontawesome-free-solid/faAngleDown';
import Slider from './Slider.jsx';
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
            <div><Slider
            picture1="../src/img/1.jpg"
            picture2="../src/img/2.jpg"
            picture3="../src/img/3.jpg"
            picture4="../src/img/6.jpg"/>
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
