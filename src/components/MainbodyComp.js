import { Box, Button, Card, Grid, IconButton, Stack, Typography } from '@mui/material'
import MinimizeIcon from '@mui/icons-material/Minimize';
import CloseIcon from '@mui/icons-material/Close';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ClearIcon from '@mui/icons-material/Clear';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';

function MainbodyComp() {
    const data1 = [1, 2, 3, 4, 5, 6, 7]
    const data2 = [8, 9, 10, 11, 12, 13, 14]
    const count = [data1, data2]
  return (
    <Stack sx={{background: '#2d2734', height: '100vh', p: '1rem 2rem', width: '100%'}} gap={3}>
        <Box sx={{display: 'flex', justifyContent: 'flex-end', color: '#847f8a', alignItems: 'center'}} gap={2}>
            <IconButton>
                <MinimizeIcon sx={{color: '#847f8a', mt: '-0.8rem'}} />
            </IconButton>
            <IconButton>
                <CloseIcon sx={{color: '#847f8a'}} />
            </IconButton>
        </Box>
        <Stack direction='row' justifyContent='space-between' sx={{color: '#d9d4de'}}>
            <Typography variant='h5' fontWeight={600}>Proxy Groups (50)</Typography>
            <Typography variant='h6' fontWeight={600}>12:00:00</Typography>
        </Stack>
        <Stack direction='row' gap={2}>
            {[['Save', '#8a92df'], ['Clear All', '#df8a99']].map( e => (
                <Button size='large' sx={{background: e[1], textTransform: 'none', color: '#fff', p: '0.3rem 2.5rem', borderRadius: '5px'}}>{e[0]}</Button>
            ))}
        </Stack>

        <Grid container spacing={3}> 
            <Grid item md={6}>
                <Card elevation={0} sx={{p: '2rem 3rem', borderRadius: '1rem', background: '#312b39', height: '90.5%'}}>
                    <Typography variant='body2' color= '#fff'>Enter proxies here</Typography>
                </Card>
            </Grid>
            {
                count.map((e,i) => (
                    <Grid key={i} item md={3}>
                        {e.map((a,b) => (
                            a === 1 ?
                            <Card key={b} elevation={0} sx={{ pl: '1rem', pb: '1rem', borderRadius: '10px', background: '#312b39', mb: '0.6rem',  border: '1px solid #df8ad7'}}>
                                <Stack direction='row' justifyContent='flex-end'>
                                    {[[<DriveFileRenameOutlineIcon fontSize='small' />, '#686ba0'], [<ClearIcon fontSize='small' />, '#db8797']].map(e => (
                                        <IconButton sx={{color: e[1]}}>
                                            {e[0]}
                                        </IconButton>
                                    ))}
                                </Stack>
                                <Stack direction='row' alignItems='center' gap={3}>
                                    <ShapeLineIcon fontSize='large' sx={{color: '#df8ad7'}} />
                                    <Stack sx={{color: '#fff'}} gap={0.5}>
                                        <Typography variant='body2'>Proxy {a}</Typography>
                                        <Typography variant='body2'>250x</Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                            :
                            <Card key={b} elevation={0} sx={{ pl: '1rem', pb: '1rem', borderRadius: '10px', background: '#312b39', mb: '0.6rem'}}>
                                <Stack direction='row' justifyContent='flex-end'>
                                    {[[<DriveFileRenameOutlineIcon fontSize='small' />, '#686ba0'], [<ClearIcon fontSize='small' />, '#db8797']].map(e => (
                                        <IconButton sx={{color: e[1]}}>
                                            {e[0]}
                                        </IconButton>
                                    ))}
                                </Stack>
                                <Stack direction='row' alignItems='center' gap={3}>
                                    <ShapeLineIcon fontSize='large' sx={{color: '#df8ad7'}} />
                                    <Stack sx={{color: '#fff'}} gap={0.5}>
                                        <Typography variant='body2'>Proxy {a}</Typography>
                                        <Typography variant='body2'>250x</Typography>
                                    </Stack>
                                </Stack>
                            </Card>
                        ))}
                    </Grid>
                ))
            }
        </Grid>
    </Stack>
  )
}

export default MainbodyComp