import React from 'react';
import ClientMainLeft from './ClientMainLeft.jsx';
import ClientMainRight from './ClientMainRight.jsx';
import scss from '../scss/clientMainSection.scss';
class ClientMain extends React.Component {
    render() {
        return(<section className={scss.main__section}>
                <div className={scss.left__wrapper}><ClientMainLeft/></div>
                <div className={scss.right__wrapper}><ClientMainRight /></div>
            </section>)
    }
}

export default ClientMain;
