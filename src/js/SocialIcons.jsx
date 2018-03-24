import React from 'react';
import scss from '../scss/socialIcons.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFacebookSquare from '../../node_modules/@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faTwitter from '../../node_modules/@fortawesome/fontawesome-free-brands/faTwitter';
import faInstagram from '../../node_modules/@fortawesome/fontawesome-free-brands/faInstagram';
import faYoutube from '../../node_modules/@fortawesome/fontawesome-free-brands/faYoutube';

class SocialIcons extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (<div className={scss[this.props.align]}>
      <FontAwesomeIcon icon={faFacebookSquare} className={this.props.iconSize}/>
      <FontAwesomeIcon icon={faInstagram} className={this.props.iconSize}/>
      <FontAwesomeIcon icon={faYoutube} className={this.props.iconSize}/>
      <FontAwesomeIcon icon={faTwitter} className={this.props.iconSize}/>
    </div>)
  }
}

export default SocialIcons;
