import {useState} from 'react';
import {ImMenu} from 'react-icons/im'


const NavbarResponsive = () => {

    const [menu,  setMenu] = useState(false);

 const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="h-12 z-50 bg-white w-full fixed lg:hidden">
<ImMenu size="2em"  onClick={handleClick} />
{menu ?
<nav className="absolute -mt-8 flex w-64 h-screen bg-gray-300">
<ul>
	 <span className="ml-60" onClick={handleClick} >X</span>
   <a href="#about"><li>ABOUT</li></a>
   <a href="#services"><li>SERVICES</li></a>
   <a href="#rooms"><li>OUR ROOMS</li></a>
	</ul>
</nav>
        :
        <></>
      }
</div>	
  )
}

export default NavbarResponsive