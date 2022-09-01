import * as React from "react";
import styled from "styled-components";

const DAppsCard = (props) => (
  <Container>
    <Row>
      <Image source={props.image} />
      <RowInfo>
        <RowHead>{props.head}</RowHead>
        <RowBody>{props.body}</RowBody>
      </RowInfo>
    </Row>
    <Row>
      <Image source={props.image} />
      <RowInfo>
        <RowHead>{props.head}</RowHead>
        <RowBody>{props.body}</RowBody>
      </RowInfo>
    </Row>
    <Row>
      <Image source={props.image} />
      <RowInfo>
        <RowHead>{props.head}</RowHead>
        <RowBody>{props.body}</RowBody>
      </RowInfo>
    </Row>
  </Container>
);

export default DAppsCard;

const Container = styled.View`
  width: 280px;
  padding: 5px 30px 8px 0;
  margin: 0 8px 8px 8px;
`;
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
`;
const Image = styled.Image`
  width: 40px;
  height: 40px;
`;
const RowInfo = styled.View`
  margin-left: 10px;
`;
const RowHead = styled.Text`
  font-size: 16px;
`;
const RowBody = styled.Text`
  font-size: 14px;
  color: #979797;
  margin-top: 2px;
  line-height: 20px;
`;
