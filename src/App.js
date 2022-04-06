import './App.css';
import Container from './components/Container';
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from './context/MenuContext';

function App() {
  return (
    <div className="App">
      <MenuProvider>
        <BrowserRouter>
          <Container/>
        </BrowserRouter>
      </MenuProvider>
    </div>
  );
}

export default App;
