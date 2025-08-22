import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { MantineProvider, createTheme, AppShell, Group, Button, Container, ActionIcon, Text } from '@mantine/core';
import { useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';
import { useAuthStore } from './auth/useAuthStore';
import '@mantine/core/styles.css';

function ThemeToggle() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const next = colorScheme === 'dark' ? 'light' : 'dark';
  return (
    <ActionIcon
      variant="subtle"
      onClick={() => setColorScheme(next)}
      aria-label="Toggle color scheme"
      size="lg"
    >
      {colorScheme === 'dark' ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
}

// Example custom themes with light/dark palettes
const tealTheme = createTheme({
  primaryColor: 'teal',
  fontFamily: 'Inter, sans-serif',
  colors: {
    teal: [
      '#e6fcf5', '#c3fae8', '#96f2d7', '#63e6be', '#38d9a9',
      '#20c997', '#12b886', '#0ca678', '#099268', '#087f5b',
    ],
  },
});

const pinkTheme = createTheme({
  primaryColor: 'pink',
  fontFamily: 'Georgia, serif',
  defaultRadius: 'lg',
  colors: {
    pink: [
      '#fff0f6', '#ffdeeb', '#fcc2d7', '#faa2c1', '#f783ac',
      '#f06595', '#e64980', '#d6336c', '#c2255c', '#a61e4d',
    ],
  },
});

const corporateBlueTheme = createTheme({
  primaryColor: 'blue',
  fontFamily: 'Roboto, sans-serif',
  headings: { fontWeight: '700' },
  colors: {
    blue: [
      '#e7f5ff', '#d0ebff', '#a5d8ff', '#74c0fc', '#4dabf7',
      '#339af0', '#228be6', '#1c7ed6', '#1971c2', '#1864ab',
    ],
  },
});

export default function App() {
  const { isLoggedIn, username, login, logout } = useAuthStore();
  const navigate = useNavigate();

  return (
    // Pick one of the themes: tealTheme, pinkTheme, corporateBlueTheme
    <MantineProvider theme={pinkTheme} defaultColorScheme="auto">
      <AppShell header={{ height: 64 }} padding="md">
        <AppShell.Header>
          <Group justify="space-between" h="100%" px="md">
            <Group gap="md">
              <Link to="/">Home</Link>
              <Link to="/aboutus">About Us</Link>
              {!isLoggedIn && <Link to="/login">Login</Link>}
              {isLoggedIn && <Link to="/dashboard">Dashboard</Link>}
            </Group>
            <Group>
              <ThemeToggle />
              {isLoggedIn ? (
                <Group gap="sm">
                  {username && <Text c="dimmed">{username}</Text>}
                  <Button
                    color="red"
                    onClick={() => {
                      logout();
                      navigate('/');
                    }}
                  >
                    Logout
                  </Button>
                </Group>
              ) : (
                <Button
                  color="green"
                  onClick={() => login('Guest')} // simple demo: logs in with "Guest"
                >
                  Login
                </Button>
              )}
            </Group>
          </Group>
        </AppShell.Header>

        <AppShell.Main>
          <Container mt="xl">
            <Outlet />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
