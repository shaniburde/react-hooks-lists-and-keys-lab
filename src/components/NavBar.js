import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  const anchors = links.map((link) => (
    <a key={link} href={'#'+link}>{link}</a>
  ));

  return <nav>{anchors}</nav>
}

export default NavBar;
