import React from 'react';
import scss from '../scss/header.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faStar from '../../node_modules/@fortawesome/fontawesome-free-solid/faStar';
class Header extends React.Component {
    render() {
        return(<header className={scss.header}>
            <div className={scss.wrapper}>
            <FontAwesomeIcon icon={faStar} className="fa-3x"/>
             <div className={scss.logo}>{this.props.logo}</div>
             <div className={scss.searchBox}>
             <form><input className={scss.searchInput} type="text" placeholder="search something"/></form>
             </div>
            </div>
            </header>)
    }
}

export default Header;
