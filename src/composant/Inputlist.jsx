import React from 'react'
import BarChart from './LineChart'
import swal from 'sweetalert';

export default function Inputlist({incomes,expenses,removeExpense,removeIncome}) {
  return (
    
    <div className='row my-3'>
        <div className="cold-md-10 mx-auto">
           <div className=" d-flex flex-row justify-content-around">
                        <div className="cold-md-5">
                            <h4 className="mb-3">  Expenses </h4>
                                <ul className="list-group">
                                    {
                                        expenses.map(expense=> <li key={expense.id} className="list-group list-group">
                                                    <div className="d-flex w-100 justify-content-betwenn">
                                                        <h6 className="mb-1"> {expense.label} ${expense.amount}</h6>
                                                        <span className="text-danger"
                                                        onClick={()=>removeExpense(expense.id)}>
                                                            <i className="fa fa-trash"></i>
                                                            </span>  
                                                            
                                                    </div>
                                    </li>)
                                    }
                                </ul>
                        </div>
                        <div className='income float-right '>
                            <div className="cold-md-5 float-right">
                                <h4 className="mb-3 ">  incomes </h4>
                                    <ul className="list-group">
                                    {
                                            incomes.map(income=> <li key={income.id} className="list-group list-group">
                                                        <div className="d-flex w-100 justify-content-betwenn">
                                                            <h6 className="mb-1"> {income.label} ${income.amount}</h6>
                                                            <span className="text-danger"
                                                            onClick={()=>removeIncome(income.id)}>
                                                                <i className="fa fa-trash"></i>
                                                                </span>  
                                                            
                                                        </div>
                                        </li>)
                                        }
                                    </ul>
                            </div>
                        </div>
            </div>
           

        </div>
    </div>
  )
}