import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SpellContainer from '../components/spellContainer';
import SearchFilterContainer from '../components/searchFilter';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress, Container } from '@material-ui/core';

class SpellsPage extends Component {
  constructor() {
    super();
    this.state = {
      searchText: ''
    }

    this.onChangeText = this.onChangeText.bind(this);
  }
  onChangeText(e) {
    this.setState({
      searchText: e.target.value
    })
  }

  componentDidMount() {
    let { allSpells } = this.props;
    if(!allSpells)
      this.props.getAllSpells();
  }
  render() {
    let { allSpells } = this.props;
    let { searchText } = this.state;
    return (
      <Fragment>
        <h1>Harry Potter Spells</h1>
        <SearchFilterContainer onChangeText={this.onChangeText} />
        {allSpells ? allSpells.filter((item) => {
          return item.spell.indexOf(searchText) !== -1
        }).map((item, index) => {
          return (
            <Container key={index}>
              <SpellContainer key={index}
                              {...item}
              />
            </Container>
          )
        })
        :  <CircularProgress color="secondary" size="200px" style={{ textAlign: "center" }}/>}
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

