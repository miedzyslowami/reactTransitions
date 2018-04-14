import React from 'react';
import scss from '../scss/clientMainSection.scss';
import Slider from './Slider.jsx';
class ClientMainLeft extends React.Component {
    render() {
        return(<div className={scss.left__content}>
            <div><Slider sliderType="text"
                  text_1={{title:'Paris Fashion Week',subtitle:'Lorem fsdfsdfs afsfasfasffsd sdfsdfaffdfa'}}
                  text_2={{title:'New trends in Fashion',subtitle:'dfsdfsdfsdfaf asfasfsa asf asf asf afsdf'}}
                  text_3={{title:'Black or White',subtitle:'fsdfaas fasdfasfsd asfsdf sdf sdf fsf f asffaf'}}
                  text_4={{title:'Never too old to wear that',subtitle:' asf sdf af sdf a ff asf asf as f'}}
                  cubeshape="cube__rectangle"
                  currentSlide={this.props.currentSlide}
                  />
                  </div></div>)
    }
}

export default ClientMainLeft;
