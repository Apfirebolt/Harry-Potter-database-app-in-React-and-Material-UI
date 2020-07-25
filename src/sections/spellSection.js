import React, { Component, Fragment } from 'react';
import SpellContainer from '../components/spellContainer';
import SearchFilterContainer from '../components/searchFilter';
import PaginationComponent from '../components/paginationComponent';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress, Container, Typography } from '@material-ui/core';



class SpellsSection extends Component {
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
    let { spellData } = this.props;
    let { pageNumbers, itemsPerPage, filteredData } = this.state;
    let newPageTotal = Math.ceil((filteredData && filteredData.length > 0) ? (filteredData.length / e.target.value) : (spellData.length / e.target.value));
    this.setState({
      itemsPerPage: e.target.value,
      pageNumbers: newPageTotal
    });
  }

  onChangeText(e) {
    let { spellData } = this.props;
    let { searchText, startIndex, itemsPerPage  } = this.state;
    let newSpellList = [];
    let newPageTotal = Math.ceil(spellData.length / itemsPerPage);
    if(e.target.value) {
      newSpellList = spellData.filter((item) => {
        return item.spell.indexOf(e.target.value) !== -1
      });
    }
    newPageTotal = Math.ceil(e.target.value ? newSpellList.length / itemsPerPage : spellData.length / itemsPerPage);
    this.setState({
      searchText: e.target.value,
      filteredData: newSpellList,
      pageNumbers: newPageTotal
    });
  }
  render() {
    let { spellData } = this.props;
    let { searchText, filteredData, pageNumbers, startIndex, itemsPerPage } = this.state;
    return (
      <Fragment>
        <SearchFilterContainer
          onChangeText={this.onChangeText}
          handleItemsChange={this.handleItemsChange}
          searchText={searchText}
          itemsPerPage={itemsPerPage}
        />
        {!searchText ? spellData.filter((item) => {
            return item.spell.indexOf(searchText) !== -1
          }).slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
            return (
              <Container key={index}>
                <SpellContainer key={index}
                                {...item}
                />
              </Container>
            )
          })
          :
          filteredData.filter((item) => {
            return item.spell.indexOf(searchText) !== -1
          }).slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
            return (
              <Container key={index}>
                <SpellContainer key={index}
                                    {...item}
                />
              </Container>
            )
          })}

        {pageNumbers > 0 ?
          <PaginationComponent
            pageTotal={pageNumbers}
            changePageNumber={this.changePageNumber}
          />
        :
          <Typography variant="h4" gutterBottom>
            No results were found for query string '{searchText}'.
          </Typography>
        }

      </Fragment>
    );
  }
}


export default SpellsSection;

