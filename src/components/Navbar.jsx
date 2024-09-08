import { useDispatch } from 'react-redux'
// import { decrement, increment, reset } from '../redux/counterSlice'
import { changeTheme } from '../redux/themeSlice'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Header = () => {
    const dispatch = useDispatch()
    const { current } = useSelector(state => state.theme)
    
  return (
    <div>
        {/* <div>
            <button onClick={() => dispatch(increment(10))}>+</button>
            <button onClick={() => dispatch(decrement(20))}>-</button>
            <button onClick={() => dispatch(reset())}>reset</button>
        </div> */}
        <nav className={`transition-all duration-300 p-4 shadow-md ${current === "light" ? 'bg-blue-600' : 'bg-black text-white'}`}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold">Course Registration</div>
                <ul className="flex space-x-6 items-center">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/courses" className="text-white hover:text-gray-300">
                            Courses
                        </Link>
                    </li>
                    <li>
                        <Link to="/register" className="text-white hover:text-gray-300">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-300">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <select onChange={(e) => dispatch(changeTheme(e.target.value))} className="block w-32 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700">
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        </select>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Header