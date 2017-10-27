import React from 'react';
import Planner from './components/planner/planner';
import Agenda from './components/agenda/agenda';

/**
 * Dit is onze hoofdcomponent. Alles valt binnen deze component
 */
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <div className="app__title">
                    MD React Agenda client
                </div>
                <div className="app__container">
                    <Planner />
                    <Agenda />
                </div>
            </div>
        );
    }
}

export default App;