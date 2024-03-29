import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

const LineBarAreaComposedChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="70%">
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="gu" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="R06" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="POP" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="REH" stroke="#ff7300" />
        <Scatter dataKey="PTY" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};
export default LineBarAreaComposedChart;
