import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SpellContainer from '../components/spellContainer';
import * as actionCreators from '../store/info/infoActions';


class SpellsPage extends Component {
  componentDidMount() {
    let { allSpells } = this.props;
    if(!allSpells)
      this.props.getAllSpells();
  }
  render() {
    let { allSpells } = this.props;
    return (
      <Fragment>
        <h1>Harry Potter Spells Page</h1>
        {allSpells && allSpells.map((item, index) => {
          return (
            <SpellContainer key={index}
                            {...item}
            />
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

