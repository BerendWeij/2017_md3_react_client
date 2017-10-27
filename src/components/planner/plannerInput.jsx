import React from 'react';

class PlannerInput extends React.Component {

    // todo: er zit veel herhaling in de input structuur. Hier kunnen we een functie voor aanmaken

    render() {
        return (
            <div className="planner">
                <label>
                    <div className="planner__label">
                        Afspraak:
                    </div>
                    <input
                        className="planner__input"
                        type='text'
                        placeholder='Omschrijf de afspraak'
                        onChange={e => this.setState({title: e.target.value})}
                    />
                </label>
                <br />
                <label>
                    <div className="planner__label">
                        Datum:
                    </div>
                    <input
                        className="planner__input"
                        type='date'
                        placeholder='Op welke datum is de afspraak?'
                        onChange={e => this.setState({date: e.target.value})}
                    />
                </label>
                <br />
                <label>
                    <div className="planner__label">
                        Tijdstip:
                    </div>
                    <input
                        className="planner__input"
                        type='time'
                        placeholder='Welk tijdstip?'
                        onChange={e => this.setState({time: e.target.value})}
                    />
                </label>
                <div
                    className="planner__submit"
                    onClick={e => this.props.onSubmit(this.state)}
                >
                    Afspraak toevoegen
                </div>
            </div>
        );
    }
}

export default PlannerInput;