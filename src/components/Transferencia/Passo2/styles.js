import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;

`;

export const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: #fbff30;
  font-family: "Roboto", Sans-serif;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Subtitle = styled.span`
  text-align: center;
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const DivChave = styled.div`
  width: 100%;
  max-width: 700px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 300px;
  padding: 0 16px;
  margin: 30px 0;
`;

export const DivTitleChave = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ChaveTitle = styled.span`
  color: #fbff30;
  font-family: "Roboto", Sans-serif;
  font-size: 25px;
  font-weight: 600;
`;

export const ChavePix = styled.span`
  color: #fff;
`;

export const ChaveSubtitle = styled.span`
  font-family: "Roboto", Sans-serif;
  font-size: 19px;
  color: #fbff30;
`;

export const DivTED = styled.div`
  width: 100%;
  max-width: 700px;
  border-radius: 8px;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 360px;
  padding: 0 16px;
  margin: 30px 0;
`;

export const TitleTED = styled.span`
  color: #fbff30;
  font-family: "Roboto", Sans-serif;
  font-size: 25px;
  font-weight: 600;
`;

export const LinhaTED = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const DocTED = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 19px;
`;

export const DadoTED = styled.span`
  color: #ffffff;
  font-family: "Roboto", Sans-serif;
  font-size: 19px;
  font-weight: bold;
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const MessageCopied = styled.span`
  margin-left: 8px;
  color: red;
`;
