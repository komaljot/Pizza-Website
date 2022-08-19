import React from "react";
import {
  Container,
  FormButton,
  FormContent,
  FormInput,
  FormLabel,
  Formwrap,
  Icon,
  FormH1,
  Form,
  PageLink,
  HR,
} from "./SignupElements";

const SignUp = () => {
  return (
    <>
      <Container>
        <Formwrap>
          <Icon to="/">PIZZA</Icon>
          <FormContent>
            <Form action="/">
              <FormH1>Create your account</FormH1>
              {
                //Firstname
              }
              <FormLabel htmlFor="FirstName">First Name</FormLabel>
              <FormInput type="text" required />
              {
                //Lastname
              }
              <FormLabel htmlFor="LastName">Last Name</FormLabel>
              <FormInput type="text" required />
              {
                //Email
              }
              <FormLabel htmlFor="Email">Email</FormLabel>
              <FormInput type="email" required />
              {
                //Password
              }
              <FormLabel htmlFor="password">Password</FormLabel>
              <FormInput type="password" required />
              {
                //Confirm-Password
              }
              <FormLabel htmlFor="ConfirmPassword">Confirm Password</FormLabel>
              <FormInput type="password" required />
              {
                //Submit-Button
              }
              <FormButton type="submit">Continue</FormButton>
              <HR />
              <PageLink to="/SigninPage">Already have an account?</PageLink>
            </Form>
          </FormContent>
        </Formwrap>
      </Container>
    </>
  );
};

export default SignUp;
