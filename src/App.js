import React, {useState} from 'react'
import Header from './Header';
import Footer from './Footer';
import CreateNote from './CreateNote';
import Note from './Note';



const App = () => {
  const [addItem, setAddItem] = useState([]);
  
  const addNote = (note) => {
     setAddItem((prevData)=> {
        return [...prevData, note]
     })
  }

  const deleteNote = (id) => {
    setAddItem((data) => {
      data.filter((current, index)=> {
        return index!== id
      })
    })
  }

  return (
    <>
      <Header />
      <CreateNote passNote={addNote}/>
      { 
          addItem.map((item, index)=> {
            return <Note deleteNote={deleteNote} key={index} id={index} title={item.title} content={item.content}/>
          })
      }
      <Footer />
    </>
  )
}


export default App;
