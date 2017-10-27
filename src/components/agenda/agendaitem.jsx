import React from 'react';

class AgendaItem extends React.Component {

    render() {
        return (
            <div className="agendaItem">
                <div className="agendaItem__title">{this.props.title}</div>
                <div className="agendaItem__date">{this.props.date}:{this.props.time}</div>
            </div>
        );
    }
}

export default AgendaItem;