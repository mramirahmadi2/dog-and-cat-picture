//import { Link } from "react-router-dom";
import React from "react";
import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <nav>
//       <h1>My App</h1>
//       <div>
//         <Link to="/">
//           Cat Pictures
//         </Link>
//         <Link to="/RandomDogPicture">
//           Dog Pictures
//         </Link>
//       </div>
//     </nav>
//   );
// };

//export default Navbar;
const Navbar = () => {
    return ( 
       <nav className="navbar">
         <h1>Cat Or Dog</h1>
         <div className="links">
            <Link to="/">Cat</Link>
            <Link to="/RandomDogPicture" >Dog</Link>
            <Link to="/RandomDogPicture" >Chat</Link>
         </div>

       </nav>
     );
}
 
export default Navbar;