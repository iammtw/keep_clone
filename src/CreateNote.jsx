import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add'

const CreateNote = (props) => {

    const [expand, setexpand] = useState(false)

    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    const inputEvent = (e) => {
        const {name,value} = e.target;
        setNote((prevData)=> {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const addEvent = () => {
        props.passNote(note)
        setNote({
            title: '',
            content: '',
        })
    }

    return (
        <>
        <div className="main_note">
            <form action="">
                
                {
                    expand? <input type="text" placeholder="title" name='Title' value={note.title} onChange={inputEvent} autoComplete='off' /> : ''
                }

                <textarea name="" onClick={()=> setexpand(true)} onDoubleClick={()=> setexpand(false)} placeholder='Write a note' name='content' cols="" rows="" onChange={inputEvent}>
                {note.content}
                </textarea>
                {
                    expand ? <Button onClick={addEvent}>
                    <AddIcon className='plus_sign'/>
                </Button> : ''
                }
            </form>
        </div>
            
        </>
    )
}

export default CreateNote
