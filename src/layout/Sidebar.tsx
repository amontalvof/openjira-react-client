import { useContext } from 'react';
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
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import RestartAltOutlinedIcon from '@mui/icons-material/RestartAltOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { UIContext } from '../context/ui/UIContext';

const menuItems = ['Work Items', 'Boards', 'Backlogs', 'Sprints', 'Queries'];
const menuItemsIcons = [
    InventoryOutlinedIcon,
    DashboardOutlinedIcon,
    ListOutlinedIcon,
    RestartAltOutlinedIcon,
    FilterAltOutlinedIcon,
];

const Sidebar = () => {
    const { sideMenuOpen, closeSideMenu } = useContext(UIContext);
    return (
        <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '5px 10px' }}>
                    <Typography variant="h4">Menu</Typography>
                </Box>
                <Divider />
                <List>
                    {menuItems.map((item, index) => {
                        const Icon = menuItemsIcons[index];
                        return (
                            <ListItem key={item} button>
                                <ListItemIcon>
                                    <Icon />
                                </ListItemIcon>
                                <ListItemText primary={item} />
                            </ListItem>
                        );
                    })}
                </List>
                <Divider />
            </Box>
        </Drawer>
    );
};

export default Sidebar;
