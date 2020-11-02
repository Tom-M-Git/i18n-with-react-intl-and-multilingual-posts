import React, {useState, useEffect} from 'react';
import {FormattedMessage, FormattedDate, FormattedTime} from 'react-intl';

function Clock (props) {
    const currentDate = new Date();
    const [currentTime, setCurrentTime] = useState(currentDate);


    useEffect( () => {
        const interval = setInterval( () => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return(
        <section id="clock">
            <FormattedMessage
                id="app.clock"
                defaultMessage="Current date and time"
            />
            :&nbsp;
            <FormattedDate
                value={currentTime}
                month="short"
                day="2-digit"
            />
            &nbsp;
            <FormattedTime
                value={currentTime}
                hour="numeric"
                minute="numeric"
                second="numeric"
            />
        </section>
    );
}

export default Clock;