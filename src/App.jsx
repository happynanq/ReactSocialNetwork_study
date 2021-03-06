import React from 'react';
import './App.css';
// import Nav from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import Setting from './components/Setting/Setting';
import Music from './components/Music/Music';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer.jsx';

const  App = (props)=> {
  // let data2= 12332132121212
  return (
      <div className="app-wrapper">
        <Header />
        <NavContainer navInfo={props.store.getState().navbarPage}/>
        {/* <Nav/> */}
        <div className="app-wrapper__content">
          
          {/* <Route path="/profile" component={Profile }/> */}
          <Route path="/profile" render={ () => <ProfileContainer  />}/>

          <Route path="/dialogs" render={ () => <DialogsContainer />} />

          <Route path="/users" render={()=> <UsersContainer/>} />

          
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>

          <Route path="/setting" component={Setting}/>
          {/* <Dialogs/> */}

          {/* <Profile/> */}

        </div>
      </div>
  );
}
// dialogs - 18 lesson


export default App;
