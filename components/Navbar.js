import classes from './Navbar.module.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsPlusSquare} from 'react-icons/bs';

const Navbar = () => {
    return(
        <div className={classes.Navbar}>
           <div className={classes.left}>
              <img src="/logo.png"/>Explore
           </div>
           <div className={classes.right}>
           <div>
              <AiOutlineSearch className="search" />
              <input placeholder="Search" />
              </div>
              <button> <BsPlusSquare/> Create</button>
              <img src="https://i.pinimg.com/736x/0a/53/c3/0a53c3bbe2f56a1ddac34ea04a26be98.jpg" />
           </div>
        </div>
    )
}
export default Navbar;