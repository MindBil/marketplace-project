import { useContext } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import FormikField from "../components/FormikField";
import { UserContext } from "../contexts/UserContext";
import Button from "../components/Button";
import { createAd } from "../api/ads";
import { HOME_PATH } from "../routes/const";

const Container = styled.div`
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: 5px;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
`;

const ErrorMessage = styled.h2`
  margin-top: 2rem;
  text-align: center;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const validationSchema = Yup.object({
  title: Yup.string().required("Required").min(3),
  description: Yup.string("Required"),
  imageUrl: Yup.string().url("Must be a valid URL").required("Required"),
  price: Yup.number().min(0).required("Required"),
  userId: Yup.number().required("Required"),
});

const NewAd = () => {
  const { user, isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      await createAd(values);
      navigate(HOME_PATH);
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoggedIn) {
    return <ErrorMessage>Please log in before adding new ad.</ErrorMessage>;
  }

  return (
    <Container>
      <Title>New Ad form</Title>
      <Formik
        initialValues={{
          title: "",
          description: "",
          imageUrl: "",
          price: 0,
          userId: user.id,
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <StyledForm>
          <FormikField label="Title" name="title" placeholder="Title" />
          <FormikField
            label="Description"
            name="description"
            placeholder="Description"
            component="textarea"
            rows={4}
            optional
          />
          <FormikField
            label="Image URL"
            name="imageUrl"
            placeholder="Image URL"
          />
          <FormikField
            type="number"
            label="Price (€)"
            name="price"
            placeholder="Price"
          />
          <Button type="submit">Submit ad</Button>
        </StyledForm>
      </Formik>
    </Container>
  );
};

export default NewAd;
