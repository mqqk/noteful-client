import React from 'react';

const NoteHelpersContext = React.createContext({
    folders:[],
    notes:[],
    findFolder:() =>{},
    findNote:() => {},
    getNotesForFolder:() => {},
    countNotesForeFolder:() => {},

    })

export default NoteHelpersContext;