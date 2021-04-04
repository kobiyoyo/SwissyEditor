// React
import React from 'react';

// Rsuite
import {
  Navbar,
  Nav,
  Icon,
} from 'rsuite';
// import Nav from '@rsuite/responsive-nav';

// Router
import { NavLink } from 'react-router-dom';

// Image
import logo from '../../assets/images/logo.svg';

// Css
const NavBar: React.FC = () => {
  const button = {
    backgroundColor: 'black',
    width: '7rem',
    textAlign: 'center' as const,
  };
  const minStyles = {
    base: {
      color: '#fff',
    },
    navStyles: {
      padding: '2rem',
    },

    centerButton: {
      ...button,
    },
    rightButton: {
      ...button,
      borderBottomRightRadius: '5rem',
      borderTopRightRadius: '5rem',
      marginLeft: '1rem',
    },
    leftButton: {
      ...button,
      borderBottomLeftRadius: '5rem',
      borderTopLeftRadius: '5rem',
      marginRight: '1rem',
    },
    navLink: {
      color: 'white',
    },
    navButton: {
      ...button,
      borderRadius: '3rem',
      width: '10rem',
      marginRight: '1rem',
      marginLeft: '1rem',
    },
    navLogo: {
      width: '19rem',
    },
    displayNoMenu: {
      display: 'none',
    },

    displayMenu: {

      display: 'flex',
      justifyContent: 'space-evenly',
      flexDirection: 'column',
      left: '-249px',
      height: '26rem',
      width: '35rem',
      alignItems: 'center',

    },

  };
  const maxStyles = {
    ...minStyles,
    aside: {
      flex: '1 auto',
      background: 'blue',
      order: 2,
    },

    displayNoMenu: {

      display: 'block',

    },

  };

  const styles = function () {
    if (window.innerWidth < 800) {
      return minStyles;
    }
    return maxStyles;
  };

  return (
    <>

      <Navbar style={styles().navStyles}>
        <Navbar.Header>
          <a href="/" className="navbar-brand logo"><img style={styles().navLogo} src={logo} alt="logo" /></a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item style={styles().leftButton}><NavLink style={styles().navLink} to="/"><Icon icon="edit" /></NavLink></Nav.Item>
            <Nav.Item style={styles().centerButton}><NavLink style={styles().navLink} to="/"><Icon icon="eye" /></NavLink></Nav.Item>
            <Nav.Item style={styles().rightButton}><NavLink style={styles().navLink} to="/"><Icon icon="plus" /></NavLink></Nav.Item>
          </Nav>
          <Nav pullRight style={styles().displayNoMenu}>
            <Nav.Item eventKey="B" style={styles().navButton}><NavLink style={styles().navLink} to="/">Home</NavLink></Nav.Item>
            <Nav.Item eventKey="B" style={styles().navButton}><NavLink style={styles().navLink} to="/">Sign in</NavLink></Nav.Item>
            <Nav.Item eventKey="E" style={styles().navButton}><NavLink style={styles().navLink} to="/files">Files</NavLink></Nav.Item>
            <Nav.Item eventKey="C" style={styles().navButton} icon={<Icon icon="avatar" />}><NavLink style={styles().navLink} to="/">Online</NavLink></Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>

    </>
  );
};

export default NavBar;
