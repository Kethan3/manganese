
import { NavLink, useLocation } from "react-router";
import "./NavigationBar.css"

const NavigationBar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
  return (
    <div className="navigation-bar">
     <nav>
     <ul className="navigation-bar-links">
          <li><NavLink to="/product" className={currentPath == "/product" ? "navigation-link-selected" : ""}>Product</NavLink></li>
          <li><NavLink to="/developers" className={currentPath == "/developers" ? "navigation-link-selected" : ""}>Developers</NavLink></li>
          <li><NavLink to="/enterprise" className={currentPath == "/enterprise" ? "navigation-link-selected" : ""}>Enterprise</NavLink></li>
          <li><NavLink to="/pricing" className={currentPath == "/pricing" ? "navigation-link-selected" : ""}>Pricing</NavLink></li>
      </ul>
     </nav>
    </div>
   )
}

export default NavigationBar;