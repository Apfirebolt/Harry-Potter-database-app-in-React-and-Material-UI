import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/info/infoActions';


class SpellsPage extends Component {
  componentDidMount() {
    this.props.getAllSpells();
  }
  render() {
    let { allSpells } = this.props;
    return (
      <Fragment>
        <h1>Harry Potter Spells Page</h1>
        {allSpells && allSpells.map((item, index) => {
          return (
            <p key={index}>{item.spell}</p>
          )
        })
        }
      </Fragment>
    );
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

