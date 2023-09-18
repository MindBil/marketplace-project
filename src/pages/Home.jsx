import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fetchAds } from "../api/ads";
import Ad from "../components/Ad";
import Button from "../components/Button";
import { NEW_AD_PATH } from "../routes/const";
import { deleteAd } from "../api/ads";

const Container = styled.div`
  max-width: 1100px;
  margin: 3rem auto;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const StyledAd = styled.div`
  margin-bottom: 1rem;
`;

const Home = () => {
  const [ads, setAds] = useState([]);

  const getAds = () => {
    fetchAds()
      .then((response) => setAds(response))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getAds();
  }, []);

  // const handleDeleteNotEfficiant = async (id) => {
  //   try {
  //     await deleteAd(id);
  //     getAds();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleDelete = async (id) => {
    try {
      await deleteAd(id);
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <ActionBar>
        <h2>Marketplace</h2>
        <Link to={NEW_AD_PATH}>
          <Button>Add ad</Button>
        </Link>
      </ActionBar>
      {ads.map((ad) => (
        <StyledAd key={ad.id}>
          <Ad ad={ad} handleDelete={() => handleDelete(ad.id)} />
        </StyledAd>
      ))}
    </Container>
  );
};

export default Home;
