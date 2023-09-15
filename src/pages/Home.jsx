import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAds } from "../api/ads";
import Ad from "../components/Ad";

const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
`;

const StyledAd = styled.div`
  margin-bottom: 1rem;
`;

const Home = () => {
  const [ads, setAds] = useState([]);

  console.log(ads);

  useEffect(() => {
    fetchAds()
      .then((response) => setAds(response))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container>
      {ads.map((ad) => (
        <StyledAd key={ad.id}>
          <Ad ad={ad} />
        </StyledAd>
      ))}
    </Container>
  );
};

export default Home;
