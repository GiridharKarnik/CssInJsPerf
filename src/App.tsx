import React, { useState, Profiler } from "react";
import styled from "styled-components";

import ListRowStyledComponent from "./components/styledComponents/ListRow";
import ListRowInlineStyles from "./components/inlineStyles/ListRow";
import ListRowCssStyled from "./components/cssStyled/ListRow";
import ListRowLinaria from "./components/linaria/ListRow";

import postMeasurements from "./network";

// import Perf from "react-addons-perf";

import data1 from "./data/data1";
import data2 from "./data/data2";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const ChangeData = styled.button`
  width: 100px;
  height: 50px;
  border: none;
`;

let measurements: { [key: string]: any } = {};

const callback = (id: string, phase: any, actualDuration: any) => {
  measurements[id] = actualDuration.toFixed(2);

  if (Object.keys(measurements).length === 4) {
    postMeasurements(measurements).then((response) => {
      console.log("posted");

      measurements = {};
    });
  }
};

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState<number>(1);

  const changeDataSource = () => {
    // Perf.start();
    dataSource === 1 ? setDataSource(2) : setDataSource(1);
  };

  let data = [];

  if (dataSource === 1) {
    data = data1;
  } else {
    data = data2;
  }

  return (
    <Container>
      <ChangeData onClick={changeDataSource}>Change data source</ChangeData>
      <Profiler id="styled-components" onRender={callback}>
        {data.map((item) => {
          return (
            <ListRowStyledComponent
              {...item}
              key={`${item.firstName} ${item.lastName} ${item.id}`}
            />
          );
        })}
      </Profiler>

      <Profiler id="inline styles" onRender={callback}>
        {data.map((item) => {
          return (
            <ListRowInlineStyles
              {...item}
              key={`${item.firstName} ${item.lastName} ${item.id}`}
            />
          );
        })}
      </Profiler>

      <Profiler id="css" onRender={callback}>
        {data.map((item) => {
          return (
            <ListRowCssStyled
              {...item}
              key={`${item.firstName} ${item.lastName} ${item.id}`}
            />
          );
        })}
      </Profiler>

      <Profiler id="linaria" onRender={callback}>
        {data.map((item) => {
          return (
            <ListRowLinaria
              {...item}
              key={`${item.firstName} ${item.lastName} ${item.id}`}
            />
          );
        })}
      </Profiler>
    </Container>
  );
};

export default App;
