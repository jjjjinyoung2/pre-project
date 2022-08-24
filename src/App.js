import { Reset } from 'styled-reset';
import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');;
body{
  background: #2d2d2d;
  color: #fff;
  font-family: Roboto, sans-serif;
}
`;

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Header />
    </div>
  );
}

export default App;
