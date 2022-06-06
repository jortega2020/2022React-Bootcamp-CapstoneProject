import { AppRouter } from './routers/AppRouter';
import { Container } from './styles/grid';
import { FooterSection } from './components/UI/Footer';
import './App.css';

function App() {
  return (
    <Container>
      <AppRouter />
      <FooterSection />
    </Container>
  );
}

export default App;
