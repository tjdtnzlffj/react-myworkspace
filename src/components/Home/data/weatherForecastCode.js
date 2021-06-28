const weatherForecastCode = [
  [
    { type: "string", label: "항목명" },
    { type: "string", label: "항목값" },
    { type: "string", label: "단위" },
  ],
  ["강수확률", "POP", "%"],
  ["강수형태", "PTY", "맑음(1), 구름많음(3), 흐림(4)"],
  ["강수량", "R06", "mm"],
  ["습도", "REH", "%"],
  [
    "하늘상태",
    "SKY",
    "없음(0), 비(1), 비/눈(2), 눈(3), 소나기(4), 빗방울(5), 빗방울/눈날림(6), 눈날림(7)",
  ],
  ["기온", "T3H", "℃"],
  ["아침 최저기온", "TMN", "℃"],
  ["낮 최고기온", "TMX", "℃"],
];

export default weatherForecastCode;
