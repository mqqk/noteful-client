import React from 'react'
import NotePageNav from '../NotePageNav/NotePageNav'
import './NotefulForm.css'

export default function NotefulForm(props) {
    const {className, ...otherProps} = props
    return (
        <form
            className={['Noteful-form',className].join(' ')}
            action='#'
            {...otherProps}
        />
    )
}