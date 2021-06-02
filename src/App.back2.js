import Home from "./components/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Suspense, lazy, useState } from "react";
import { makeStyles, createMuiTheme ,ThemeProvider } from "@material-ui/core/styles";
import {green, purple} from "@material-ui/core/colors"

// Core Components
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

//Icons
// https://material-ui.com/components/material-icons/
import {
  Menu as MenuIcon,
  Home as HomeIcon,
  PlaylistAddCheck,
  TableChart,
} from "@material-ui/icons";


const TodoMaterial = lazy(() => import("./components/TodoMaterial"));
const Contact = lazy(() => import("./components/Contact"));

const drawerWidth = "240px";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    // viewport 가로가 1280px 이상일 때 적용
    [theme.breakpoints.up("lg")]: {
      width: `calc(100% - ${drawerWidth})`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
    maginRight: theme.spacing(2), // 기본 spacing(띄어쓰기)이 8px * 2
  },
  toolbar: theme.mixins.toolbar, // 툴바에 대한 기본 스타일
  content: {
    flexGrow: 1, //균등분할 크기의 1배수 만큼
    [theme.breakpoints.up("lg")]: {
      paddingLeft: drawerWidth,
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(3),
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawer: {
    [theme.breakpoints.up("lg")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  link: {
    textDecoration: "none", // 밑줄 없애기
    color: "inherit", // 폰트 컬러를 부모요소에 색상으로
  },
}));

function App() {
  const classes = useStyles(); // css 클래스 목록이 생성됨
  const [mobileOpen, setMobileOpen] = useState(false); // 앱서랍 열기/닫기
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const theme = createMuiTheme({
    palette: {
      // type: "dark",
       primary: {
          main: green[600],
       },
       secondary: {
         main: purple[600],
       }
    }
 });
  const drawer = (
    <>
      <div className={classes.toolbar} />
      <List component="nav">
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </Link>
        <Link to="/TodoMaterial" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <PlaylistAddCheck />
            </ListItemIcon>
            <ListItemText>To-Do</ListItemText>
          </ListItem>
        </Link>
        <Link to="/Contact" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <TableChart />
            </ListItemIcon>
            <ListItemText>Contacts</ListItemText>
          </ListItem>
        </Link>
      </List>
    </>
  );
  return (
    <ThemeProvider theme={theme}>
    <Router>
      <div className={classes.root}>
        <header>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              {/* color="inherit" 부모 요소의 폰토 컬러를 사용함 */}
              <IconButton
                color="inherit"
                edge="start"
                className={classes.menuButton}
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                MY WORKSPACE
              </Typography>
            </Toolbar>
          </AppBar>
          {/* 앱 서랍(Drawer) */}
          <Hidden lgUp implementation="css">
            {/* 화면이 1280px 이상일 때 숨기는 서랍 */}
            <Drawer
              variant="temporary"
              classes={{ paper: classes.drawerPaper }}
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              {drawer}
            </Drawer>
          </Hidden>
          {/* 화면이 1280px 미만일 때 숨기는 서랍 */}
          <Hidden mdDown implementation="css">
            <Drawer
              open
              variant="permanent"
              classes={{ paper: classes.drawerPaper }}
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </header>
        <main className={classes.content}>
          {/* 상단 toolbar 공간만큼 띄우기 */}
          <div className={classes.toolbar} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/todoMaterial" component={TodoMaterial}></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </Suspense>
        </main>
      </div>
    </Router>
    </ThemeProvider>
  );
}

export default App; //export: 내보내기, import: 가져오기
