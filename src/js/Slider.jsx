import React from 'react';
import scss from '../scss/slider.scss';
class Slider extends React.Component {
        render() {
            return (
                <div className={scss.scene}>
        <div className={scss.cube}>
        <div className={`${scss.cube__face} ${scss.cube__face__front}`}></div>
        <div className={`${scss.cube__face} ${scss.cube__face__back}`}></div>
        <div className={`${scss.cube__face} ${scss.cube__face__left}`}></div>
        <div className={`${scss.cube__face} ${scss.cube__face__right}`}></div>
        <div className={`${scss.cube__face} ${scss.cube__face__top}`}></div>
        <div className={`${scss.cube__face} ${scss.cube__face__bottom}`}></div>
     </div> </div>)
    }
}
export default Slider;
