import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"John"}
        lastName={"Doe"}
        hairColor={"Black"}
        initialAge={29}
      />
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        hairColor={"Blonde"}
        initialAge={32}
      />
      <PersonCard
        firstName={"Kris"}
        lastName={"Cabado"}
        hairColor={"Dark Brown"}
        initialAge={24}
      />
      <PersonCard
        firstName={"Lebron"}
        lastName={"James"}
        hairColor={"Black"}
        initialAge={38}
      />
    </div>
  );
}

export default App;
