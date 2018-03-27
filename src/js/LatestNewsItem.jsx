import React from 'react';
import scss from '../scss/latestnewsitem.scss';


class LatestNewsItem extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
          <div className={scss.newsItem}>
            <div className={scss.left__box}>
                <img className={scss.img} src={this.props.image} alt={this.props.altImage}/>
            </div>
            <div className={scss.right__box}>
                <a className={scss.heading} href="https://pixelbay.com">
                {this.props.heading}</a>
            <div>{this.props.daysAgo}</div>
            </div>

            </div>)
    }
}

export default LatestNewsItem;
