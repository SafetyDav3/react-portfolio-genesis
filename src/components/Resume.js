import React from "react";
import { Grid, Text } from "@mantine/core";

const Resume = () => {
  return (
    <Grid justify="center">
      <Grid.Col span={8}>
        <Text align="left">
          <h1>Resume</h1>
        </Text>
        <Text align="left">
          <p>Short introduction</p>
        </Text>
        <Text align="left">
          <h2>Credentials:</h2>
        </Text>
        <Text align="left">
          <h3>Certified Scrum Master</h3>
        </Text>
        <Text align="left">
          <p>In Life and on the field!</p>
        </Text>
        <Text align="left">
          <h3>Completed Javascript full-stack boot camp.</h3>
        </Text>
        <Text align="left">
          <p>Six month course on the MERN stack.</p>
        </Text>
        <Text align="left">
          <h3>Certified Fork Lift Operator</h3>
        </Text>
        <Text align="left">
          {" "}
          <p>
            I can not only drive a Fork-Lift, but i can also use it to pick
            stuff up and then put stuff down.
          </p>
        </Text>
        <Text align="left">
          <h2>Experience:</h2>
        </Text>
        <Text align="left">
          <h3>Head of Fabrication and Machining</h3>
        </Text>
        <Text align="left">
          <p>Created custom high end furniture for a top 1% etsy merchant.</p>
        </Text>
        <Text align="left">
          <h3>Crypto Mining</h3>
        </Text>
        <Text align="left">
          <p>
            I create Cryptocurrency mining solutions for various levels of
            investment strategies.
          </p>
        </Text>
        <Text align="left">
          <h3>Technology Consultant for Gerarden Fabrication</h3>
        </Text>
        <Text align="left">
          {" "}
          <p>
            Working to create custom solutions for a highly specialized
            environment.
          </p>
        </Text>
      </Grid.Col>
    </Grid>
  );
};

export default Resume;
