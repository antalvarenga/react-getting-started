import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
    const [showForm, setFormVisibility] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setFormVisibility(false);
    };

    const addNewExpenseHandler = () => {
        setFormVisibility(true);
    };

    const cancelHandler = () => {
        setFormVisibility(false);
    };

    return (
        <div className="new-expense">
            {showForm ? (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancel={cancelHandler}
                />
            ) : (
                <button type="button" onClick={addNewExpenseHandler}>
                    Add New Expense
                </button>
            )}
        </div>
    );
};

export default NewExpense;
