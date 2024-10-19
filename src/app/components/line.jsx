import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function Chartone() {
  return (
    <div>
      <BarChart
        series={[
          { data: [65] },
          { data: [80] },
          { data: [60] },
          { data: [65] },
          { data: [100] },
        ]}
        height={250}
        width={281}
        xAxis={[{ data: ["Months"], scaleType: "band" }]}
      
      />
    </div>
  );
}

export default Chartone;