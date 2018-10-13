import React from 'react';
 import LoginContainer from './login_container';
 import SignupContainer from './signup_container';
import { Route, Redirect, Switch, Link,HashRouter } from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/auth_util';
import Splash from './splash';
import PhotoUploadContainer from './photo_upload_container';
import OfflineHeaderContainer from './offline_header_container';
import OnlineHeaderContainer from './online_header_container';
import UserProfileContainer from './user_profile_container';
import UploadHeaderContainer from './upload_header_container';
import PhotoShowContainer from './photo_show_container';
import PhotosIndexContainer from './photos_index_container';
import AlbumShowContainer from './album_show_container';
import HomeNav from './home_nav';


const Create = () => (
  <div>
    <UploadHeaderContainer />
    <PhotoUploadContainer />
  </div>
);

const Show = () => (
  <div>
    <OnlineHeaderContainer />
    <PhotoShowContainer />
  </div>
);

const Index = () => (
  <div>
    <OnlineHeaderContainer />
    <HomeNav />
    <PhotosIndexContainer />
  </div>
);

const AlbumPage = () => (
  <div>
    <OnlineHeaderContainer />
    <AlbumShowContainer />
  </div>
);

const App = () => (
  <div>

    <AuthRoute exact path="/" component={OfflineHeaderContainer} />
    <AuthRoute exact path="/signup" component={OfflineHeaderContainer} />
    <AuthRoute exact path="/login" component={OfflineHeaderContainer} />
    <AuthRoute path="/" component={Splash} />
    <Route exact path="/home" component={Index}/>
    <Switch>
      <ProtectedRoute exact path="/photos/create" component={Create} />
      <Route path="/photos/:photoID" component={Show} />
      <Route path="/albums/:albumID" component={AlbumPage} />
    </Switch>
    <Route exact path="/users/:userID" component={UserProfileContainer} />
  </div>
);

export default App;
// <AuthRoute path="/login" component={LoginContainer} />
// <AuthRoute path="/signup" component={SignupContainer} />
// <ProtectedRoute /> use this for logout and oth
//
// <Route  exact path="/home" component={OnlineHeaderContainer} />
// <Route exact path="/home" component={HomeNav} />
// <Route exact path="/home" component={PhotosIndexContainer}/>
