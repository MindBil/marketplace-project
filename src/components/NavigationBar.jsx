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
  width: 48px;
  height: 48px;
  margin-left: 1rem;
`;

const NavigationBar = () => {
  return (
    <Header>
      <Link to={HOME_PATH}>
        <Logo
          src="https://seeklogo.com/images/F/facebook-marketplace-logo-46A976DABC-seeklogo.com.png"
          alt="logo"
        />
      </Link>
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
