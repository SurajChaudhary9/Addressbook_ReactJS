import React from "react";
import "./Home.css"
function Home() {
  return (
    <>
      <header className="header-content header">
        <div className="logo-content">
          <img src="../assests/logo.png" alt="" />
          <div>
            <span className="add-text">ADDRESS</span>
            <br />
            <span className="add-text add-book">BOOK</span>
          </div>
        </div>
      </header>
      <div className="main-content">
        <div className="header-content">
          <div className="add-detail-text">
            Person Details
            <div className="emp-count" />
          </div>
          {/* <a href="../pages/Address_Book.html" className="add-button">
            <img src="../assests/add-24px.svg" alt="" /> Add User
          </a> */}
          {/* <Link to = '/addressbook' className="add-button"> + Add User</Link> */}
        </div>
        <div className="table-main">
          <div className="main"></div>
          <table id="table-display" className="table">
            <tbody>
              <tr>
                <th>Fullname</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Phone Number</th>
                {/*   */}
              </tr>
              <tr>
                <td>Suraj Chaudhary</td>
                <td>Pimpri Chinchwad</td>
                <td>Pune</td>
                <td>Maharashtra</td>
                <td>411062</td>
                <td>7709911506</td>
                <td>
                  <img
                    id={1}
                    onclick="remove(this)"
                    alt="delete"
                    src="../assests/icons/delete-black-18dp.svg"
                  />
                  <img
                    id={1}
                    alt="edit"
                    onclick="upgate(this)"
                    src="../assests/icons/create-black-18dp.svg"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
