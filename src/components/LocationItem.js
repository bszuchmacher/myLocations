import React, { Component } from 'react';
import { MuiThemeProvider } from 'material-ui/styles';


class LocationItem extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleClick = () => {
    const { id } = this.props.location;
    this.props.navigateToRoute(`Locations/${id}`);
  }

  handleEditClick = () => {
    this.props.editLocation(this.props.location);
  }

  handleRemoveClick = () => {
    this.props.removeLocation(this.props.location);
  }

  render() {
    const { name, categories, address } = this.props.location;
    return (
      <MuiThemeProvider>
        <div style={{
          height: '30%',
          top: '35%',
          border: '2px solid lightblue',
          borderRadius: '25px',
          padding: '15px',
          marginBottom:"10px"
        }} className="list-group-item location">
            <h3>{name}</h3>
            <h5>Categories: {categories.toString()}</h5>
            <h5>Address: {address}</h5>
          </div>

          <div className="location-menu">
          <button type="button" className="btn btn-info"
          style={{marginRight:"10px"}}
                onClick={this.handleEditClick}>
                EDIT
              </button>
              <button type="button" className="btn btn-danger"
              style={{marginRight:"20px",}}
                onClick={this.handleRemoveClick}>
                REMOVE
              </button>
          </div>
      </MuiThemeProvider>
    )
  }
}

export default LocationItem;
