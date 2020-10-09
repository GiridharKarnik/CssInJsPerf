import React from "react";
import styled from "styled-components";

import "./ListRow.css";

interface ListRowProps {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
}

const ListRow: React.FC<ListRowProps> = ({ firstName, lastName, emailId }) => {
  return (
    <div className="container">
      <div className="firstName">{firstName}</div>
      <div className="lastName">{lastName}</div>
      <div className="emailId">{emailId}</div>
    </div>
  );
};

export default ListRow;
