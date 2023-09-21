import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, generatePath } from "react-router-dom";
import { fetchAds } from "../api/ads";
import AdCard from "../components/AdCard";
<<<<<<< HEAD
import { NEW_AD_PATH, EDIT_AD_PATH } from "../routes/const";
import { deleteAd } from "../api/ads";
import { UserContext } from "../contexts/UserContext";
import { toast } from "react-toastify";
import { TextField, Button, Typography } from "@mui/material";
=======
import Button from "../components/Button";
import { NEW_AD_PATH, EDIT_AD_PATH } from "../routes/const";
import { deleteAd } from "../api/ads";
import { UserContext } from "../contexts/UserContext";
>>>>>>> 71b272b361af82e3bbc17459238f99a472a15c39

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
  const { isLoggedIn } = useContext(UserContext);
  const [ads, setAds] = useState([]);
<<<<<<< HEAD
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredAds = search
    ? ads.filter((ad) => ad.title.toLowerCase().includes(search.toLowerCase()))
    : ads;

=======
  const navigate = useNavigate();

>>>>>>> 71b272b361af82e3bbc17459238f99a472a15c39
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

  const handleEdit = (id) => {
    const path = generatePath(EDIT_AD_PATH, { id });
    navigate(path);
  };

  const handleDelete = async (id) => {
    try {
      await deleteAd(id);
      setAds((prevAds) => prevAds.filter((ad) => ad.id !== id));
<<<<<<< HEAD
      toast.success("Ad deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Ad was not deleted. Try again later");
=======
    } catch (error) {
      console.error(error);
>>>>>>> 71b272b361af82e3bbc17459238f99a472a15c39
    }
  };

  return (
    <Container>
<<<<<<< HEAD
      <TextField
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="Search"
        placeholder="Search"
        sx={{ width: 400, mb: 2 }}
      />
=======
>>>>>>> 71b272b361af82e3bbc17459238f99a472a15c39
      <ActionBar>
        <h2>Marketplace</h2>
        {isLoggedIn && (
          <Link to={NEW_AD_PATH}>
<<<<<<< HEAD
            <Button variant="contained">Add ad</Button>
          </Link>
        )}
      </ActionBar>
      {filteredAds.length ? (
        filteredAds.map((ad) => (
          <StyledAd key={ad.id}>
            <AdCard
              ad={ad}
              handleEdit={() => handleEdit(ad.id)}
              handleDelete={() => handleDelete(ad.id)}
            />
          </StyledAd>
        ))
      ) : (
        <Typography variant="overline">No ads found...</Typography>
      )}
=======
            <Button>Add ad</Button>
          </Link>
        )}
      </ActionBar>
      {ads.map((ad) => (
        <StyledAd key={ad.id}>
          <AdCard
            ad={ad}
            handleEdit={() => handleEdit(ad.id)}
            handleDelete={() => handleDelete(ad.id)}
          />
        </StyledAd>
      ))}
>>>>>>> 71b272b361af82e3bbc17459238f99a472a15c39
    </Container>
  );
};

export default Home;
