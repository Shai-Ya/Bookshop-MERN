import { useState } from 'react';
import './Modal.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Modal({data,func}) {
    const [tip,setTip] = useState(false)

    function tooltipOn () { //event func for cart-icon mouseEnter
        setTip(prev=>true)
    }

    function tooltipOff () {
        setTip(prev=>false)
    }
  return (
    <div className="modal">
        <span onClick={func} className='close'>X</span>
        <h3>{data.title} / {data.authorFull} </h3>
        <img src={data.coverImage} alt="" className='modalimage'/>
        <p>Year Published: {data.publishYear} <br /> Pages: {data.pages} <br /> Price: ${data.price}</p>
        <AddShoppingCartIcon className='shopIcon' onMouseEnter={tooltipOn} onMouseLeave={tooltipOff} />
        <span className={`tooltip ${tip ? 'vis' :''}`}>Add to cart</span>
    </div>
  )
}
export default Modal