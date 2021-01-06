import './App.css';
import Badge from './components/Badge';

function App() {
  const data = {
    firstName: 'Matheuss',
    lastName: 'Baronasisimuss',
    status: 'Alive, for now ...',
    avatarUrl: '/static/media/me.0b542601.jpg',
    nationality: 'Earthling',
    description: "Hombre comun, estatura promedio que come mucho y hace ejercicio"
  };
  return (
    <div className="App">
      <Badge data={data} />
    </div>
  );
}

export default App;
