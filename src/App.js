import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Toilet Paper",
        amount: 10,
        date: new Date(2020, 7, 14),
    },
    {
        id: "e2",
        title: "TV",
        amount: 799.99,
        date: new Date(2021, 2, 112),
    },
    {
        id: "e3",
        title: "Car Insurance",
        amount: 294.65,
        date: new Date(2021, 2, 28),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (newExpense) => {
        setExpenses(prevExpenses => [newExpense, ...prevExpenses])
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expenses={expenses} />
        </div>
    );
}

export default App;
