import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";

import weatherForecastCode from "./data/weatherForecastCode";
import LineBarAreaComposedChart from "./LineBarAreaComposedChart";
import LineBarAreaComposedChart2 from "./LineBarAreaComposedChart2";
import Chart from "react-google-charts";

import { useEffect, useState } from "react";
// import weatherForecastSource from "./data/weatherForecastDataSource";
import nxnyCityName from "./data/nxnyCityName";
import rainCategoryDataSource from "./data/rainCategoryDataSource";
import temperatureCategoryDataSource from "./data/temperatureCategoryDataSource";

import api from "../../api/opendata";

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

const transformRainData = (weatherForecastDataSource) => {
  if (weatherForecastDataSource.length === 0) return [];

  for (let rainCategory of rainCategoryDataSource) {
    const rainData = weatherForecastDataSource.filter((source) => {
      // console.log(source.category + " " + rainCategory);
      return source.category === rainCategory;
    });

    // console.log(rainData);

    const guRainData = [];

    for (let nxny of nxnyCityName) {
      const guData = rainData.filter((rain) => {
        // console.log(rain.nx + " " + nxny.nx);
        // console.log(rain.ny + " " + nxny.ny);
        return rain.nx === nxny.nx && rain.ny === nxny.ny;
      });
      // console.log(guData);

      const rainItem = {
        gu: nxny.name,
        POP: parseInt(
          guData[guData.findIndex((gu) => gu.category === "POP")].fcstValue
        ),
        // PTY: parseInt(
        //   guData[guData.findIndex((gu) => gu.category === "PTY")].fcstValue
        // ),
        // R06: parseInt(
        //   guData[guData.findIndex((gu) => gu.category === "R06")].fcstValue
        // ),
        // REH: parseInt(
        //   guData[guData.findIndex((gu) => gu.category === "REH")].fcstValue
        // ),
      };
      // console.log(rainItem);

      guRainData.push(rainItem);
    }
    return guRainData;
  }
};

const transformTemperatureData = (weatherForecastDataSource) => {
  if (weatherForecastDataSource.length === 0) return [];

  for (let temperatureCategory of temperatureCategoryDataSource) {
    const temperatureData = weatherForecastDataSource.filter((source) => {
      return source.category === temperatureCategory;
    });

    const guTemperatureData = [];

    for (let nxny of nxnyCityName) {
      const guData1 = temperatureData.filter((temperature) => {
        return temperature.nx === nxny.nx && temperature.ny === nxny.ny;
      });
      // console.log(guData1);

      const temperatureItem = {
        city: nxny.name,
        SKY: parseInt(
          guData1[guData1.findIndex((gu) => gu.category === "SKY")].fcstValue
        ),
        // T3H: parseInt(
        //   guData1[guData1.findIndex((gu) => gu.category === "T3H")].fcstValue
        // ),
        // TMN: parseInt(
        //   guData1[guData1.findIndex((gu) => gu.category === "TMN")].fcstValue
        // ),
        // TMX: parseInt(
        //   guData1[guData1.findIndex((gu) => gu.category === "TMX")].fcstValue
        // ),
      };
      guTemperatureData.push(temperatureItem);
    }
    return guTemperatureData;
  }
};

const Home = () => {
  const classes = useStyles();

  const [weatherForecastDataSource, setWeatherForecastDataSource] = useState(
    []
  );

  useEffect(() => {
    const getData = async () => {
      const result = await api.fetchWeatherForecast();
      setWeatherForecastDataSource(result.data);
    };
    getData();
  }, []);

  return (
    // Grid 컨테이너 선언
    // spacing: Grid Item(내부요소) 들의 띄어쓰기
    <Grid container spacing={3} className={classes.container}>
      {/* Grid 아이템 선언 lg사이즈 이상일 때 2칸 */}
      {/* item 공간 핪이 12개가되면 다음행으로 넘어감 */}
      {/* 1행 */}
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={8} lg={7}>
        <Paper className={classes.paper} style={{ height: "29vh" }}>
          <h3>서울시 각 구별 강수정보</h3>
          <LineBarAreaComposedChart
            data={transformRainData(weatherForecastDataSource)}
          />
          <footer>강수량 강수확률 습도 강수유형</footer>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} lg={3}>
        <Paper className={classes.paper} style={{ height: "29vh" }}>
          <Chart
            width={"380px"}
            height={"300px"}
            chartType="Table"
            data={weatherForecastCode}
            options={{
              showRowNumber: true,
            }}
            rootProps={{ "data-testid": "1" }}
          />
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
      <Grid item xs={12} sm={12} lg={10}>
        <Paper className={classes.paper} style={{ height: "39vh" }}>
          <h3>서울시 각 구별 날씨 및 기온</h3>
          <LineBarAreaComposedChart2
            data={transformTemperatureData(weatherForecastDataSource)}
          />
          <footer>기온 낮 최고기온 아침 최저기온 하늘상태</footer>
        </Paper>
      </Grid>
      <Hidden mdDown>
        <Grid item lg={1} />
      </Hidden>
    </Grid>
  );
};
export default Home;
