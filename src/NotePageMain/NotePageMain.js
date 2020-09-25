import React, {Component} from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NoteHelpersContext from '../NoteHelpersContext';

export default class NotePageMain extends Component{
    static contextType=NoteHelpersContext;
    render(){
    return(
        <section className='NotePageMain'>
            <Note
                id={this.context.notes.notes.id}
                name={this.context.notes.notes.name}
                modified={this.context.notes.notes.modified}
            />
            <div className="NotePageMain__content">
                {this.notes.notes.content.split(/\n \r|\n/).map((para,i) =>
                    <p key={i}>{para}</p>
                )}
            </div>
        </section>
    )
}
}
NotePageMain.defaultProps = {
    note:{
        content:'',
    }
}