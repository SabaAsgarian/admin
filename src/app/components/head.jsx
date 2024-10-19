"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import bot from './img/Shape.png'
import Image from "next/image";
import img1 from "./img/profile.png";
import Logo from "./img/Logo.png";
import icon from "./img/icon.png";

import Link from "next/link";
import CropSquareIcon from '@mui/icons-material/CropSquare';
import CloseIcon from '@mui/icons-material/Close';
import MinimizeIcon from '@mui/icons-material/Minimize';

import { useRouter } from "next/navigation";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import AddIcon from '@mui/icons-material/Add';
import SecondHeader from './secondhead'
import { styled as muiStyled } from '@mui/material/styles';
import union from './img/Union.png'
import Radio from './radio'
import Radiotwo from './radiotwo'
import Radiothree from './radiothree'
import Tabs from './tabtwo'
const SupportContainer = styled(Box)({
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',

});
const drawerWidth = 240;

const openedMixin = (theme) => ({
    display: { xs: 'none', lg: 'flex' },
    backgroundColor: '#F0F0F0',
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme) => ({
    display: { xs: 'none', lg: 'flex' },
    backgroundColor: '#F0F0F0',
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled("div")(({ theme }) => ({
    backgroundColor: '#F0F0F0',
    display: { xs: 'none', lg: 'flex' },
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    boxShadow: 'none',
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(["width", "margin"], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
    backgroundColor: '#F0F0F0',
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    display: { xs: 'none', lg: 'flex' },
    variants: [
        {
            props: ({ open }) => open,
            style: {
                ...openedMixin(theme),
                "& .MuiDrawer-paper": openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
                ...closedMixin(theme),
                "& .MuiDrawer-paper": closedMixin(theme),
            },
        },
    ],
}));

function Page() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const router = useRouter();
    const handleLogout = () => {
        router.push("/");
    };

    const bottomNavItems = [
        { icon: <NotificationsNoneIcon />, label: 'Activity' },
        { icon: <ChatOutlinedIcon />, label: 'Chats' },
        { icon: <GroupsOutlinedIcon />, label: 'Teams' },
        { icon: <CalendarMonthOutlinedIcon />, label: 'Calendar' },
        { icon: <MoreHorizIcon />, label: 'More', color: '#5B5FC7' },
    ];

    return (
        <Box sx={{cursor:'pointer'}}>
             <AppBar position="fixed" open={open} sx={{ boxShadow: 'none', display:{xs:'flex',lg:'none'} }}>
                    <Toolbar className="w-full bg-[#ffffff]">
                        <div className="w-full flex justify-between items-center">
                            {/* Left side */}
                            <div className="flex items-center">
                                <Image
                                    className="mr-6"
                                    alt="Remy Sharp"
                                    src={union}
                                    style={{ width: '32px', height: '32px' }}
                                />
                                <Box sx={{width:'131px'}}>
                                    <Typography variant="h1" sx={{color:'black',fontSize:'26px',fontWeight:'bolder'}}>
                                        Van Arsdel
                                    </Typography>
                                </Box>
                            </div>

                            {/* Right side */}
                            <div className="flex items-center">
                                <Image src={bot} alt="bot" style={{width:'15px',height:'15px', marginRight: '8px'}}/>
                                <MoreHorizIcon color="action" />
                            </div>
                        </div>
                    </Toolbar>
                    <Box sx={{
                        width:'100%',
                        display:'flex',
                        justifyContent:'center',
                        backgroundColor:'white',
                        padding: '8px 0' // Add some vertical padding if needed
                    }}>
                        <Tabs/>
                    </Box>
                </AppBar>
            <Box sx={{ display: { xs: 'none', lg: 'flex' } }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} sx={{ boxShadow: 'none', borderBottom: '1px solid #e5e7eb' }}>
                    <Toolbar className="w-full bg-[#F0F0F0]">

                        <div className="w-full flex justify-between items-center *:cursor-pointer">
                            <Typography className="hidden md:flex text-gray-600">
                                <Image className="" alt="Logo" src={Logo} style={{ width: '24px', height: '48px', borderRadius: '50%' }} />

                            </Typography>
                            <Box>
                                <KeyboardArrowLeftIcon color="action" />
                                <ChevronRightIcon color="action" />
                                <input
                                    className="w-[468px] h-[32px] outline-none ml-6 rounded-sm px-5 border-2 border-gray-200"
                                    type="search"

                                    placeholder="search"
                                />

                            </Box>
                            <div className="flex  items-center ">
                                <Box className="mr-4 flex items-end w-[32px] h-[32px] mt-[10px]">
                                    <MoreHorizIcon color="action" />
                                </Box>
                                <Image
                                    className="mr-6 "
                                    alt="Remy Sharp"
                                    src={img1}
                                    style={{ width: '32px', height: '32px' }}
                                />
                                <Box sx={{ width: '144px', display: 'flex' }}>
                                    <Box className="mr-8" color="primary">
                                        <MinimizeIcon color="action" />
                                    </Box>
                                    <Box className="mr-8" color="error">
                                        <CropSquareIcon color="action" />
                                    </Box>
                                    <Box className="mr-8" color="error">
                                        <CloseIcon color="action" />
                                    </Box>
                                </Box>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>

                <SecondHeader />

                <SupportContainer sx={{ position: 'fixed', top: '16%', border: '1px solid #F0F0F0', alignItems: 'center', textAlign: 'center',height:'58px' }}>
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            color="Black"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={[
                                {
                                    marginLeft: '70px'
                                },
                                open && { display: "none" },
                            ]}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Radio />
                        <Radiotwo />
                        <Radiothree />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bolder' }}>Filter</Typography>

                        <input
                            className="w-[208px] h-[32px] outline-none mr-11 ml-4 rounded-sm px-5 border-2 border-gray-200"
                            type="search"
                            placeholder="Find"
                        />
                    </Box>
                </SupportContainer>

                <Drawer variant="permanent" open={open} className="!bg-[#F0F0F0]" sx={{ display: { xs: 'none', lg: 'flex' }, }}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === "rtl" ? (
                                <ChevronRightIcon />
                            ) : (
                                <ChevronLeftIcon />
                            )}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {[
                            {
                                text: "Activity",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <NotificationsNoneIcon />
                                    <Typography sx={{ fontSize: '12px' }}>Activity</Typography>
                                </Box>,


                            },
                            {
                                text: "Chat",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <ChatOutlinedIcon style={{ borderRadius: '100%' }} />
                                    <Typography sx={{ fontSize: '12px' }}>Chat</Typography>
                                </Box>,


                            },
                            {
                                text: "Teams",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <GroupsOutlinedIcon />
                                    <Typography sx={{ fontSize: '12px' }}>Teams</Typography>
                                </Box>,


                            },
                            {
                                text: "Calender",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <CalendarMonthOutlinedIcon />
                                    <Typography sx={{ fontSize: '12px' }}>Calender</Typography>
                                </Box>,


                            },
                            {
                                text: "Calls",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <CallOutlinedIcon style={{ borderRadius: '100%' }} />
                                    <Typography sx={{ fontSize: '12px' }}>Calls</Typography>
                                </Box>,


                            },
                            {
                                text: "Files",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <InsertDriveFileOutlinedIcon style={{ borderRadius: '100%' }} />
                                    <Typography sx={{ fontSize: '12px' }}>Files</Typography>
                                </Box>,


                            },
                            {
                                text: "Files",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <InsertDriveFileOutlinedIcon style={{ borderRadius: '100%' }} />
                                    <Typography sx={{ fontSize: '12px' }}>Files</Typography>
                                </Box>,


                            },
                            {
                                text: "Van Arsdel",
                                icon: <Box sx={{ textAlign: 'center', borderLeft: '4px solid #4F52B2' }}>
                                    <Box sx={{ display: 'flex', justifyContent: "center", marginLeft: '3%' }}>
                                        <Image src={icon} style={{ width: '39px' }} />
                                    </Box>
                                    <Typography sx={{ fontSize: '10px', color: '#4F52B2', marginLeft: '3%' }}>Van Arsdel</Typography>
                                </Box>,


                            },
                            {
                                text: "",
                                icon: <Box sx={{ textAlign: 'center' }}>
                                    <MoreHorizIcon />
                                </Box>,


                            },
                            {
                                text: "",
                                icon: <Box sx={{ textAlign: 'center', }}>
                                    <Box >
                                        <AddIcon style={{ width: '24px', height: '24px', border: '2px solid #616161', borderRadius: '4px' }} />
                                    </Box>
                                </Box>,


                            },
                        ].map((item) => (
                            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
                                <Link href={item.link || "#"} passHref>
                                    <ListItemButton
                                        sx={[
                                            {
                                                minHeight: 48,
                                                px: 2.5,
                                            },
                                            open
                                                ? {
                                                    justifyContent: "initial",
                                                }
                                                : {
                                                    justifyContent: "center",
                                                },
                                        ]}
                                    >
                                        <ListItemIcon
                                            sx={[
                                                {
                                                    minWidth: 0,
                                                    justifyContent: "center",
                                                },
                                                open
                                                    ? {
                                                        mr: 3,
                                                    }
                                                    : {
                                                        mr: "auto",
                                                    },
                                            ]}
                                        >
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={item.text}
                                            sx={[
                                                open
                                                    ? {
                                                        opacity: 1,
                                                    }
                                                    : {
                                                        opacity: 0,
                                                    },
                                            ]}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>


                </Drawer>
            </Box>

            {/* Bottom navigation for small screens */}
            <AppBar 
                position="fixed" 
                sx={{ 
                    top: 'auto', 
                    bottom: 0, 
                    display: { xs: 'block', lg: 'none' },
                    bgcolor: 'white',
                    borderTop: '1px solid #F0F0F0',
                    boxShadow: 'none', // Remove default shadow
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-around', minHeight: '56px' }}> {/* Adjust minHeight as needed */}
                    {bottomNavItems.map((item, index) => (
                        <IconButton 
                            key={item.label} 
                            sx={{ 
                                color: item.color || '#242424',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                '&:hover': {
                                    bgcolor: 'transparent', // Prevent hover background change
                                },
                            }}
                        >
                            {React.cloneElement(item.icon, { style: { color: item.color || '#242424' } })}
                            <Typography 
                                variant="caption" 
                                sx={{ 
                                    mt: 0.5, 
                                    fontSize: '10px',
                                    color: item.color || '#242424'
                                }}
                            >
                                {item.label}
                            </Typography>
                        </IconButton>
                    ))}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Page;
