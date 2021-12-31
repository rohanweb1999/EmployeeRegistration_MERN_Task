import { React, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Axios from 'axios'

const Dashboard = () => {
    const [searchData, setSearchData] = useState("");
    const [employeeList, setEmployeeList] = useState([]);
    const [tempList, setTempList] = useState([]);

    useEffect(() => {
        Axios.get(`/getEmployees`)
            .then((res) => {
                setEmployeeList(res.data)
            })
    }, [])

    const handleSearch = (searchEmployee) => {
        setEmployeeList(tempList.filter((ele) => ele.firstName === searchEmployee));
    }

    const handleDelete = (id) => {
        Axios.delete(`/${id}`)
            .then(() => {
                window.location.reload();
            })
            .catch(err => {
                console.log("error" + err);
            })
    }

    return (
        <div className="das-main-div">
            <div className="das-sub-div">
                <input onChange={e => setSearchData(e.target.value)} value={searchData} placeholder="Search Employee..." />
                <button onClick={() => { handleSearch(searchData, setSearchData("")) }}>Search</button>
            </div>
            <div>
                {employeeList ? (
                    <div className="list-div">
                        {employeeList.map((element, index) => {
                            // return <p key={element.id}>{JSON.stringify(element)}</p>;
                            return (
                                <div className="employeeData" key={element.id}>
                                    <div className="employeeFeild">
                                        <label>FirstName:-</label>
                                        <p>{element.firstName}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>LastName:-</label>
                                        <p>{element.lastName}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Email:-</label>
                                        <p>{element.email}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Contact:-</label>
                                        <p>{element.contact}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Profession:-</label>
                                        <p>{element.profession}</p>
                                    </div>
                                    <div className="employeeFeild">
                                        <label>Salary:-</label>
                                        <p>{element.salary}</p>
                                    </div>
                                    <div className="functionalButtons">
                                        <NavLink to={`/signUp/:?id=${element._id}`}>
                                            <button>Edit</button>
                                        </NavLink>

                                        <button onClick={() => handleDelete(element._id)}>Delete</button>

                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="dataNotFound">
                        <p>No Data Found</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;