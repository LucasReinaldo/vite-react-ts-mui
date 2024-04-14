import { Video } from '../hooks/useVideos';

import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  Stack,
  Typography,
  CardContent,
  CardMedia,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
  demoProfilePicture,
} from '../constants';

type CardProps = {
  video: Video;
};

const VideoCard = (props: CardProps) => {
  const { video } = props;
  const { snippet, videoId } = video;

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '358px', md: '320px' },
        boxShadow: 'none',
        borderRadius: 2,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          component="img"
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: '#1E1E1E', height: '106px' }}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: '12px', color: 'gray', ml: '5px' }}
            />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

type ChannelCardProps = {
  details: Video;
  marginTop: string;
};

const ChannelCard = ({ details, marginTop }: ChannelCardProps) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '320px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link to={`/channel/${details?.channelId}`}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <CardMedia
          component="img"
          image={details?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={details?.snippet?.title}
          sx={{
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            mb: 2,
            border: '1px solid #e3e3e3',
          }}
        />
        <Typography variant="h6">
          {details?.snippet?.title}{' '}
          <CheckCircleIcon
            sx={{ fontSize: '14px', color: 'gray', ml: '5px' }}
          />
        </Typography>
      </CardContent>
    </Link>
  </Box>
);

type VideosProps = {
  videos?: Video[];
  loading?: boolean;
};

export const Videos = (props: VideosProps) => {
  const { videos = [], loading } = props;

  if (videos.length === 0) {
    return (
      <div>
        <h1>Videos</h1>
        <p>No videos found</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h1>Videos</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.videoId ? (
            <VideoCard video={video} />
          ) : (
            <ChannelCard details={video} marginTop="20px" />
          )}
        </Box>
      ))}
    </Stack>
  );
};
