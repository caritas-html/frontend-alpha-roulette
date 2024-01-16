import styled from "styled-components";
import triangleBg from "@/assets/triangle-background.svg";

export const BackgroundImage = styled.div`
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${triangleBg});
  width: 100%;
  height: 100vh;
  padding: 80px 0;
`;
