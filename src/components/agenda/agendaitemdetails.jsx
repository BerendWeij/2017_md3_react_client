import React from 'react';

class AgendaItemDetails extends React.Component {

    render() {
        return (
            <div className="agendaItemDetails">
                <div className="agendaItemDetails__title"></div>
                <div className="agendaItem__date">{this.props.date}:{this.props.time}</div>
                <div
                    className="agendaItem__delete"
                    onClick={this.props.onDelete}
                >
                    x
                </div>
            </div>
        );
    }
}

export default AgendaItemDetails;