import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress } from '@material-ui/core';
import SpellSection from '../sections/spellSection';


class SpellsPage extends Component {

  render() {
    let { allSpells } = this.props;
    return (
      <Fragment>
        <h1>Harry Potter Spells</h1>
        {allSpells ?
          <SpellSection
            spellData={allSpells}
          />

          : <CircularProgress color="secondary" size="200px" style={{ textAlign: "center" }}/>}
      </Fragment>
    );
  }

  componentDidMount() {
    let { allSpells } = this.props;
    if(!allSpells)
      this.props.getAllSpells();
  }
}

const mapStateToProps = state => {
  return {
    allSpells: state.info.spells_data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllSpells: () => {
      dispatch(actionCreators.get_all_spells_action());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SpellsPage);
