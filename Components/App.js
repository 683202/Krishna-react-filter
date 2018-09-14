import React, { Component } from 'react';
import DefectTable from './DefectTable';
import AddDefect from './AddDefect';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            something:true
        }
    }

    render() {
        console.log('In the App.js file..'+this.props.role);
        if(this.props.role == "tester") {
            return (
                <React.Fragment>
                    <h1>This is a defect Tracker</h1>
                    <DefectTable/>
                    <AddDefect />
                </React.Fragment>
            )
        } else {
            return (
                <DefectTable/>
            );
        }
    }
}

export default App;