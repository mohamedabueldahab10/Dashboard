import React from "react";
import "./D3.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "Mon",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thu",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sat",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function D3() {
  return (
    <div className="statics">
      <div className="staticsNums">
        <h4>STATISTICS</h4>

        <div className="seprated"></div>
        
        <div className="staticsAWD">
          <div>
            <p className="wordFont">Done AWD</p>
            <p className="wordFont">Pending AWD</p>
            <p className="wordFont">Returns AWD</p>
          </div>
          <div>
            <p className="wordGreen">72.593</p>
            <p className="wordYellow">9.307</p>
            <p className="wordRed">3.307</p>
          </div>
        </div>
      </div>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
