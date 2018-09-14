import React, {Component} from 'react';

class AddDefect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category:'Functionality',
            description:'',
            priority:3,
        };
        console.log("Initial filtered ")
        console.log(this.state.filtered);
        this.addNewDefect = this.addNewDefect.bind(this);
    }

    addNewDefect() {
        console.log("Inside add new defect.");
        let newDefect = {
            Category:this.refs.refCategory.value,
            description:this.refs.refDesc.value,
            priority:this.refs.refPriority.value,
            status:"open"
        };
        let currentData = JSON.parse(localStorage.getItem('defects'));
        currentData.push(newDefect);
        localStorage.setItem('defects',JSON.stringify(currentData));
    }

    render() {
        return (
            <React.Fragment>
                <h1>Add Defect </h1>
                <form>
                    Category: <select ref="refCategory" value={this.state.category}
                        onChange={()=>{this.setState(
                            {category:this.refs.refCategory.value}
                        )}}
                    >
                        <option value="UI">UI</option>
                        <option value="Functionality">Functionality</option>
                        <option value="Change Request">Change Request</option>
                    </select><br /><br />
                    Description:<textarea ref="refDesc" value={this.state.description}
                        onChange={()=>{this.setState(
                            {description:this.refs.refDesc.value}
                        )}}
                    >
                    </textarea><br /><br />
                    Priority:<input ref="refPriority" value = {this.setState.priority} type="number" min="1" max = "3" 
                        onChange={()=>{this.setState(
                            {priority:this.refs.refPriority.value}
                        )}}
                    >
                    </input>
                    <br /><br />
                    <button type="button" onClick={this.addNewDefect}>Add Defect</button>

                </form>
                <hr/>
            </React.Fragment>
        );
    }
}

export default AddDefect;