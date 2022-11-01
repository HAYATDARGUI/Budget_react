
import "bootstrap/";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component }  from 'react';
import {useEffect,useState} from "react";
import Balance from "./composant/Balance";
import Inputlist from "./composant/Inputlist";
import Transaction from "./composant/Transaction";
import "./App.css"
import BarChart from "./composant/LineChart";
import swal from "sweetalert";



function App() {
 
  const [balance, setBalance] = useState(0);
  const [expenses, setExpenses] = useState([
    {
      id:1, label:"rent",amount:300
    }
  ]);
  const [incomes, setIncomes] = useState([
    {
      id:1, label:"salary",amount:5000
    }
  ]);
  useEffect(() => {
   calcBalance();
  });
  const calcBalance =()=>{
    const totalIncArray= incomes.map(income=>income.amount);
    const totalExArray= expenses.map(expense=>expense.amount)
    const totalInc=totalIncArray.reduce((amount,item)=> parseInt(amount)+parseInt(item),0);
    const totalEx=totalExArray.reduce((amount,item)=> parseInt(amount)+parseInt(item),0)
    setBalance(parseInt(totalInc)-parseInt(totalEx))
    
  }
  swal("Good job!", "You clicked the button!", "success");
  const addIncome= (income) =>{
    setIncomes([income, ...incomes]);
  }
  const addExpense= (expense) =>{
    setExpenses([expense, ...expenses]);
  }
  const removeIncome=(id)=>{
    const updatedIncomes= incomes.filter(income =>income.id !==id)

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        setIncomes(updatedIncomes);
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }
  const removeExpense=(id)=>{
    const updatedExpenses= expenses.filter(expenses =>expenses.id !==id)
    
  
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this imaginary file!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      setExpenses(updatedExpenses);
      swal("Poof! Your imaginary file has been deleted!", {
        icon: "success",
      });
    } else {
      swal("Your imaginary file is safe!");
    }
  });
}


   const totalIncArray= incomes.map(income=>income.amount);
    const totalExArray= expenses.map(expense=>expense.amount)
    const totalInc=totalIncArray.reduce((amount,item)=> parseInt(amount)+parseInt(item),0);
    const totalEx=totalExArray.reduce((amount,item)=> parseInt(amount)+parseInt(item),0)
  return (
    <div className="divapp">
      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <dir className="card">
            <div className="card-body">
            <Balance balance={balance}/>
            <Transaction addIncome={addIncome}
            addExpense={addExpense}/>
            <Inputlist 
            incomes={incomes} expenses={expenses}
            removeIncome={removeIncome} removeExpense={removeExpense} />

                  
                    <BarChart  income={totalInc} expense={totalEx}/>
                  


            </div>
          </dir>
        </div>
      </div>
    </div>
   
  );
}
export default App;


