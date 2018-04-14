import React from 'react';
import scss from '../scss/clientMainSection.scss';
import Slider from './Slider.jsx';
class ClientMainLeft extends React.Component {
    render() {
        return(<div className={scss.left__content}>
            <div><Slider sliderType="text"
                  text_1={{title:'Paris Fashion Week',subtitle:'leading fashion names'}}
                  text_2={{title:'New trends in Fashion',subtitle:'who rules the world'}}
                  text_3={{title:'Black or White',subtitle:'which color should you pick'}}
                  text_4={{title:'Never too old to wear that',subtitle:'make yourself look younger'}}
                  cubeshape="cube__rectangle"
                  currentSlide={this.props.currentSlide}
                  />
                  </div></div>)
    }
}

export default ClientMainLeft;
