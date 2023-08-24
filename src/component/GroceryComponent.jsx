import React, { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { BiSun, BiMoon } from "react-icons/bi";
import { FaCartPlus } from "react-icons/fa";

import GroceryItemComponent from "./GroceryItemComponent";

const GroceryComponent = () => {
  const inputRef = useRef();
  const [item, setItem] = useState("");
  const [groceryItems, setGroceryItems] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState("");

  const handleADD = (e) => {
    e.preventDefault();
    if (item.trim() !== "") {
      setGroceryItems([
        ...groceryItems,
        { id: uuidv4(), name: item, status: "Completed ✓" },
      ]);
      setItem("");
      setErrors("");
    } else {
      setErrors("Please enter your item");
      inputRef.current.focus();
    }
  };

  const handleDeleteItem = (removeId) => {
    const filteredItems = groceryItems.filter((item) => item.id !== removeId);
    setGroceryItems(filteredItems);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <section className={`vh-100 ${darkMode ? "bg-dark text-light" : ""}`}>
      <div className={`container py-5 h-100 ${darkMode ? "bg-dark" : ""}`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-lg-9 col-xl-7">
            <div
              className={`card rounded-4 ${
                darkMode
                  ? "bg-secondary text-white"
                  : "bg-dark-subtle text-emphasis-dark"
              }`}
            >
              <div className="card-body p-4 p-2 flex-fill">
                <div className="d-flex justify-content-end">
                  <button
                    className={`btn ${
                      darkMode ? "btn-light" : "btn-secondary"
                    }`}
                    onClick={toggleDarkMode}
                  >
                    {darkMode ? <BiSun /> : <BiMoon />}
                  </button>
                </div>
                <p className="text-center my-3 pb-2 fw-bolder fs-1">
                  Grocery Cart-Buddy
                </p>

                <form>
                  <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-2 pb-2">
                    <div className="d-flex justify-content-center col-12 ">
                      <input
                        type="text"
                        ref={inputRef}
                        className={`form-control  ${
                          darkMode ? "bg-dark text-light" : ""
                        } ${darkMode ? "placeholder-white" : ""}`}
                        id="validationDefault02"
                        placeholder="Enter your item"
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <button
                        type="submit"
                        className={`btn btn-primary ${
                          darkMode ? "btn-light" : ""
                        }`}
                        onClick={handleADD}
                      >
                        <FaCartPlus />
                      </button>
                    </div>
                  </div>
                  <div className="row row-cols-lg-auto  justify-content-center ">
                    {errors ? <p className="text-danger">{errors} </p> : null}
                  </div>
                </form>

                <table
                  className={`table mb-4 table-light ${
                    darkMode ? "table-dark" : ""
                  } table-striped`}
                >
                  <thead>
                    <tr>
                      <th className="p-3">Items</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {groceryItems.map((item) => (
                      <GroceryItemComponent
                        key={item.id}
                        item={item}
                        status={item.status}
                        handleDeleteItem={handleDeleteItem}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-3"></div>
      </div>
    </section>
  );
};

export default GroceryComponent;
