import Footer from './Footer';
import Minesweeper from './Minesweeper';

function App() {
  return (
    <div className="App">
      <Minesweeper cols={30} rows={24} />
      <Footer />
    </div>
  );
}

export default App;
