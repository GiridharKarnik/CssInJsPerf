import React from "react";

import { css } from "linaria";

interface ListRowProps {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
}

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
