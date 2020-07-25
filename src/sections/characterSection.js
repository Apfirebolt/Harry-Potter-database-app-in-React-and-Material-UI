import React, { Component, Fragment } from 'react';
import CharacterContainer from '../components/characterContainer';
import SearchFilterContainer from '../components/searchFilter';
import PaginationComponent from '../components/paginationComponent';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress, Container } from '@material-ui/core';



class CharactersSection extends Component {
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
    console.log('Change page called : ', e.target.value, newStartIndex);

    this.setState({
      startIndex: newStartIndex
    })
  }

  handleItemsChange(e) {
    let { characterData } = this.props;
    let { pageNumbers, itemsPerPage, filteredData } = this.state;
    let newPageTotal = Math.ceil((filteredData && filteredData.length > 0) ? (filteredData.length / e.target.value) : (characterData.length / e.target.value));
    console.log('Items changed ', e.target.value, filteredData && filteredData.length);
    this.setState({
      itemsPerPage: e.target.value,
      pageNumbers: newPageTotal
    });
  }

  onChangeText(e) {
    let { characterData } = this.props;
    let { searchText, startIndex, itemsPerPage  } = this.state;
    let newCharacterList = [];
    let newPageTotal = Math.ceil(characterData.length / itemsPerPage);
    if(e.target.value) {
      newCharacterList = characterData.filter((item) => {
        return item.name.indexOf(e.target.value) !== -1
      });
    }
    newPageTotal = Math.ceil(e.target.value ? newCharacterList.length / itemsPerPage : characterData.length / itemsPerPage);
    this.setState({
      searchText: e.target.value,
      filteredData: newCharacterList,
      pageNumbers: newPageTotal
    });
    console.log('Text changed : ', characterData);
  }
  render() {
    let { characterData } = this.props;
    let { searchText, filteredData, pageNumbers, startIndex, itemsPerPage } = this.state;
    return (
      <Fragment>
        <SearchFilterContainer
          onChangeText={this.onChangeText}
          handleItemsChange={this.handleItemsChange}
          searchText={searchText}
          itemsPerPage={itemsPerPage}
        />
        {!searchText ? characterData.filter((item) => {
          return item.name.indexOf(searchText) !== -1
        }).slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
          return (
            <Container key={index}>
              <CharacterContainer key={index}
                                  {...item}
              />
            </Container>
          )
        })
        :
          filteredData.filter((item) => {
            return item.name.indexOf(searchText) !== -1
          }).slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
            return (
              <Container key={index}>
                <CharacterContainer key={index}
                                    {...item}
                />
              </Container>
            )
          })}

        <PaginationComponent
          pageTotal={pageNumbers}
          changePageNumber={this.changePageNumber}
        />

      </Fragment>
    );
  }
}


export default CharactersSection;

