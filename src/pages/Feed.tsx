import { Box, Stack, Typography } from '@mui/material';
import { Sidebar } from '../components/Sidebar';
import { useLocation } from 'react-router-dom';
import { categories } from '../constants';
import { Videos } from '../components/Videos';
import { useEffect } from 'react';
import { useVideos } from '../hooks/useVideos';

export const Feed = () => {
  const { videos, loading } = useVideos();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');
  const { name } = categories.find((c) => c.name === category) || {
    name: searchParams.get('q') || 'New',
  };

  useEffect(() => {
    document.title = `${name} videos - YouTube`;
  }, [name]);

  return (
    <Stack flexDirection={{ sm: 'column', md: 'row' }}>
      <Box
        height={{ sm: 'auto', md: 'calc(100vh - 80px)' }}
        borderRight="1px solid #3d3d3d"
        px={{ sm: 0, md: 2 }}
      >
        <Sidebar />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: '#FFF' }}
        >
          Copyright {new Date().getFullYear()}
        </Typography>
      </Box>

      <Box p={2} height="90vh" flex={2} sx={{ overflowY: 'auto' }}>
        <Typography variant="h4" color="#fff" fontWeight="bold" mb={2}>
          {name} <span style={{ color: '#906DFE' }}>videos</span>
        </Typography>

        <Videos videos={videos} loading={loading} />
      </Box>
    </Stack>
  );
};
