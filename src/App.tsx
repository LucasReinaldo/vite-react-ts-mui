import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Navbar } from './components/Navbar';
import { VideoDetail } from './pages/VideoDetail';
import { ChannelDetail } from './pages/ChannelDetail';
import { SearchFeed } from './pages/SearchFeed';
import { Feed } from './pages/Feed';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ bgcolor: '#010101' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/video/category/:category" element={<Feed />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:q" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
