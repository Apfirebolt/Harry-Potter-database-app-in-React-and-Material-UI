import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/info/infoActions';


class CharactersPage extends Component {
  render() {
    let { allCharacters } = this.props;
    return (
      <Fragment>
        <h1>Harry Potter Characters Page</h1>
        {allCharacters && allCharacters.map((item, index) => {
          return (
            <p key={index}>{item.name}</p>
          )
        })
        }
      </Fragment>
    );
  }

  componentDidMount() {
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

