import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css';
import dummyStore from './dummy-store';
import NoteListNav from './NoteListNav/NoteListNav';
import NotePageNav from './NotePageNav/NotePageNav';
import NoteListMain from './NoteListMain/NoteListMain';
import NotePageMain from './NotePageMain/NotePageMain';
import NoteHelpersContext from './NoteHelpersContext';
// import {getNotesForFolder, findNote, findFolder} from './notes-helpers';



class App  extends Component {

  state ={
    notes:[],
    folders:[]
  };

  componentDidMount () {
    setTimeout(() => this.setState(dummyStore), 600);
  }

  // renderNavRoutes() {
  //   // const {notes, folders} = this.state;
  //   const contextValue = {
  //     notes:this.state,
  //     folders:this.state,

  //   }

  //   return(
  //     <>
  //       <NoteHelpersContext value={contextValue}>
  //       {['/','/folder/:folderId'].map(path => (
  //           <Route
  //               exact
  //               key={path}
  //               path={path}
  //               component={NoteListNav}
  //           />
  //       ))}
  //       <Route
  //          path="/note/:noteId"
  //          component={NotePageNav}
  //       />
  //       </NoteHelpersContext>
  //       <Route path="/add-folder" component={NotePageNav}/>
  //       <Route path="/add-note" component={NotePageNav}/>
  //     </>
  //   );
  // }

  // renderMainRoutes() {
  //     const {notes} = this.state;

  //     return(
  //         <>
              // {['/','/folder/:folderId'].map(path => (
              //     <Route
              //         exact
              //         key={path}
              //         path={path}
              //         render={routeProps => {
              //             const {folderId} = routeProps.match.params;
              //             const notesForFolder = getNotesForFolder(
              //                 notes,
              //                 folderId
              //             );
              //             return (
              //                 <NoteListMain
              //                     {...routeProps}
              //                     notes={notesForFolder}
              //                 />
              //             );
              //         }}
              //     />
              // ))}
              // <Route
              //     path="/note/:noteId"
              //     render={routeProps => {
              //         const {noteId} = routeProps.match.params;
              //         const note = findNote(notes,noteId);
              //         return <NotePageMain {...routeProps} note={note}/>
              //     }}
              //   />
  //           </>
  //     );
  // }
  findFolder = (folders=[], folderId) =>
  folders.find(folder => folder.id === folderId)

findNote = (notes=[], noteId) =>
  notes.find(note => note.id === noteId)

getNotesForFolder = (notes=[], folderId) => (
  (!folderId)
    ? notes
    : notes.filter(note => note.folderId === folderId)
)

countNotesForFolder = (notes=[], folderId) =>
  notes.filter(note => note.folderId === folderId).length



  render(){
    // console.log(this.state);
    const contextValue = {
      notes:this.state,
      folders:this.state,
      findFolder:this.findFolder,
      findNote:this.findNote,
      getNotesForFolder:this.getNotesForFolder,
    }

    // console.log(contextValue);
      return(
          <div className="App">
            <NoteHelpersContext.Provider value={contextValue}>
              <nav className="App__nav">
                {['/','/folder/:folderId'].map(path => (
                  <Route
                    exact
                    key={path}
                    path={path}
                    component={NoteListNav}
                  />
                ))}
                <Route
                  path="/note/:noteId"
                  component={NotePageNav}
                />
              </nav>  
            </NoteHelpersContext.Provider>
            <Route path="/add-folder" component={NotePageNav}/>
            <Route path="/add-note" component={NotePageNav}/>
            
              <header className="App__header">
                <h1>
                  <Link to="/">NoteFul</Link>{' '}
                  <FontAwesomeIcon icon="check-double"/>
                </h1>
              </header>
              <NoteHelpersContext.Provider value={contextValue}>
              <main className="App__main">
              {['/','/folder/:folderId'].map(path => (
                  <Route
                      exact
                      key={path}
                      path={path}
                      component={NoteListMain}
                  />
              ))}
              <Route
                  path="/note/:noteId"
                  component={NotePageMain}/>
              </main>
              </NoteHelpersContext.Provider>
          </div>
      );
  }
}

  export default App;