import React, { useState, useEffect, Profiler } from "react";
import styled from "styled-components";
import ListRow from "./components/ListRow";

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

const callback = (
  id: any,
  phase: any,
  actualDuration: any,
  baseTime: any,
  startTime: any,
  commitTime: any
) => {
  console.log(`${id}'s ${phase} phase:`);
  console.log(`Actual Duration: ${actualDuration}`);
  // console.log(`Base time: ${baseTime}`);
  // console.log(`Start time: ${startTime}`);
  // console.log(`Commit time: ${commitTime}`);
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

  useEffect(() => {
    return () => {
      console.log("component updated");
      // Perf.stop();
      // Perf.printInclusive();
      // Perf.printWasted();
    };
  });

  return (
    <Container>
      <ChangeData onClick={changeDataSource}>Change data source</ChangeData>
      <Profiler id="root" onRender={callback}>
        {data.map((item) => {
          return (
            <ListRow
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
