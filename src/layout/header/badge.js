import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useTheme } from "@mui/material/styles";


export default function BadgeNotification() {
 
  const [invisible, setInvisible] = React.useState(false);
  const theme = useTheme();

  

  return (
    <Box
      sx={{
        color: 'action.active',
        display: 'flex',
        flexDirection: 'column',
        '& > *': {
        //   marginBottom: 2
        },
        '& .MuiBadge-root': {
          marginRight: 3,
        },
      }}
    >
      
      <div style={{cursor: 'pointer'}}>
        <Badge color="secondary" variant="dot" invisible={invisible}>
          <NotificationsIcon style={{color: theme.palette.secondary.light }} />
        </Badge>
      </div>
    </Box>
  );
}
