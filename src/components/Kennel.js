import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import Location from "./LocationList/Locations"


export default class Kennel extends Component {
    render() {
        return (
            <div>
                <h1>Student Kennels</h1>
                <EmployeeList />
                <Location />
            </div>
        );
    }
}