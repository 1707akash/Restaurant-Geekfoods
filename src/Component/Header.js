



import Button from "./Button";
import './Header.css'

function Header(){
    return(
        <>
        <div className="navbar">
        <div className="logo-box">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
            <span style={{fontSize:'1.5rem', fontWeight:'500'}}>GeekFoods</span>
        </div>

        <div className= 'nav-links'>
            <div><span style={{color:'#1c4ed8'}} className="links">Home</span></div>
            <div><span className="links" >Quote</span></div>
            <div><span className="links">Restaurant</span></div>
            <div><span className="links">Food</span></div>
            <div><span className="links">Contacts</span></div>
            </div>

        <div>
            <Button borderRadius={"6px"} fontColor={"#FFF"} backgroundColor={"#1c4ed8"} padding={"0.6rem 1rem"} >Get Started</Button>
        </div>
        </div>
            
        </>
    );
}

export default Header;