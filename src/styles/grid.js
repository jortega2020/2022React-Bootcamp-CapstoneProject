import styled from "styled-components";

const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "sidebar main main main"
    "sidebar content content content"
    "sidebar footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "sidebar"
      "main"
      "content"
      "footer";
  }
  color: white;
`;
const NavBar = styled.nav`
  grid-area: nav;
  padding: 0.25rem;
`;
const Main = styled.main`
  color: white;
  grid-area: main;
  padding: 0.25rem;
`;
const SideBar = styled.div`
  grid-area: sidebar;
  padding: 0.25rem;
`;

const ContentBox = styled.div`
  display: flex;
  padding: 0.25rem;
  align-items: center;
  grid-area: content;
  justify-content: center;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const ContentGrid = styled.div`
  display: Grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const Content = styled.div`
  padding: 0.25rem;
  width: 100%;
  height: 100%;
`;


const Footer = styled.footer`
  grid-area: footer;
  padding: 0.25rem;
`;

export { Container, NavBar, Main, SideBar, ContentBox, ContentGrid, Content, Footer };