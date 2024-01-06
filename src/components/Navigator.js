import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
const Navigator = () => {
    const cartProductCount = useSelector((state)=>{
        return state.cart;
    })
  return (
    <>
    <Navbar bg="light" data-bs-theme="light">
        <Container>
        <Link to="/">
        <Navbar.Brand>Redux-Toolkit Project</Navbar.Brand>
        </Link>
        
        <Nav className="me-auto">
        <Link to='/' >
        <Nav.Link href="/">Products</Nav.Link>
        </Link>
        <Link to='/cart' >
        <Nav.Link href="/cart" className="justify-content-end" >Cart - {cartProductCount.length}</Nav.Link>
        </Link>
            
        </Nav>
        </Container>
    </Navbar> 

    
    </>
  )
}

export default Navigator;



// import React from 'react'
// import { Link } from 'react-router-dom';
// // import Container from 'react-bootstrap/Container';
// // import Nav from 'react-bootstrap/Nav';
// // import Navbar from 'react-bootstrap/Navbar';

// const Navigation = () => {
//   return (

//   )
// }

// export default Navigation;