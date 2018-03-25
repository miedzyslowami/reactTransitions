import React from 'react';
import scss from '../scss/latestnewsitem.scss';


class LatestNewsItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(<div className={scss.newsItem}>
            <figure>
            <img className={scss.img} src={this.props.image} alt={this.props.altImage}/>           </figure>
            <h4 className={scss.heading}>{this.props.heading}</h4>
            </div>)
    }
}

export default LatestNewsItem;
