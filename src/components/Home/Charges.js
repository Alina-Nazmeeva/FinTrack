import React, { Component } from 'react';
import '../Home/Home.css';

export default class Charges extends Component {
    render(){
        return(
            <div>
                <div className="select-panel">
                    <label>
                        <span>My Charges</span>
                        <select className="period-input">
                            <option value="whole-time">whole time</option>
                            <option value="month">this month</option>
                            <option value="week">this week</option>
                            <option value="day">today</option>
                        </select>
                    </label>
                    <button className="add-btn">Add More</button>
                </div>
                <table className="home-table">
                    <thead>
                        <tr>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Money</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Food</td>
                            <td></td>
                            <td>12/09/2020</td>
                            <td>$13</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Clothes</td>
                            <td></td>
                            <td>11/09/2020</td>
                            <td>$22</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Restoraunts</td>
                            <td>Dinner with John</td>
                            <td>10/09/2020</td>
                            <td>$12</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Pets</td>
                            <td></td>
                            <td>02/08/2020</td>
                            <td>$15</td>
                            <td>...</td>
                        </tr>
                        <tr>
                            <td>Utility bills</td>
                            <td></td>
                            <td>21/08/2020</td>
                            <td>$10</td>
                            <td>...</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}