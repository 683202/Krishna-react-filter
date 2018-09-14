import React from 'react';

class FilteredByCategory extends React.Component{
    render() {
        console.log(this.props.category);
        return(
            <li>
                category:{this.props.category}
                description:{this.props.description}
                priority:{this.props.priority}
            </li>
        );
    }
}

export default FilteredByCategory;