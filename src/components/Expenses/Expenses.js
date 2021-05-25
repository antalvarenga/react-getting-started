import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
    const [selectedYear, setSelectedYear] = useState('2021')

    const selectedYearHandler = year => {
        setSelectedYear(year)
        console.log(selectedYear)
    }

    return (
            <Card className="expenses">
                <ExpensesFilter onYearSelect={selectedYearHandler} selectedYear={selectedYear}/>
                <ExpenseItem
                    title={props.expenses[0].title}
                    amount={props.expenses[0].amount}
                    date={props.expenses[0].date}
                />
                <ExpenseItem
                    title={props.expenses[1].title}
                    amount={props.expenses[1].amount}
                    date={props.expenses[1].date}
                />
                <ExpenseItem
                    title={props.expenses[2].title}
                    amount={props.expenses[2].amount}
                    date={props.expenses[2].date}
                />
            </Card>
    );
}

export default Expenses
