import React, { useState } from "react";

export const EnquiryForm = () => {
  return (
    <div className="my-5">
      <h2 className="text-center font-bold text-lg">Enquiry Form</h2>
      <div className="form w-full border border-red-500 p-4">
        {/* Row 1 */}
        <div className="Row my-3 flex justify-between items-center gap-4">
          <div className="InputGroup w-full">
            <label>First Name: </label>
            <br />
            <input
              className="p-2 my-2 border border-black text-md w-full"
              type="text"
              placeholder="enter your name"
            />
          </div>
          <div className="InputGroup w-full">
            <label>Middle Name: </label>
            <br />
            <input
              className="p-2 my-2 border border-black text-md w-full"
              type="text"
              placeholder="Enter your Middle Name"
            />
          </div>
          <div className="InputGroup w-full">
            <label>Last Name: </label>
            <br />
            <input
              className="p-2 my-2 border border-black text-md w-full"
              type="text"
              placeholder="enter your Last Name"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="Row my-3 flex justify-between items-center gap-4">
          <div className="InputGroup w-full">
            <label>City: </label>
            <br />
            <input
              className="p-2 my-2 border border-black text-md w-full"
              type="text"
              placeholder="enter your City"
            />
          </div>
          <div className="InputGroup w-full">
            <label>Phone Number: </label>
            <br />
            <input
              className="p-2 my-2 border border-black text-md w-full"
              type="number"
              placeholder="Enter your Phone Number"
            />
          </div>
          <div className="InputGroup w-full">
            <label>Your Email: </label>
            <br />
            <input
              className="p-2 my-2 border border-black text-md w-full"
              type="number"
              placeholder="enter Your email"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="Row my-3 flex justify-between items-center gap-4">
          <div className="InputGroup w-full">
            <label>Your Message: </label>
            <br />
            <textarea
              rows="8"
              cols="5"
              className="p-2 my-2 border border-black text-md w-full"
              placeholder="enter your Message"
            />
          </div>
        </div>
        <div className="Row my-3 flex justify-between items-center gap-4">
            <button className="bg-blue-600 text-white p-2 rounded-md w-full">Submit</button>
        </div>
      </div>
    </div>
  );
};
