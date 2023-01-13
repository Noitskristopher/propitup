import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName={"John"}
        lastName={"Doe"}
        Age={29}
        hairColor={"Black"}
      />
      <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        Age={32}
        hairColor={"Blonde"}
      />
      <PersonCard
        firstName={"Kris"}
        lastName={"Cabado"}
        Age={24}
        hairColor={"Dark Brown"}
      />
      <PersonCard
        firstName={"Lebron"}
        lastName={"James"}
        Age={38}
        hairColor={"Black"}
      />
    </div>
  );
}

export default App;
