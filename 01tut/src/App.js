import Header from './Header'; 
import Content from './Content'; 
import Footer from './Footer';

// JSX -> Allows us to implement html stlye code with
// javascript components. 
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
