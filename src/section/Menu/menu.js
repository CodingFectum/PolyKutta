import React from "react";

import Container from '@material-ui/core/Container'

import MobileMenu from '../../components/MobileMenu'
import DesktopMenu from '../../components/DesktopMenu'

const Menu = () => {
  return (
    <div className="py-2" style={{ backgroundColor: '#f7ecc9',borderBottom: '3px solid #222222'}}>
      <Container maxWidth='xl'>
          <div className="d-none d-md-block">
              <DesktopMenu />
          </div>
          <div className="d-md-none">
              <MobileMenu />
          </div>
      </Container>
    </div>
  );
}

export default Menu;
