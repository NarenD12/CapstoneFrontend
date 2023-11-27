import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./NavBar";
function PastTransactions(){
    const [datas, setData]=useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:8080/api/past/details').then((response) => {
            setData(response.data)
            console.log(response.data);
        });
    };
    return(
        <div>
            <Navbar/>
            <h1 class="my-6 text-4xl font-bold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                 <span class="block w-full py-22 text-transparent  bg-clip-text leading-12 bg-gradient-to-r from-blue-600 to-green-400 lg:inline">Transactions</span> <span></span>
                    </h1>
            <table class="w-50 table table-hover table-bordered border-primary table-sm text-center"  cellPadding="8px" style={{marginLeft:"auto",marginRight:"auto"}}>
                <thead className="table-light">
                    <tr>
                        <th> Account Id</th>
                        <th> Bill Number</th>
                        <th> Type Of Transaction</th>
                        <th> Amount</th>
                    </tr>
                </thead >
                <tbody class="table-group-divider">
                    {
                        datas.map(
                            data =>
                                <tr key={data.billid}>
                                    <td>{data.accountid}</td>
                                    <td>{data.billid}</td>
                                    <td>{data.typeofTrans}</td>
                                    <td>{data.amount}</td>
                                    {/* <td>{data.username}</td> */}
                                    {/* <td>{data.balance}</td> */}
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default PastTransactions;