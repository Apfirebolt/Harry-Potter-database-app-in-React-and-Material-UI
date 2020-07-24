import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/info/infoActions';


class HousesPage extends Component {
  componentDidMount() {
    this.props.getAllHouses();
  }
  render() {
    let { allHouses } = this.props;
    return (
      <Fragment>
        <h1>Harry Potter Houses Page</h1>
        {allHouses && allHouses.map((item, index) => {
          return (
            <p key={index}>{item.name}</p>
          )
        })
        }
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    allHouses: state.info.houses_data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllHouses: () => {
      dispatch(actionCreators.get_all_houses_action());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HousesPage);

