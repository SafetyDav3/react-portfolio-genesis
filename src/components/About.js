import React from "react";
import { Text, Grid } from "@mantine/core";

function About() {
  return (
      <Grid justify="center">
        <Grid.Col span={8}>
          <Text size="xl" align="left">
            About Me:
          </Text>
          <Text align="left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
              quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptates, quisquam. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptates, quisquam.
            </p>
          </Text>
        </Grid.Col>
      </Grid>
  );
}

export default About;
