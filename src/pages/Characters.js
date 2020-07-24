import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CharacterContainer from '../components/characterContainer';
import SearchFilterContainer from '../components/searchFilter';
import PaginationComponent from '../components/paginationComponent';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress, Container } from '@material-ui/core';



class CharactersPage extends Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      startIndex: 0,
      pageNumbers: 1,
      itemsPerPage: 10,
      isLoading: false,
      filteredData: null
    }

    this.changePageNumber = this.changePageNumber.bind(this);
    this.handleItemsChange = this.handleItemsChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  changePageNumber(e) {
    let { startIndex, itemsPerPage } = this.state;
    let newStartIndex = (e.target.value - 1) * itemsPerPage;
    this.setState({
      startIndex: newStartIndex
    })
  }

  handleItemsChange(e) {
    let { allCharacters } = this.props;
    let { pageNumbers, itemsPerPage, filteredData } = this.state;
    if(allCharacters) {
      let newPageTotal = Math.ceil(filteredData.length ? filteredData.length : allCharacters.length / e.target.value);
      this.setState({
        itemsPerPage: e.target.value,
        pageNumbers: newPageTotal
      });
    }
  }

  onChangeText(e) {
    let { allCharacters } = this.props;
    let { searchText, startIndex, pageNumbers, itemsPerPage  } = this.state;
    let newCharacterList = [];
    let newPageTotal = 1
    if(allCharacters) {
      newCharacterList = allCharacters.filter((item) => {
        return item.name.indexOf(e.target.value) !== -1
      });
      newPageTotal = Math.ceil(newCharacterList.length / itemsPerPage);
    };

    this.setState({
      searchText: e.target.value,
      filteredData: newCharacterList,
      pageNumbers: newPageTotal
    });
  }

  render() {
    let { allCharacters } = this.props;
    let { searchText, filteredData, pageNumbers, startIndex, itemsPerPage } = this.state;
    return (
      <Fragment>
        <h1>Harry Potter Characters</h1>
        <SearchFilterContainer
          onChangeText={this.onChangeText}
          handleItemsChange={this.handleItemsChange}
        />
        {filteredData && filteredData.slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
          return (
            <Container key={index}>
              <CharacterContainer key={index}
                                  {...item}
              />
            </Container>
          )
        })
        }

        {!filteredData && allCharacters && allCharacters.slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
          return (
            <Container key={index}>
              <CharacterContainer key={index}
                                  {...item}
              />
            </Container>
          )
        })
        }

        {!allCharacters &&
          <CircularProgress color="secondary" size="200px" style={{ textAlign: "center" }}/>
        }

        {allCharacters &&
        <PaginationComponent
          pageTotal={Math.ceil(allCharacters.length / itemsPerPage)}
          changePageNumber={this.changePageNumber}
        />

        }
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

