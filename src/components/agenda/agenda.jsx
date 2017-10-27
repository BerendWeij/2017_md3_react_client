import React from 'react';
import AgendaItem from './agendaitem';

class Agenda extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            meetings : []
        };
        this.refresh();
    }

    refresh() {
        fetch("http://localhost:1337/meetings")
            .then(response => response.json())
            .then(meetings => {
                this.setState({ meetings : meetings });
            });
    }

    renderMeeting = (meeting, i) => (
        <AgendaItem
            key={i}
            {...meeting}
        />
    );

    render() {
        return (
            <div className="agenda">
                Je huidige afspraken:
                <br />
                {this.state.meetings.map(this.renderMeeting)}
            </div>
        );
    }
}

export default Agenda;