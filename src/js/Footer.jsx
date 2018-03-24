import React from 'react';
import SocialIcons from './SocialIcons.jsx';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faEnvelope from '../../node_modules/@fortawesome/fontawesome-free-regular/faEnvelope';
import scss from '../scss/footer.scss';

class Footer extends React.Component {
    render() {
        return(<footer>
                <div className={scss.footer__wrapper}>
                <div className={scss.footer__logo__line}>
                    <div className={scss.logo}>{this.props.logo}</div>
                    <FontAwesomeIcon icon={faEnvelope} className="fa-2x"></FontAwesomeIcon>
                    <div className={scss.newsletter}>Sign up our newsletter</div>
                </div>
                <hr className={scss.hr}/>
                <div className={scss.footer__copyrights__line}>
                <div className={scss.copyrights}>&copy; 2018 MI Talent. Designed by Tranmautritam from Mass Impressions.</div>
                    <SocialIcons align="horizontal" iconSize="fa-2x"/>
                </div>
                </div>
            </footer>)
    }
}

export default Footer;
