import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from './Searchbar';

export const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        alignItems: 'center',
        position: 'sticky',
        background: '#010101',
        top: 0,
        justifyContent: 'space-between',
        height: 80,
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/vite.svg" alt="logo" style={{ height: 45 }} />
      </Link>

      <SearchBar />
    </Stack>
  );
};
