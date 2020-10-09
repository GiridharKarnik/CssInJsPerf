import React from "react";

interface ListRowProps {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
}

const containerStyle = {
  display: "flex",
  width: "100%",
  height: "40px",
  justifyContent: "center",
  alignItems: "center",
};

const firstNameStyle = {
  flex: "1",
  fontSize: "16px",
};

const lastNameStyle = {
  flex: "1",
  fontSize: "18px",
};

const emailIdStyle = {
  flex: "1",
  fontSize: "18px",
};

const ListRow: React.FC<ListRowProps> = ({
  firstName,
  lastName,
  emailId,
}) => {
  return (
    <div style={containerStyle}>
      <div style={firstNameStyle}>{firstName}</div>
      <div style={lastNameStyle}>{lastName}</div>
      <div style={emailIdStyle}>{emailId}</div>
    </div>
  );
};

export default ListRow;
