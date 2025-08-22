import { useLoaderData } from 'react-router-dom';
import { Title, Text, Container, Paper } from '@mantine/core';

export default function Dashboard() {
  const data = useLoaderData() as { message: string };

  return (
    <Container size="sm" mt="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Title order={1} color="green">Dashboard</Title>
        <Text mt="md">{data.message}</Text>
      </Paper>
    </Container>
  );
}
