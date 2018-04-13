import React from 'react';
import scss from '../scss/clientMainSection.scss';
import Slider from './Slider.jsx';
class ClientMainLeft extends React.Component {
    render() {
        return(<div className={scss.left__content}>
            <div><Slider sliderType="text"
                  text_1='cccccccccccccccccc'
                  text_2='ffffffffffffffff'
                  text_3='aaaaaaaaaaaa'
                  text_4='sssssssssssssssssssssss'
                  cubeshape="cube___rectangle"/>
                  </div></div>)
    }
}

export default ClientMainLeft;
