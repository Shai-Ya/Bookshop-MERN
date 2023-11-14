import './Nav.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Nav() {
  return (
    <nav className='nav'>
      <div className='selectors'>
          <select name="" id="" className='category'>
            <option value="allBooks">Category:</option>
            <option value="fiction">Fiction</option>
            <option value="nonFiction">Non-Fiction</option>
          </select>
          <select name="" id="" className='sort'>
            <option value="all">Sort:</option>
            <option value="priceDown">Price - High to Low</option>
            <option value="priceUp">Price - Low to High</option>
          </select>
      </div>
      <div className='searchbox'>
          <label htmlFor="search"></label>
          <input type="text" name="" id="search" />
          <button>Search</button>
      </div>
      <ShoppingCartIcon className='carticon'/>
    </nav>
  )
}
export default Nav