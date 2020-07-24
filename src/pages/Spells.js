import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import SpellContainer from '../components/spellContainer';
import SearchFilterContainer from '../components/searchFilter';
import PaginationComponent from '../components/paginationComponent';
import * as actionCreators from '../store/info/infoActions';
import { CircularProgress, Container } from '@material-ui/core';

class SpellsPage extends Component {
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
    });
  }

  handleItemsChange(e) {
    let { allSpells } = this.props;
    let { pageNumbers, itemsPerPage, filteredData } = this.state;
    if(allSpells) {
      let newPageTotal = Math.ceil(filteredData.length / e.target.value);
      this.setState({
        itemsPerPage: e.target.value,
        pageNumbers: newPageTotal
      });
    }
  }

  onChangeText(e) {
    let { allSpells } = this.props;
    let { searchText, itemsPerPage } = this.state;
    let newSpellList = [];
    let newPageTotal = 1
    if(allSpells) {
      newSpellList = allSpells.filter((item) => {
        return item.spell.indexOf(e.target.value) !== -1
      });
      newPageTotal = Math.ceil(newSpellList.length / itemsPerPage);
    }
    this.setState({
      searchText: e.target.value,
      filteredData: newSpellList,
      pageNumbers: newPageTotal
    });
  }

  componentDidUpdate(prevState, nextProps) {

  }

  componentDidMount() {
    let { allSpells } = this.props;
    if(!allSpells)
      this.props.getAllSpells();
  }
  render() {
    let { allSpells } = this.props;
    let { searchText, filteredData, pageNumbers, startIndex, itemsPerPage } = this.state;
    return (
      <Fragment>
        <h1>Harry Potter Spells</h1>
        <SearchFilterContainer
          onChangeText={this.onChangeText}
          handleItemsChange={this.handleItemsChange}
        />
        {filteredData ? filteredData.slice(startIndex, startIndex + itemsPerPage).map((item, index) => {
          return (
            <Container key={index}>
              <SpellContainer key={index}
                              {...item}
              />
            </Container>
          )
        })
        :  <CircularProgress color="secondary" size="200px" style={{ textAlign: "center" }}/>}
        <PaginationComponent
          pageTotal={pageNumbers}
          changePageNumber={this.changePageNumber}
        />
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

