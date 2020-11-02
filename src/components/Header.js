import React from 'react';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router-dom';

function Header (props) {
    function switchLang (arg) {
        props.selectingLang(arg);
    }
    return(
        
        <header id="site-header">
            <h1 id="site-title">
                <FormattedMessage id="app.title" defaultMessage="i18n with <blue>React Intl</blue> and multilingual posts" values={ {blue: chunks => <span style={{color:"#61dafb"}}>{chunks}</span>} }/>
            </h1>
            <h2 id="site-subtitle">
                <FormattedMessage id="app.subTitle" defaultMessage="A mock website project built with React" />
            </h2>
            <nav>
                <Link to="/en/Home" className="language-btn-a">
                    <button id="english" onClick={()=>{switchLang("en")}}>English</button>
                </Link>
                <Link to="/ja/Home" className="language-btn-a">
                    <button id="japanese" onClick={()=>{switchLang("ja")}}>日本語</button>
                </Link>
                <Link to={"/"+props.locale+"/Posts"} id="post-button-a">
                    <button id="post-button">
                        <FormattedMessage id="app.posts" defaultMessage="Posts" />
                    </button>
                </Link>
            </nav>
        </header>
        
    );
}

export default Header;