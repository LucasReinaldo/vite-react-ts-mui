import { Search } from '@mui/icons-material';
import { IconButton, Paper } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { serializeFormQuery } from '../utils';

export const SearchBar = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    const params = serializeFormQuery(event.currentTarget);
    setSearchParams(params);
  }

  const q = searchParams.get('q');

  return (
    <Paper
      id="search-bar"
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #333',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
      }}
    >
      <input
        className="search-bar"
        type="text"
        placeholder="Search"
        defaultValue={q ?? undefined}
        name="q"
      />
      <IconButton
        type="submit"
        sx={{
          p: '10px',
          color: 'primary.main',
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};
