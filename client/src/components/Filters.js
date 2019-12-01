import React from 'react';


class Filters extends React.Component {
  render(){
    let filters = this.props.data;
    return(
      <div className="filters">
        <input
          type="number"
          value={filters.pageSize}
          onChange={this.props.stateHandler}
        />
      </div>
    )
  }
}


export default Filters;