import React from "react";
import styled from "styled-components";
import { ResponsiveBar } from "@nivo/bar";
import measurements from "../measure/measurements.json";

const Container = styled.div`
  height: 700px;
  width: 100%;
`;

const fakeData = [
  {
    renderCount: 0,
    "hot dog": 114,
    "hot dogColor": "hsl(290, 70%, 50%)",
    burger: 161,
    burgerColor: "hsl(28, 70%, 50%)",
    sandwich: 144,
    sandwichColor: "hsl(225, 70%, 50%)",
    kebab: 195,
    kebabColor: "hsl(56, 70%, 50%)",
    fries: 197,
    friesColor: "hsl(72, 70%, 50%)",
    donut: 36,
    donutColor: "hsl(92, 70%, 50%)",
  },
  {
    renderCount: 1,
    "hot dog": 64,
    "hot dogColor": "hsl(233, 70%, 50%)",
    burger: 42,
    burgerColor: "hsl(102, 70%, 50%)",
    sandwich: 37,
    sandwichColor: "hsl(54, 70%, 50%)",
    kebab: 131,
    kebabColor: "hsl(82, 70%, 50%)",
    fries: 180,
    friesColor: "hsl(358, 70%, 50%)",
    donut: 181,
    donutColor: "hsl(109, 70%, 50%)",
  },
];

const MyResponsiveBar = ({ data /* see data tab */ }: { data: any }) => (
  <ResponsiveBar
    data={data}
    keys={Object.keys(measurements[0])}
    indexBy="renderCount"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    groupMode="grouped"
    colors={{ scheme: "nivo" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#38bcb2",
        size: 4,
        padding: 1,
        stagger: true,
      },
      {
        id: "lines",
        type: "patternLines",
        background: "inherit",
        color: "#eed312",
        rotation: -45,
        lineWidth: 6,
        spacing: 10,
      },
    ]}
    fill={[
      {
        match: {
          id: "fries",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "render count",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "first paint duration in ms",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

const Metrics = () => {
  if (measurements.length === 0) {
    return <div>Awaiting results...</div>;
  }

  const data = measurements.map((measurement, index) => {
    return { renderCount: index, ...measurement };
  });

  return (
    <Container>
      <MyResponsiveBar data={data} />
    </Container>
  );
};

export default Metrics;
