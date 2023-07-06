import './App.css';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Card />
      <CardContainer />
    </div>
  );
}

export default App;
