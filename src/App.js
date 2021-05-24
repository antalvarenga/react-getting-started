import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 10,
      date: new Date(2020, 7, 14)
    },
    {
      id: 'e2',
      title: 'TV',
      amount: 799.99,
      date: new Date(2021, 2, 112)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.65,
      date: new Date(2021, 2, 28)
    }
  ] 

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
