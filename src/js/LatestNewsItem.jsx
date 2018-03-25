import React from 'react';
import scss from '../scss/latestnewsitem.scss';


class LatestNewsItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
          <div className={scss.newsItem}>
            <figure>
            <img className={scss.img} src={this.props.image} alt={this.props.altImage}/>           </figure>
            <a className={scss.heading} href="https://pixelbay.com">
            {this.props.heading}</a>
            </div>)
    }
}

export default LatestNewsItem;
