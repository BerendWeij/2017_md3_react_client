import React from 'react';
import PlannerInput from './plannerInput'

class Planner extends React.Component {

    createMeeting = meeting => {
        fetch('http://localhost:1337/meetings', {
            method : 'POST',
            headers : {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify(meeting)
        });

        // todo: als de call klaar is de lijst opnieuw laden
    };

    render() {
        return (
            <PlannerInput onSubmit={this.createMeeting} />
        );
    }
}

export default Planner;