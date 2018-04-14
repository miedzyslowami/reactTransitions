import React from 'react';
import scss from '../scss/about.scss';
class About extends React.Component {
  render() {
    return (<section className={scss.about__section}>
            <div className={scss.left__wrapper}>LEFT
            </div>
            <div className={scss.right__wrapper}>
          RIGHT
        </div>

    </section>)
  }
}

export default About;
