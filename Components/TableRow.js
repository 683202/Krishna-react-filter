import React from 'react';
import PropTypes from 'prop-types'

// class TableRow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // console.log("this is the constructor in the tableRow.js");
    //     this.state = {
    //         defectStatus: this.props.status
    //     }
    //     this.changeStatus = this.changeDefectStatus.bind(this);
    // }
    // changeDefectStatus() {
    //     // console.log("from changeStatus method");
    //     this.setState({
    //         defectStatus: "closed"
    //     });
    // }
    // render() {
        // console.log("Printing props in the render method of TableRow.js"+this.props.ddefect);

        // console.log("I m printign this array in the TableRow.js file");
        // console.log(rows);



        const TableRow = (props) => {
            return (
                <tr>
                    <td>{props.category}</td>
                    <td>{props.description}</td>
                    <td>{props.priority}</td>
                    <td>{props.status}</td>
                    <td><button onClick={()=> {props.onClosing(props.uniqueId);}}>Change Status</button></td>
                </tr>
            );
        }
    // }
// }

TableRow.defaultProps = {
    category: 'General'
}
TableRow.propTypes = {
    category: PropTypes.string,
    description: PropTypes.string,
    priority: PropTypes.number
}

export default TableRow;