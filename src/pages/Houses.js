import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/info/infoActions';
import HouseContainer from '../components/houseContainer';


class HousesPage extends Component {
  componentDidMount() {
    let { allHouses } = this.props;
    if(!allHouses)
      this.props.getAllHouses();
  }
  render() {
    let { allHouses } = this.props;
    return (
      <Fragment>
        <h1>Harry Potter Houses Page</h1>
        {allHouses ? allHouses.map((item, index) => {
          return (
            <HouseContainer key={index}
                            {...item}
            />
          )
        })
        : null}
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

