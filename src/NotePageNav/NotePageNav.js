import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CircleButton from '../CircleButton/CircleButton';
import './NotePageNav.css';
import NoteHelpersContext from '../NoteHelpersContext';

export default class NotePageNav extends Component{
    static contextType=NoteHelpersContext;
    render(){
    return(
        <div className='NotePageNav'>
            <CircleButton
                tag='button'
                role='link'
                // onClick={() => this.context.goBack()}
                className="NotePageNav__back-button"
            >
                <FontAwesomeIcon icon='chevron-left' />
                <br />
                Back
            </CircleButton>
            {this.context.folder && (
                <h3 className="NotePageNav__folder-name">
                    {this.context.folder.folder.name}
                </h3>
            )}
        </div>
    )
}
}

NotePageNav.defaultthisProps = {
    history:{
        goBack:() => {}
    }
}