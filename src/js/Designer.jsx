import React from 'react';
import scss from '../scss/designer.scss';
class Designer extends React.Component {
  render() {
    return (<section className={scss.about__section}>
            <div className={scss.left__wrapper}><div className={scss.left__content}>left</div>
            </div>
            <div className={scss.right__wrapper}>
          <div className={scss.right__content}>RIGHT</div>
        </div>

    </section>)
  }
}

export default Designer;
