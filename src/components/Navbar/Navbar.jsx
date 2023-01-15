import logo from "../../images/LogoMakr-65SwHJ.png";
import { Button, InputSpace, Img_Logo, Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>

        <Img_Logo src={logo} alt="Logo Joestar-news" />
        
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
