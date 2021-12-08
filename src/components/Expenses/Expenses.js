import { useState } from "react/cjs/react.development";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const onSelectYearHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <li>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            filteredYear={filteredYear}
            onSelectYear={onSelectYearHandler}
          />
          <ExpensesChart chartData={filteredExpenses} />
          <ExpensesList items={filteredExpenses} />
        </Card>
      </div>
    </li>
  );
};

export default Expenses;
