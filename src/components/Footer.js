import React from 'react';
import {FormattedMessage, FormattedDate} from 'react-intl';

function Footer (props) {

    return(
        
        <footer id="site-footer">
            <p>
                <FormattedMessage id="app.modified" defaultMessage="Last modified" />
                :&nbsp;
                <FormattedDate value={ new Date("2020-11-02T15:00:00Z") } year="numeric" month="long" day="2-digit" />
            </p>
            <br />
            <p>
                <FormattedMessage
                id="app.social"
                defaultMessage="Social Media"
                />
                : <a href="https://github.com/Tom-M-Git" target="_blank" rel="noreferrer">GitHub</a>
            </p>
            <span className="hr-alt"></span>
            <p>
                <FormattedMessage id="app.copyright" defaultMessage="Copyright" />
                &nbsp;&copy;&nbsp;2020 by <FormattedMessage id="app.author" defaultMessage="Tomoaki Morioka" /><FormattedMessage id="app.period" defaultMessage=". "/>
            </p>
            <p>
                <FormattedMessage
                id="app.builtWith"
                defaultMessage="Built with <a>React</a>"
                values={ {a: chunks => <a href="https://reactjs.org/" target="_blank" rel="noreferrer">{chunks}</a> } }
                />
            </p>
        </footer>
        
    );
}

export default Footer;