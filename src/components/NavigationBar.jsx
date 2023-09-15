import { Link } from "react-router-dom";
import styled from "styled-components";
import { HOME_PATH, topNavigationItems } from "../routes/const";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid lightgray;
`;

const StyledLink = styled(Link)`
  margin-left: 1rem;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-left: 1rem;
`;

const NavigationBar = () => {
  return (
    <Header>
      <Link to={HOME_PATH}>
        <Logo
          src="https://ar.happyvalentinesday2020.online/pics/static.vecteezy.com/system/resources/previews/000/588/267/original/retro-car-logo-template-design-vintage-logo-style-vector.jpg"
          alt="logo"
        />
      </Link>
      <h1>AUTORETRO</h1>
      <nav>
        {topNavigationItems.map((navItem) => (
          <StyledLink key={navItem.path} to={navItem.path}>
            {navItem.title}
          </StyledLink>
        ))}
      </nav>
    </Header>
  );
};

export default NavigationBar;
