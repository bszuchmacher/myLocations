import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import _ from 'lodash';
import FlatButton from 'material-ui/FlatButton';
import BackIcon from 'material-ui/svg-icons/navigation/chevron-left';

class LocationDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.actionFetchLocation(id);
  }

  handleBackClick = () => {
    this.props.history.push('/Locations');
  }

  render() {
    const { location } = this.props;
    if (_.isEmpty(location) || !location) {
      return <h1>Loading...</h1>
    }
    const { name, address, categories } = location;
    return (
      <div className="container">

        <FlatButton className="pull-left back-button-user-info" label="BACK" primary={true} onClick={this.handleBackClick}>
          <BackIcon className="back-button" />
        </FlatButton>
        <br />
        <h3>{name}</h3>
        <h5>Categories: {categories.toString()}</h5>
        <h5>Address: {address}</h5>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.currentLocation
  };
}

export default connect(mapStateToProps, actions)(LocationDetail);
