import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress } from '@material-ui/core';
import CharacterSection from '../sections/characterSection';


class CharactersPage extends Component {

  render() {
    let { allCharacters } = this.props;
    return (
      <Fragment>
        <h1>Harry Potter Characters</h1>
        {allCharacters ?
          <CharacterSection
            characterData={allCharacters}
          />

        : <CircularProgress color="secondary" size="200px" style={{ textAlign: "center" }}/>}
      </Fragment>
    );
  }

  componentDidMount() {
    let { allCharacters } = this.props;
    if(!allCharacters)
      this.props.getAllCharacters();
  }
}

const mapStateToProps = state => {
  return {
    allCharacters: state.info.characters_data,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCharacters: () => {
      dispatch(actionCreators.get_all_characters_action());
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);

