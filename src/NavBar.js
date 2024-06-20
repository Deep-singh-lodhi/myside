// import { ReactComponent as Brand } from './logo.svg'

// const Navbar = () => {
//   return (
//     <nav>
//       <div>
//         <Brand />
//       </div>
//       <div>
//         <ul>
//           <li>Home</li>
//           <li>Blog</li>
//           <li>Projects</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
// import { ReactComponent as Brand } from './logo.svg'

// const Navbar = () => {
//   return (
//     <nav>
//       <div>
//         <Brand />
//       </div>
//       <div>
//         <ul>
//           <li>
//             <a href="/">Home</a>
//           </li>
//           <li>
//             <a href="/blog">Blog</a>
//           </li>
//           <li>
//             <a href="/projects">Projects</a>
//           </li>
//           <li>
//             <a href="/about">About</a>
//           </li>
//           <li>
//             <a href="/contact">Contact</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   )
// }

// export default Navbar
import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              
            <NavLink to="/Jewelery">Jewelery</NavLink>
              
            </li>
            <li>
              <NavLink to="/Electronics">Electronics</NavLink>
            </li>
            
            <li>
      
            <NavLink to="/Women">Women's wears</NavLink>
        </li>
             <li>
              <NavLink to="/mens">Men's wears</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar