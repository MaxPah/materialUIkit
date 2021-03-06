import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// @material-ui/core components
// import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
// import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
// import ProductSection from "./Sections/ProductSection.jsx";
// import TeamSection from "./Sections/TeamSection.jsx";
// import WorkSection from "./Sections/WorkSection.jsx";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";

// const dashboardRoutes = [];

class Test extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
          <Header
              brand="Navbar with profile"
              rightLinks={
                  <List className={classes.list}>
                      <ListItem className={classes.listItem}>
                          <Button
                              href="#pablo"
                              className={classes.navLink}
                              onClick={e => e.preventDefault()}
                              color="transparent"
                          >
                              Discover
                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              href="#pablo"
                              className={classes.navLink}
                              onClick={e => e.preventDefault()}
                              color="transparent"
                          >
                              Wishlist
                          </Button>
                      </ListItem>
                      <ListItem className={classes.listItem}>
                          <Button
                              href="#pablo"
                              className={classes.registerNavLink}
                              onClick={e => e.preventDefault()}
                              color="rose"
                              round
                          >
                              Register
                          </Button>
                      </ListItem>
                  </List>
              }
          />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        {/*<div className={classNames(classes.main, classes.mainRaised)}>*/}
          {/*<div className={classes.container}>*/}
            {/*<ProductSection />*/}
            {/*<TeamSection />*/}
            {/*<WorkSection />*/}
          {/*</div>*/}
        {/*</div>*/}
        <Footer />
      </div>
    );
  }
}

// export default withStyles(landingPageStyle)(Test);
export default Test;
