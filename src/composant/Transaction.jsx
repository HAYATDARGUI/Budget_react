
import React from 'react';
import { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Transaction({addIncome,addExpense}) {
    const [label, setLabel] = useState("");
    const [amount, setAmount] = useState("");
    const addInc = (income)=>{
        addIncome(income);
        setTimeout(() =>{
            setLabel("");
            setAmount("");
        },500)
    }
    const addEx = (expense)=>{
        addExpense(expense);
        setTimeout(() =>{
            setLabel("");
            setAmount("");
        },500)
    }
  return (
    <div className='row'>
        <div className="col-md-6 mx-auto">
            <div  className="row g-3 my-3">
                <div className="col-auto">
                    <button 
                    disabled ={!label || !amount}
                    onClick={() => addInc({id:uuidv4(),label,amount})}
                    className="btn btn-outline-success">
                    <i className="fa fa-plus"></i>
                    </button>
                </div>
                <div className="col-auto">
                    <input type="text" placeholder='label'
                    value={label}
                    onChange={(e)=>setLabel(e.target.value)}
                    className="form-control mb-2" />
                    <input type="number" placeholder='amount'
                    value={amount}
                    onChange={(e)=>setAmount(e.target.value)}
                     className="form-control mb-2" />
                </div>
                <div className="col-auto">
                <button 
                    disabled ={!label || !amount}
                    onClick={() => addEx({id:uuidv4(),label,amount})}
                    className="btn btn-outline-danger">
                    <i class="fa fa-minus"></i>
                    </button>
                </div>
            </div>

        </div>
    </div>
  )
}
