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

    deleteItem(id) {
        fetch(`http://localhost:1337/meetings/${id}`, {
            method : 'DELETE'
        }).then(() => this.refresh());
    }

    // todo: details ophalen afronden
    getDetails(id) {
        fetch(`http://localhost:1337/meetings/${id}`)
            .then(response => response.json())
            .then(details => {
                this.setState({ details : details });
            });
    }

    renderMeeting = (meeting, i) => (
        <AgendaItem
            key={i}
            {...meeting}
            onDelete={e => this.deleteItem(i)}
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