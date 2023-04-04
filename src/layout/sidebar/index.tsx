import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const menuItems = ['Inbox', 'Starred', 'Send email', 'Drafts'];

const Sidebar = () => {
    return (
        <Drawer
            anchor="left"
            open={true}
            onClose={() => console.log('cerrando')}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={item} button>
                            <ListItemIcon>
                                {index % 2 ? (
                                    <InboxOutlinedIcon />
                                ) : (
                                    <MailOutlineOutlinedIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {menuItems.map((item, index) => (
                        <ListItem key={item} button>
                            <ListItemIcon>
                                {index % 2 ? (
                                    <InboxOutlinedIcon />
                                ) : (
                                    <MailOutlineOutlinedIcon />
                                )}
                            </ListItemIcon>
                            <ListItemText primary={item} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};

export default Sidebar;
