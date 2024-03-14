import { Link } from "react-router-dom"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="smm:absolute smm:w-full smm:bg-gradient-to-b smm:from-black smm:to-transparent smm:top-0 smm:left-0 z-[2] h-[90px] max-[700px]:h-[75px]" >
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="ml-[3%] leading-[90px] max-[700px]:leading-[75px] max-[440px]:leading-[45px]" to="/">
            <Logo></Logo>
          </Link>
          
          {/* <div className="navbar">
            <form className="d-flex" role="search">
              <select className="bg-[black] opacity-40 border-[1px] border-[#aaa] border-solid text-white text-[0.875rem] pl-4 pr-4 mr-5">
                <option>English</option>
                <option>Turkish </option>
              </select>
              <button className="btn btn-danger">Sign In</button>
            </form>
          </div> */}
        </div>
      </nav>
    </header>
    
  )
}

export default Header