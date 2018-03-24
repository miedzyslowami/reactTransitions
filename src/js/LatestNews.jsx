import React from 'react';
import scss from '../scss/latestnews.scss';
class LatestNews extends React.Component {
    render() {
        return(<div className={scss.wrapper}>
            <h2 className={scss.heading}>Latest news</h2>
            <hr className={scss.hr}/>
            </div>)
    }
}

export default LatestNews;
