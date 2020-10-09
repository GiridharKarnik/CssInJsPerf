import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

const FirstName = styled.div`
  flex: 1;
  font-size: 16px;
`;

const LastName = styled.div`
  flex: 1;
  font-size: 18px;
`;

const EmailId = styled.div`
  flex: 1;
  font-size: 16px;
`;

interface ListRowProps {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
}

const ListRow: React.FC<ListRowProps> = ({
  id,
  firstName,
  lastName,
  emailId,
}) => {
  return (
    <Container>
      <FirstName>{firstName}</FirstName>
      <LastName>{lastName}</LastName>
      <EmailId>{emailId}</EmailId>
    </Container>
  );
};

export default ListRow;
