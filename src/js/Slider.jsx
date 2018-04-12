import React from 'react';
import scss from '../scss/slider.scss';
class Slider extends React.Component {
        render() {
            return ( <div className={scss.scene}>
                  <div className={scss.cube}>
                      <div className={`${scss.cube__face} ${scss.cube__face__front}`}>
                      <img className={scss.picture} src={this.props.picture1}/>
                      </div>
                      <div className={`${scss.cube__face} ${scss.cube__face__top}`}> <img className={scss.picture} src={this.props.picture2}/></div>
                      <div className={`${scss.cube__face} ${scss.cube__face__back}`}> <img className={scss.picture} src={this.props.picture3}/></div>
                      <div className={`${scss.cube__face} ${scss.cube__face__bottom}`}> <img className={scss.picture} src={this.props.picture4}/></div>
                        </div>
     </div> )
    }
}
export default Slider;
