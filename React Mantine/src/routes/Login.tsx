import { Form, useActionData } from 'react-router-dom';
import {
  TextInput,
  PasswordInput,
  Button,
  Paper,
  Title,
  Container,
  Text,
  Stack,
} from '@mantine/core';

export default function Login() {
  const error = useActionData() as string | undefined;

  return (
    <Container size="xs" mt="xl">
      <Paper shadow="md" p="xl" radius="md" withBorder>
        <Title order={2} mb="lg">Login</Title>
        <Form method="post">
          <Stack>
            <TextInput name="username" label="Username" required />
            <PasswordInput name="password" label="Password" required />
            {error && (
              <Text c="red" fw={600}>
                {error}
              </Text>
            )}
            <Button type="submit" fullWidth>
              Log In
            </Button>
          </Stack>
        </Form>
      </Paper>
    </Container>
  );
}
