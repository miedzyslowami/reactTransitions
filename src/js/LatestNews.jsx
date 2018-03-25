import React from 'react';
import scss from '../scss/latestnews.scss';
import news from '../dataNews.json';
import LatestNewsItem from './LatestNewsItem.jsx';

class LatestNews extends React.Component {
    render() {
        return(<section id="latest_news" className={scss.wrapper}>
            <h2 className={scss.heading}>Latest news</h2>
            <hr className={scss.hr}/>
            <div className={scss.newsGrid}>
            {Object.values(news).map((element,i)=>{
                if(i<6){
                    return <LatestNewsItem key={i} heading={element.heading} image={element.image} altImage={element.altImage}/>
                }
            })}
            </div>
            </section>)
    }
}

export default LatestNews;
