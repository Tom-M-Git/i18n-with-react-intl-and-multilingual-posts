import React from 'react';
import {FormattedMessage} from 'react-intl';

import PostData from './components/PostData';

function Posts(props){
    return(
            <main>
                <header>
                    <h1>
                        <FormattedMessage
                        id="app.posts"
                        defaultMessage="Posts"
                        />
                    </h1>
                </header>
                <PostData locale={props.locale} />
            </main>
    );
}

export default Posts;