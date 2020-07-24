import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CharacterContainer from '../components/characterContainer';
import SearchFilterContainer from '../components/searchFilter';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress, Container } from '@material-ui/core';



class CharactersPage extends Component {
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
  render() {
    let { allCharacters } = this.props;
    let { searchText } = this.state;
    return (
      <Fragment>
        <h1>Harry Potter Characters</h1>
        <SearchFilterContainer
          onChangeText={this.onChangeText}
        />
        {allCharacters ? allCharacters.filter((item) => {
          return item.name.indexOf(searchText) !== -1
        }).map((item, index) => {
          return (
            <Container key={index}>
              <CharacterContainer key={index}
                                  {...item}
              />
            </Container>
          )
        })
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

