import { useState } from 'react'
import Modal from "./Modal";
import './Book.css'

function Book({data}) {
  const [openModal,setOpenModal] = useState(false) //Modal starts as hidden

  function fullData () { //event func for book card - show modal
    setOpenModal(prev=>true)
  }

  function closeModal () {
    setOpenModal(prev=>false)
  }

  return (
    <>
    {openModal && <div className='themodal'> <Modal data={data} func={closeModal}/> </div> }
    <div className='bookcard' onClick={fullData}>
        <h3>{data.title}</h3>
        <img src={data.coverImage} alt="" className='image'/>
    </div> 
    </>
          
  )
}
export default Book