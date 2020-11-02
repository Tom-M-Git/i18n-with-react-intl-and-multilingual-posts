import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {IntlProvider} from 'react-intl';
import Japanese from './lang/ja.json';
import English from './lang/en-US.json';

import Header from './components/Header';
import Clock from './components/Clock';
import Footer from './components/Footer';
import Home from './Home';
import Posts from './Posts';

let langAttr = document.getElementsByTagName("html")[0].getAttribute("lang");
    let language;
    switch(langAttr){
      case "en":
        language = English;
        break;
      case "ja":
        language = Japanese;
        break;
      default:
        language = English;  
    }

function App (props) {

    const [locale, setLocale] = useState(langAttr);
    const [messages, setMessages] = useState(language);

    function selectLang(lang) {
        setLocale(lang);
        switch(lang){
          case "en":
            setMessages(English);
            break;
          case "ja":
            setMessages(Japanese);
            break;
          default:
            setMessages(English);
        }
          
    }
    //console.log(messages);

    return(
            <IntlProvider locale={locale} key={locale} messages={messages}>
              <Router>
                <Header selectingLang={selectLang} locale={locale}/>
                <Clock />
                <Switch>
                  <Route path={"/"+locale+"/Home"} exact><Home locale={locale} /></Route>
                  <Redirect exact from="/" to={"/"+locale+"/Home"} />
                  <Route path={"/"+locale+"/Posts"} exact><Posts locale={locale} /></Route>
                </Switch>
                <Footer />
              </Router>
            </IntlProvider>
    );
}

export default App;