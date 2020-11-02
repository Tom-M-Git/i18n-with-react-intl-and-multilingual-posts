import React, {useState, createContext} from 'react';
import {IntlProvider} from 'react-intl';
import Japanese from '../lang/ja.json';
import English from '../lang/en-US.json';

export const Context = createContext();

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

function Wrapper (props) {

    const [locale, setLocale] = useState(langAttr);
    const [messages, setMessages] = useState(language);

    function selectLang(e) {
        const newLocale = e.target.value;
        setLocale(newLocale);
        switch(locale){
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
    console.log(messages);

    return(
        <Context.Provider value={{locale, selectLang}}>
            <IntlProvider locale={locale} key={locale} messages={messages}>
                {props.children}
            </IntlProvider>
        </Context.Provider>
    );
}

export default Wrapper;