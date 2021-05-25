import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState("2021");

    const filteredExpenses = props.expenses.filter(
        (expense) => expense.date.getFullYear().toString() === selectedYear
    );

    const selectedYearHandler = (year) => {
        setSelectedYear(year);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                onYearSelect={selectedYearHandler}
                selectedYear={selectedYear}
            />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
