import React from "react";
import Spacer from "@ninjas/components/commons/Spacer";
import { Button } from "@ninjas/components/commons/Button";
import Text from "../foundation/Text";
import { Box } from "../foundation/Layout/Box";
import { Grid } from "../foundation/Layout/Grid";

const servicesScreeen = () => {
  return (
    <Box display="flex" flexDirection="column" flex="1">
      <Grid.Row
        marginBottom={{ xs: 0, md: "100px" }}
        display={{ xs: "block", md: "flex" }}
        background="#2c4251"
        width="100%"
        margin="0"
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-center"
          height={{ xs: "500px" }}
          paddingLeft={{ xs: "30px", lg: "10px" }}
          justifyContent="center"
          flexDirection="column"
          background={{ xs: "url(/images/wallpaper_sofa.png)", md: "none" }}
          backgroundPosition={{ xs: "center", md: 0 }}
        >
          <Grid.Container
            width={{ xs: "400px", md: "400px" }}
            background={{ xs: "#b8b8b8d1", lg: "none" }}
            marginTop={{ xs: "500px", lg: "50px" }}
            marginBottom={{ xs: "300px", md: "10px" }}
            paddingTop={{ xs: "10px" }}
          >
            <Text
              variant="titleXL"
              tag="h1"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              marginTop="0"
              marginBottom={{ lg: "100px" }}
              fontFamily="Montserrat"
            >
              Services
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
              In our company we understand the importance of the beauty of your
              space.
            </Text>
            <Grid.Container
              paddingLeft={{ lg: 0 }}
              display="flex"
              justifyContent={{ xs: "center", lg: "left" }}
            />
          </Grid.Container>
        </Grid.Col>
      </Grid.Row>
      {/*  */}
      <Grid.Row
        marginBottom={{ xs: 0, md: "50px" }}
        width="100%"
        margin="0"
        // background="#5a5b546a"
      >
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 7 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="700px"
          backgroundImage="url(/images/service_image.jpg)"
        >
          <Grid.Container
            backgroundColor="#293e4c"
            width={{ lg: "600px" }}
            height={{ lg: "400px" }}
            marginBottom={{ lg: "100px" }}
            marginRight={{ lg: "-400px" }}
            display="flex"
            alignItems="center"
          >
            <Grid.Container display="block">
              <Text
                variant="titleXS"
                tag="h2"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Interiors
              </Text>
              <Text
                variant="paragraph2"
                tag="h3"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                At the Company, we understand the importance of colors and decoration.
 An environment with the right colors changes the way you feel and
 This applies to both your home and your business.
              </Text>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>

        {/*  */}
        {/*  */}
      </Grid.Row>
      <Grid.Row marginBottom={{ xs: 0, md: "50px" }} width="100%" margin="0">
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 7 }}
          offset={{ xs: 0, md: 5 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="700px"
          backgroundImage="url(/images/service_image2.jpg)"
        >
          <Grid.Container
            backgroundColor="#cf917f"
            width={{ lg: "600px" }}
            height={{ lg: "400px" }}
            marginBottom={{ lg: "100px" }}
            marginLeft={{ lg: "-400px" }}
            display="flex"
            alignItems="center"
          >
            <Grid.Container display="block">
              <Text
                variant="titleXS"
                tag="h2"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Exteriors
              </Text>
              <Text
                variant="paragraph2"
                tag="h3"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                At the Company, we understand the importance of colors and decoration.
 An environment with the right colors changes the way you feel and
 This applies to both your home and your business.
              </Text>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>

        {/*  */}
        {/*  */}
      </Grid.Row>
      {/*  */}
      <Grid.Row marginBottom={{ xs: 0, md: "50px" }} width="100%" margin="0">
        {/*  */}
        <Grid.Col
          value={{ xs: 12, md: 7 }}
          offset={{ xs: 0, md: 0 }}
          display="flex"
          alignItems="flex-end"
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: 0 }}
          height="700px"
          backgroundImage="url(/images/service_image3.jpg)"
        >
          <Grid.Container
            backgroundColor="#7e9182"
            width={{ lg: "600px" }}
            height={{ lg: "400px" }}
            marginBottom={{ lg: "100px" }}
            marginRight={{ lg: "-400px" }}
            display="flex"
            alignItems="center"
          >
            <Grid.Container display="block">
              <Text
                variant="titleXS"
                tag="h2"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                Commercial Environment
              </Text>
              <Text
                variant="paragraph2"
                tag="h3"
                color="tertiary.main"
                textAlign={{
                  xs: "center",
                  md: "left",
                }}
                fontFamily="Montserrat"
              >
                At the Company, we understand the importance of colors and decoration.
 An environment with the right colors changes the way you feel and
 This applies to both your home and your business.
              </Text>
            </Grid.Container>
          </Grid.Container>
        </Grid.Col>

        {/*  */}
        {/*  */}
      </Grid.Row>
      <Grid.Row
        marginBottom={{ xs: 0, md: "50px" }}
        width="100%"
        margin="0"
        paddingLeft={{ lg: "100px" }}
        paddingRight={{ lg: "100px" }}
        // background="#5a5b546a"
      >
        <Grid.Col
          value={{ xs: 12, md: 12 }}
          offset={{ xs: 0, md: 0 }}
          paddingLeft={{ sm: "50px", lg: "50px" }}
          paddingRight={{ sm: "50px", lg: "100px" }}
          marginBottom={{ lg: "50px" }}
          display="flex"
          justifyContent="flex-center"
        >
          <Grid.Container
            paddingTop={{ lg: "100px" }}
            // width={{ lg: "300px" }}
            // display="flex"
            // justifyContent="center"
          >
            <Text
              variant="titleXS"
              tag="h2"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "center",
              }}
              fontFamily="Montserrat"
            >
             How do we work?
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          paddingLeft={{ lg: "200px" }}
          display="block"
        >
          <Grid.Container
            marginTop={{ lg: "90px" }}
            paddingLeft={{ lg: "150px" }}
          >
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              1. Contact
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              2. Tell us what you imagine
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              3. We will prepare a base project
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              4. We will start the project
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "justify",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              5. All ready!
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Col
          value={{ xs: 12, md: 6 }}
          display="block"
          borderLeft={{ lg: "2px solid #de654e " }}
        >
          <Grid.Container marginTop={{ lg: "90px" }}>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              Get in touch by phone, email or social media
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
             Tell us about your ideas and projects
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              We will create an initial plan and review all the
              details
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              When all the details are ready, we will get to work.{" "}
            </Text>
            <Text
              variant="paragraph1"
              tag="h1"
              color="secondary.main"
              textAlign={{
                xs: "center",
                md: "left",
              }}
              marginTop="0"
              marginBottom={{ lg: "50px" }}
              fontFamily="Montserrat"
            >
              Project finished and you will be happy with your new space.
            </Text>
          </Grid.Container>
        </Grid.Col>
        <Grid.Container
          display="flex"
          justifyContent="center"
          marginTop={{ xs: "20px", lg: "20px" }}
          marginBottom={{ xs: "20px", lg: "20px" }}
        >
          <Button tag="link" href="/contato" variant="primary.main">
            Contact us
          </Button>
        </Grid.Container>
      </Grid.Row>
    </Box>
  );
};

export default servicesScreeen;
