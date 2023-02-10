import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Stack, Typography } from '@mui/material';
import logo from '../assets/logo.png'
import ManIcon from '@mui/icons-material/Man';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import WalletIcon from '@mui/icons-material/Wallet';
import SendIcon from '@mui/icons-material/Send';
import SettingsIcon from '@mui/icons-material/Settings';
import MainbodyComp from './MainbodyComp';
import img1 from '../assets/img1.png'

const drawerWidth = 250;

function DrawerComp() {
    const listData = [
        {
            icon: <HomeIcon sx={{color: '#bb75b6'}} />,
            title: 'Home'
        },
        {
            icon: <BusinessCenterIcon sx={{color: '#bb75b6'}} />,
            title: 'Tasks'
        },
        {
            icon: <WalletIcon sx={{color: '#bb75b6', pr: '-5px'}} />,
            title: 'Profiles'
        },
        {
            icon: <SendIcon sx={{color: '#bb75b6'}} />,
            title: 'Proxies'
        },
        {
            icon: <SettingsIcon sx={{color: '#bb75b6'}} />,
            title: 'Settings'
        }
    ]
  return (
    <Box sx={{ display: 'flex', background: '#2d2734' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          
          '& .MuiDrawer-paper': {
            p: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#d9d4de',
            width: drawerWidth,
            borderRight: '1px solid #666',
            boxSizing: 'border-box',
            background: '#322b39',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Stack direction='row' alignItems='center' pt='1.8rem' gap={2}>
            <Box 
                component='img'
                src={logo}
                sx={{width: '35%'}}
            />
            <Typography variant='h4'>Sage</Typography>
        </Stack>
        <List>
          {listData.map((e, i) => (
            <ListItem key={i} >
              <ListItemButton>
                <ListItemIcon>
                  {e.icon}
                </ListItemIcon>
                {e.title === 'Proxies' ? <ListItemText sx={{color: '#d986d1'}} primary={e.title} /> : <ListItemText primary={e.title} />}
                
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Stack direction='row' alignItems='center' gap={1}>
            <Avatar 
                src={img1}
                sx={{width: 20, bgColor: '#063970', p: '5px 10px'}}
            />
            <Stack>
                <Typography sx={{textTransform: 'uppercase'}}>jack#8888</Typography>
                <Typography variant='body2' sx={{color: '#9c48fb'}}>v0.1</Typography>
            </Stack>
        </Stack>
      </Drawer>
      <MainbodyComp />
    </Box>
  )
}
export default DrawerComp