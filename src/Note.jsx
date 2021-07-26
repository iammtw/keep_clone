import React from 'react'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const Note = (props) => {

    const deleteItem = () => {
        props.deleteNote(props.id);
    }

    return (
        <div className='note'>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className='btn' onClick={deleteItem} >
                <DeleteOutlineIcon className='deleteIcon' />
            </button>
        </div>
    )
}

export default Note
