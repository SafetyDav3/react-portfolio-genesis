import React from "react";

import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  useMantineTheme
} from "@mantine/core";

function Project() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div style={{ width: 340, margin: "auto" }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src="./evil-corp.jpg" height={160} alt="Norway" />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>Evil Corp</Text>
          <Badge color="pink" variant="light">
            HTML CSS
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          Just super mean and punches holes in drywall. Meet Derek.
        </Text>

        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          Project
        </Button>
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
        >
          GitHub Repo
        </Button>
      </Card>
    </div>
  );

  // return (
  //   <div>
  //     <div className="card">
  //       <div className="card-body">
  //         <h5 className="card-title">Project Title</h5>
  //         <p className="card-text">
  //           lorem ipsum dolor sit amet consectetur adipisicing elit.
  //           Voluptates, quisquam.
  //         </p>
  //         <a href="#" className="btn btn-primary">
  //           View Project
  //         </a>
  //      </div>
  //    </div>
  //   </div>
  // );
}

export default Project;
