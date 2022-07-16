import React from "react";
import Project from "./Project";
import { Grid, Stack } from "@mantine/core";

function Portfolio() {
  return (
    <Grid justify="center">
      <Grid.Col span={4}>
        <Stack spacing="lg">
          <Project />
          <Project />
          <Project />
        </Stack>
      </Grid.Col>
      <Grid.Col span={4}>
        <Stack spacing="lg">
          <Project />
          <Project />
          <Project />
        </Stack>
      </Grid.Col>
    </Grid>
  );
}

export default Portfolio;
