import React from 'react';
import { Link, withRouter} from 'react-router-dom';




class AlbumIndex extends React.Component {

constructor(props) {
  super(props);


}

  componentDidMount()
    {

    this.props.requestAlbums();
  }
  render(){
    const {albums} = this.props;
  //  ;
    if (albums === undefined) {
      return "Loading";
    }


    return (
      <div className="album-index-container">
        <ul className="album-spread">
          <li> <Link className="album-index-create" to="/albums/create">Create New Album</Link></li>
          {albums.filter(album => album.photos.length > 0).map(album => <li className="album-index-item" id={`${album.id}`} > <h6 className="album-data-thumb">{album.title} by {album.user.username}</h6><Link to={`/albums/${album.id}`}><img className="album-thumbnail" src={album.photos[0].image_url}/></Link></li>)}
        </ul>
      </div>
    );
  }
}

export default withRouter(AlbumIndex);

//style ={{backgroundImage: `url(${album.photos[0].image_url})`}}
