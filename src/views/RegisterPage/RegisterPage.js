import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./style/style";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import NavBar from "shared/components/Navbars/NavBar";
import Footer from "shared/components/Footer/Footer";

const useStyles = makeStyles(styles);

function SignUp(props) {
  const classes = useStyles(props);
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  const [emailFocus, setEmailFocus] = React.useState(false);
  const [passwordFocus, setPasswordFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <NavBar />
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container className={classes.container}>
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <h2 style={{ width: "fit-content", textAlign: "center" }}>
                        SIGNUP
                      </h2>
                    </div>
                  </CardHeader>
                  <div className={classes.socialAuth}>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-facebook-square"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                  </div>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_single-02"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="First Name"
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_single-02"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Last Name"
                        type="text"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (emailFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (passwordFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_lock-circle-open"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      Sign up
                    </Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <Footer color="transpernt" />
      </div>
    </>
  );
}

export default SignUp;
