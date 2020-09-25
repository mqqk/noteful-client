import React, {Component} from 'react'
import Note from '../Note/Note'
import './NotePageMain.css'
import NoteHelpersContext from '../NoteHelpersContext';

export default class NotePageMain extends Component{
    static contextType=NoteHelpersContext;
    render(){
        console.log(this.context.notes)
    return(
        <section className='NotePageMain'>
            <Note
                id={this.context.notes.id}
                name={this.context.notes.name}
                modified={this.context.notes.modified}
            />
            <div className="NotePageMain__content">
                {/* {this.context.notes.content.split(/\n \r|\n/).map((para,i) =>
                    <p key={i}>{para}</p>
                )} */}
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