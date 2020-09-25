import React, {Component} from 'react'
import {NavLink,Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircleButton from '../CircleButton/CircleButton'
// import {countNotesForFolder} from '../notes-helpers'
import NoteHelpersContext from '../NoteHelpersContext';
import './NoteListNav.css'

export default class NoteListNav extends Component {
    static contextType=NoteHelpersContext;
    
    render(){

        console.log(this.context);
    return (
        <div className='NoteListNav'>
            <ul className='NoteListNav__list'>
                {this.context.folders.map(folder =>
                    <li key={folder.id}>
                        <NavLink
                            className='NoteListNav__folder-link'
                            to={`/folder/${folder.id}`}
                        >
                            <span className='NoteListNav__num-notes'>
                                {this.context.countNotesForFolder(this.context.notes,folder.id)}
                            </span>
                            {folder.name}
                        </NavLink>
                        </li>
                )}
            </ul>
            <div className='NoteListNav__button-wrapper'>
                <CircleButton
                    tag={Link}
                    to='/add-folder'
                    type='button'
                    className='NoteListNav__add-folder-button'
                >
                    <FontAwesomeIcon icon='plus' />
                    <br />
                    Folder
                </CircleButton>
            </div>
        </div>
    )
}
}

NoteListNav.defaultProps={
    folders:[]
}