import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  // 내부 페이퍼에 스타일을 지정
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  // 화면이 1280px 이상이면 그리드 컨테이너 위쪽에 마진을 줌.
  container: {
    [theme.breakpoints.up("lg")]: {
      marginTop: "80px",
    },
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    // Grid 컨테이너 선언
    // spacing: Grid Item(내부요소) 들의 띄어쓰기
    <Grid container spacing={3} className={classes.container}>
      {/* Grid 아이템 선언 lg사이즈 이상일 때 2칸 */}
      {/* item 공간 핪이 12개가되면 다음행으로 넘어감 */}
      {/* 1행 */}
      <Hidden mdDown>
        <Grid item lg={2} />
      </Hidden>
      <Grid item xs={12} sm={7} lg={5}>
        <Paper className={classes.paper} style={{ height: "20vh" }}>
          xs={12} sm={7} lg={5}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5} lg={3}>
        <Paper className={classes.paper} style={{ height: "20vh" }}>
          xs={12} sm={5} lg={3}
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={2} />
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={2} />
      </Hidden>
      <Grid item xs={12} sm={12} lg={8}>
        <Paper className={classes.paper} style={{ height: "40vh" }}>
          item xs={12} sm={12} lg={8}
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={2} />
      </Hidden>
    </Grid>
  );
};
export default Home;
