import { Title, Container, Paper } from '@mantine/core';

export default function About() {
  return (
    <Container size="sm" mt="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Title order={1}>About Us</Title>
      </Paper>
    </Container>
  );
}
