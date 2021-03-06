import React from 'react';
import {Link} from 'react-router-dom';
import scss from '../scss/slider.scss';
const style = scss;
class Slider extends React.Component {
    constructor(props){
        super(props)

    }
    renderCube = (type,scss = style)=>{
        let cube = [];
        for(let i = 1;i<5;i++){
            cube.push((<div key={i} className={scss[`cube__face__${i}`]}>
            {type =='pictures'
            ? this.renderImages(this.props[`picture${i}`],scss)
            : this.renderText(this.props[`text_${i}`],scss)}
            </div>));
        }
        return cube;
    }
    renderImages = (picture,scss = style) =>{
        return  <img className={scss.picture} src={picture}/>;
    }
    renderText = (text, scss = style) =>{
        let {title,subtitle} = text;
        return (<div>
        <h2 className={scss.slider__title}>{title}</h2>
        <h3 className={scss.slider__subtitle}>{subtitle}</h3><div className={scss.hr}/>
        <Link className={scss.slider__button} to="/about">About us</Link>
        </div>);
    }

        render() {
            return ( <div className={scss.scene}>
                  <div style={{transform:`rotateX(${this.props.currentSlide}deg)`}} className={`${scss.cube} ${scss[this.props.cubeshape]}`}>
                     {this.renderCube(this.props.sliderType)}
                        </div>
     </div> )
    }
}
export default Slider;
