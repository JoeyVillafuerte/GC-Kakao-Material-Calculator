import React, { useState } from "react";
import Select from "react-select";
import "./calculator.css";
import info from "../info.json";

function Calculator() {
  const [unitClass, setClass] = useState("");
  // const [imprintInit, setImprintInit] = useState("0");
  const [imprintFinal, setImprintFinal] = useState("0");

  const [modalOpen, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modalOpen);
    console.log(unitClass);
    // console.log(imprintInit);
    console.log(imprintFinal);
    console.log(searchImprint(info, imprintFinal));
  };

  if (modalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const unitClasses = [
    { value: "Assault", label: "Assault" },
    { value: "Tank", label: "Tank" },
    { value: "Ranger", label: "Ranger" },
    { value: "Mage", label: "Mage" },
    { value: "Healer", label: "Healer" },
  ];

  function searchImprint(array, valueToFind) {
    for (let i = 0; i < array.length; i++) {
      if (array[i]["name"] === valueToFind.toString()) {
        return (array[i])
      }
    }
    return -1;
  }

  function searchClass(array, valueToFind) {
    for (let i = 0; i < array.length; i++) {
      if (array[i]["class"] === valueToFind.toString()) {
        return (array[i])
      }
    }
    return -1;
  }

    function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#F9C1F3",
        primary: "#0AAD50",
      },
    };
  }

  return (
    <div>
      <h1>Soul Imprint Calculator</h1>
      <br />

      <div className="App">
        <p className="introP">
          How it works: <br />
          Input the class of the unit you want to soul imprint, then the desired
          level you wish to achieve. <br />
          For example, if you wanted to SI 15 an Arme from SI 0, you'd select
          the Mage Class and input Soul Imprint 15. <br />
          Each final tier (SI5, SI10, SI15), makes the assumption that you're
          unlocking all 9 traits, instead of the 7 needed to access the final
          trait.
        </p>
        <br />

        <div className="input-display">
          <h3>Current Class Selected: {unitClass}</h3>
          {/*<h3>Initial Soul Imprint Level: {imprintInit}</h3>*/}
          <h3>Goal Soul Imprint Level: {imprintFinal}</h3>
        </div>

        {/* Dropdown list */}
        <div style={{ paddingLeft: "40vw", paddingRight: "40vw" }}>
          <Select
            theme={customTheme}
            options={unitClasses}
            className="classDropDown"
            placeholder="Select Unit Type"
            isSearchable
            autoFocus
            menuPlacement="auto"
            menuPosition="fixed"
            onChange={(e) => setClass(e.value)}
          />
        </div>

        {
        /* Imprint Initial 
        <div className="inputs">
          <div className="field">
            <label className="label">Soul Imprint Initial Level: </label>
            <input
              type="number"
              min="0"
              max="15"
              className="input"
              placeholder="0"
              value={imprintInit}
              onChange={(e) => setImprintInit(e.target.value)}
            />
          </div>
        </div>
        */
        }

        {/* Imprint Final */}
        <div className="inputs">
          <div className="field">
            <label className="label">Soul Imprint Final Level: </label>
            <input
              type="number"
              min="0"
              max="15"
              className="input"
              placeholder="0"
              value={imprintFinal}
              onChange={(e) => setImprintFinal(e.target.value)}
            />
          </div>
        </div>

        {/* Modal Display for final calculations */}
        <>
          <button onClick={toggleModal} className="btn-modal">
            Calculate
          </button>

          {modalOpen && (
            <div className="modal">
              <div onClick={toggleModal} className="overlay"></div>
              <div className="modal-content">
                <h2>Information Inputted</h2>
                <br />
                <p>
                  Current Class Selected: {unitClass} <br />
                  {/*Initial Soul Imprint Level: {imprintInit}*/}
                  <br />
                  Goal Soul Imprint Level: {imprintFinal}
                  <br /><br/>
                  <h3>Final Calculations</h3>
                  {"Class: " + searchClass(info, unitClass).class } <br/>
                  {"Orange shards: " + searchClass(info, unitClass).orange}<br/>
                  {"Blue shards: " + searchClass(info, unitClass).blue}<br/>
                  {"Purple shards: " + searchClass(info, unitClass).purple} <br/><br/>
                  {"SI Level: " + searchImprint(info, imprintFinal).name} <br/>
                  {"Core Unlocked? : " + searchImprint(info, imprintFinal).core} <br/>
                  {"Essence Required: " + searchImprint(info, imprintFinal).essence} <br/>
                  {"Total Cubes Required: "  + searchImprint(info, imprintFinal).cubes} <br/>
                  {"Total Duplicates Required: "  + searchImprint(info, imprintFinal).dupes}
                </p>
                <button className="close-modal" onClick={toggleModal}>
                  CLOSE
                </button>
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
}

export default Calculator;
