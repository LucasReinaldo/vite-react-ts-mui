import { Stack } from '@mui/material';
import { categories } from '../constants';
import { useLocation, useSearchParams } from 'react-router-dom';

export const Sidebar = () => {
  const location = useLocation();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSearchParams] = useSearchParams();

  function handleSubmit(event: string) {
    // event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    const params = {
      category: event,
    };

    setSearchParams(params);
  }

  return (
    <Stack
      direction="row"
      minWidth="220px"
      flexDirection={{ md: 'column' }}
      height={{ sm: 'auto', md: '95%' }}
      sx={{ overflowY: 'auto' }}
    >
      {categories.map((category) => {
        const Icon = category.icon;

        const searchParams = new URLSearchParams(location.search);

        const search = searchParams.get('category');

        const isActive = search === category.name;

        return (
          <button
            key={category.route}
            onClick={() => handleSubmit(category.name)}
            className="category-btn"
            style={{
              background: isActive ? '#906DFE' : undefined,
              color: '#FFF',
              gap: '14px',
              width: '100%',
            }}
          >
            <span
              style={{
                color: isActive ? '#FFF' : '#906DFE',
              }}
            >
              <Icon />
            </span>
            <span
              style={{
                opacity: isActive ? 1 : 0.8,
              }}
            >
              {category.name}
            </span>
          </button>
        );
      })}
    </Stack>
  );
};
