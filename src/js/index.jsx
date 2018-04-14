import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch, Link} from 'react-router-dom';
// import Listings from './Listings.jsx';
// import scss from '../scss/index.scss';
import Designer from './Designer.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Footer from './Footer.jsx';
import LatestNews from './LatestNews.jsx';
import ClientMain from './ClientMain.jsx';
import Header from './Header.jsx';
import scss from '../scss/index.scss';


class App extends React.Component {
  constructor(props){
    super(props)

  }
  searchHandler = (searchValue) =>{
    console.log(searchValue);
  }
    render() {
        return(<div className={scss.template}>
            <Header logo="MI Talent" searchHandler={this.searchHandler}/>
            <ClientMain/>
            <Designer/>
            <Switch>
                <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
           </Switch>
             <LatestNews/>
           <Footer logo="MI Talent"/>
           </div>
      )
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <HashRouter>
        <App/>
        </HashRouter>,
        document.getElementById('app')
    );
});
