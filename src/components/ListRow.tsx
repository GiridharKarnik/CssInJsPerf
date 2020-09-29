import React from "react";
// import styled from "styled-components";
// import "./ListRow.css";

import { css } from "linaria";

// const Container = styled.div`
//   display: flex;
//   width: 100%;
//   height: 40px;
//   justify-content: center;
//   align-items: center;
// `;

// const FirstName = styled.div`
//   flex: 1;
//   font-size: 16px;
// `;

// const LastName = styled.div`
//   flex: 1;
//   font-size: 18px;
// `;

// const EmailId = styled.div`
//   flex: 1;
//   font-size: 16px;
// `;

interface ListRowProps {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
}

// const containerStyle = {
//   display: "flex",
//   width: "100%",
//   height: "40px",
//   justifyContent: "center",
//   alignItems: "center",
// };

// const firstNameStyle = {
//   flex: "1",
//   fontSize: "16px",
// };

// const lastNameStyle = {
//   flex: "1",
//   fontSize: "18px",
// };

// const emailIdStyle = {
//   flex: "1",
//   fontSize: "18px",
// };

//linaria

const containerStyle = css`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const firstNameStyle = css`
  flex: 1;
  font-size: 16px;
`;

const lastNameStyle = css`
  flex: 1;
  font-size: 16px;
`;

const emailIdStyle = css`
  flex: 1;
  font-size: 16px;
`;

const ListRow: React.FC<ListRowProps> = ({
  id,
  firstName,
  lastName,
  emailId,
}) => {
  return (
    <div className={containerStyle}>
      <div className={firstNameStyle}>{firstName}</div>
      <div className={lastNameStyle}>{lastName}</div>
      <div className={emailIdStyle}>{emailId}</div>
    </div>
  );
};

export default ListRow;
