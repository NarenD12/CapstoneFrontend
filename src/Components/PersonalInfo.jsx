import React, { useState, useEffect } from "react";
//import Service from "./Service";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "./NavBar";
function PersonalInfo(){

    const [datas, setData]=useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get('http://localhost:8080/api/user/1').then((response) => {
            setData(response.data)
            console.log(response.data);
        });
    };
    return (
        <div className="text-center" >
            <Navbar/>
             <h1 class="my-6 text-4xl font-bold text-center leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
                         <span class="block w-full py-22 text-transparent  bg-clip-text leading-12 bg-gradient-to-r from-blue-600 to-green-400 lg:inline">Personal Details</span> <span></span>
                    </h1>
            {/* <h1 style={{textAlign:"center"}}>Personal Details</h1> */}
            <table class="w-50 table table-hover table-bordered border-primary table-sm text-center"  cellPadding="8px" style={{marginLeft:"auto",marginRight:"auto"}}>
                <thead>
                    {/* {
                        datas.map(
                            data =>
                                <tr key={data.userid}> */}
                                    <tr><td>First Name</td>
                                    <td>Last Name</td>
                                    <td>Email</td>
                                    <td>Mobile Number</td>
                                    <td>Address</td>
                                    <td>DateofBirth</td>
                                    <td>State</td>
                                    <td>PinCode</td></tr>
                                {/* </tr> */}
                        {/* )
                    } */}
                </thead>
                <tbody>
                {
                        datas.map(
                            data =>
                                <tr key={data.userid}>
                                    <td>{data.firstname}</td>
                                    <td>{data.lastname}</td>
                                    <td>{data.email}</td>
                                    <td>{data.mobileno}</td>
                                    <td>{data.address}</td>
                                    <td>{data.dob}</td>
                                    <td>{data.state}</td>
                                    <td>{data.pincode}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table >
            <Link
                    className="btn btn-outline-primary  mx-2 "
                    to={`/editproduct/${datas.userid}`}
                  >
                    Update
                  </Link>
        </div >
    );
}
export default PersonalInfo;