import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 1rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 4px;
`;

const ImageContainer = styled.div`
  height: 120px;
  width: 120px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 50%;
  padding: 0.5rem;
`;

const Price = styled.p`
  color: orange;
  font-size: 2rem;
  align-self: center;
  width: 30%;
  text-align: right;
`;

const Ad = ({ ad }) => {
  const { title, description, image_url, price } = ad;
  return (
    <Container>
      <ImageContainer>
        <Image src={image_url} alt={title} />
      </ImageContainer>
      <Info>
        <h2>{title}</h2>
        <p>{description}</p>
      </Info>
      <Price>€{price}</Price>
    </Container>
  );
};

Ad.propTypes = {
  ad: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image_url: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

export default Ad;
