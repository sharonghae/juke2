
import React from 'react';
import {connect} from 'react-redux';
import Albums from './Albums.js'

const mapStateToProps = function ({ albums }, ownProps) {
  return { albums };
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    // note that I'm using enhanced object method notation
    loadAlbums (albums) {
      dispatch({ type: 'RECEIVE_ALBUMS_FROM_SERVER', albums: albums }); // hm, could we shorten this, too?
    }
  }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Albums);

//export default AlbumsContainer;
//where to export this??