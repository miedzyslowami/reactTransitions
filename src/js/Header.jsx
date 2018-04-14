import React from 'react';
import SocialIcons from './SocialIcons.jsx';
import scss from '../scss/header.scss';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '../../node_modules/@fortawesome/fontawesome-free-solid/faBars';
import faSearch from '../../node_modules/@fortawesome/fontawesome-free-solid/faSearch';
class Header extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                searchValue:""
            }
        }
        typeSearch = (e) =>{
            this.setState({searchValue:e.target.value});
        }
        searchHandler = () =>{
            this.props.searchHandler(this.state.searchValue);
        }

    render() {
        return(<header className={scss.header}>
            <div className={scss.wrapper}>
            <div><SocialIcons align="vertical" iconSize="fa-2x"/></div>
             <div className={scss.logo}>{this.props.logo}</div>
             <div className={scss.searchBox}>
             <form>
             <FontAwesomeIcon icon={faSearch} className="fa-1x" onClick={this.searchHandler}/>
             <input className={scss.searchInput} onChange={this.typeSearch} type="text" value={this.state.searchValue} placeholder="..."/> </form>
             </div>
            </div>
            </header>)
    }
}

export default Header;
