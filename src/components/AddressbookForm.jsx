import React, { useState } from "react";
import './Addressbook.css'
import logo from '../assets/logo.jpg'
import cancel from '../assets/cancel.jpg'
import AddressbookService from "../service/AddressbookService";

function Addressbook() {
  const [contact, setContact] = useState({
    "personId":"",
    "name": "",
    "phoneNumber": "",
    "address": "",
    "city": "",
    "state": "",
    "zip": "",
    "email": ""
  });
  const handleChange = (e) =>{
    const value = e.target.value;
    setContact({...contact, [e.target.name]: value });
    };
    const saveContact = (e) => {
      e.preventDefault();
      AddressbookService.saveContact(contact)
      .then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(e)
      })
      }
  return (
    <>
      <header className="header-content header">
        <div className="logo-content">
          <img
            src={logo}
            alt="logo"
            className="logo-content-img"
            width="50px"
          />
          <div>
            <span className="addr-text">ADDRESS</span>
            <br />
            <span className="addr-text addr-book">BOOK</span>
          </div>
        </div>
      </header>
      <div className="form-content">
        <form action="#" className="form" onsubmit="save(event)">
          <div className="form-head-content">
            <div className="form-head">Person Address Form</div>
            <div className="form-logo-content">
              {/* home.html for redirecting */}
              <a href="/pages/home.html">
                <img src={cancel} 
                style={{ height: 35, borderRadius:90 }} />
              </a>
            </div>
          </div>
          <div className="row-content">
            <label className="label text" htmlFor="name">
              Full Name
            </label>
            <input
              className="input"
              type="text"
              name="name"
              value={contact.name}
              onChange={(e) => handleChange(e)}
              id="name"
              required=""
            />
            <error-output className="name-error" htmlFor="text" />
          </div>
          <div className="row-content">
            <label className="label text" htmlFor="address">
              Address
            </label>
            <textarea
              className="input"
              id="address"
              name="address"
              value={contact.address}
              onChange={(e) => handleChange(e)}
              style={{ height: 100 }}
              required=""
              defaultValue={""}
            />
            <error-output
              id="address-error"
              className="address-error"
              htmlFor="address"
            />
          </div>
          <div className="row-content-exp">
            <div className="oneRow-content">
              <label className="label text" htmlFor="city">
                City
              </label>
              <select
                className="select-input"
                id="city"
                name="city"
                value={contact.city}
                onChange={(e) => handleChange(e)}
                required=""
              >
                <option value="" selected="" disabled="" hidden="">
                  Select City
                </option>
                <option value="Allahabad">Allahabad</option>
                <option value="Amritsar">Amritsar</option>
                <option value="Bhubneswa">Bhubneswar</option>
                <option value="Cuttack">Cuttack</option>
                <option value="Chennai">Chennai</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Bhopal">Bhopal</option>
                <option value="Patna">Patna</option>
                <option value="Ranchi">Ranchi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Vaishali">Vaishali</option>
                <option value="Ramgarh">Ramgarh</option>
                <option value="Hajipur">Hajipur</option>
              </select>
            </div>
            <div className="oneRow-content">
              <label className="label text" htmlFor="state">
                State
              </label>
              <select
                className="select-input"
                id="state"
                name="state"
                value={contact.state}
                onChange={(e) => handleChange(e)}
                required=""
              >
                <option value="" selected="" disabled="" hidden="">
                  Select State
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadar and Nagar Haveli">
                  Dadar and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="oneRow-content">
              <label className="label text" htmlFor="zip">
                Zip
              </label>
              <input
                className="input"
                type="text"
                name="zip"
                value={contact.zip}
                onChange={(e) => handleChange(e)}
                id="zip"
                required=""
              />
            </div>
          </div>
          <div className="row-content">
            <label className="label text" htmlFor="phone">
              Phone Number
            </label>
            <input
              className="input"
              type="text"
              name="phoneNumber"
              value={contact.phoneNumber}
              onChange={(e) => handleChange(e)}
              id="phone"
              required=""
            />
            <error-output className="phone-error" htmlFor="text" />
          </div>
          <div className="row-content">
            <label className="label text" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              type="text"
              name="email"
              value={contact.email}
              onChange={(e) => handleChange(e)}
              id="email"
              required=""
            />
            <error-output className="email-error" htmlFor="text" />`
          </div>
          <div className="add-reset">
            
            <button onClick={saveContact} type="submit" className="button addButton" id="addButton">
              Add
            </button>
            <button
              type="reset"
              onclick="resetForm()"
              className="resetButton button"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
  }
export default Addressbook;
