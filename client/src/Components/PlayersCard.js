import React from "react";
import { Card, Icon } from "semantic-ui-react";
import styled from "styled-components";

const PlayersCard = ({ name, country, searches }) => {
  return (
    <div className="playercard">
      <TestDiv >
        <Card.Header>
          <h2>Name: {name}</h2>
        </Card.Header>
        <Card.Meta>
          <h3>Country: {country}</h3>
        </Card.Meta>
        <Card.Description>
          <h3>
            <Icon name="user" />
            Searches: {searches}
          </h3>
        </Card.Description>
      </TestDiv>
    </div>
  );
};
export default PlayersCard;

const TestDiv = styled.div`
  width: 50%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0 1px 6px -2px #000;
  background-color: #fff;
  margin-bottom: 30px;
  align-items: center;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: 1.4rem;
  }
`;
