import React, { useState } from "react";
import "../style.css";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function ResultChart() {
  const Categories = [
    { column1: "Kiddies", column2: "Sub Junior", column3: "Muallim" },
    { column1: "Sub Junior", column2: "Junior" },
    { column1: "Junior", column2: "Senior" },
    { column1: "Senior", column2: "General" },
    { column1: "Super Senior" },
    { column1: "General" },
    { column1: "Alumni" },
  ];

  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(true);
  const [eventLinks, setEventLinks] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(""); // Initialize selectedCategory
  const [selectedEvent, setSelectedEvent] = useState("");
  const [selectedBoysEvent, setSelectedBoysEvent] = useState("");
  const [selectedGirlsEvent, setSelectedGirlsEvent] = useState("");
  const [selectedOthersEvent, setSelectedOthersEvent] = useState("");

  console.log("selected Event   => ", selectedEvent);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginClick = () => {
    // Check if the entered username and password match the predefined values
    if (username === user && password === pass) {
      setAuthorized(true);
      setShow(false);
    } else {
      setAuthorized(false);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleEventLinkChange = (category, event, link) => {
    console.log("handle cat===> ", category);
    console.log("handle event===> ", event);
    console.log("handle link===> ", link);

    setEventLinks((prevLinks) => ({
      ...prevLinks,
      [category]: {
        ...(prevLinks[category] || {}),
        [event]: link,
      },
    }));
  };

  const updateEventLinksAndStore = (category, event, link) => {
    // Update the eventLinks state
    setEventLinks((prevLinks) => ({
      ...prevLinks,
      [category]: {
        ...(prevLinks[category] || {}),
        [event]: link,
      },
    }));

    // Store the updated eventLinks data in sessionStorage
    sessionStorage.setItem("eventLinks", JSON.stringify(eventLinks));
  };

  const handleAddLink = () => {
    if (selectedCategory && selectedEvent) {
      // Check if both category and event are selected
      const newLink = "YOUR_GOOGLE_DRIVE_LINK"; // Replace with your actual link
      setEventLinks((prevLinks) => ({
        ...prevLinks,
        [selectedCategory]: {
          ...(prevLinks[selectedCategory] || {}),
          [selectedEvent]: newLink,
        },
      }));
    }
  };

  const user = "admin1323";
  const pass = "7034848181";

  const Events = {
    Boys: {
      Kiddies: ["101 islamic song", "102 story telling", "103 drawing"],
      "Sub Junior": [
        "201 - QIRA`ATH",
        "202 - HIFL",
        "203 - MADHUNNABI SONG",
        "204 - GROUP SONG",
        "205 - HAND WRITING ARABIC MALAYALAM",
        "206 - PENCIL DRAWING",
        "207 - MEMORY TEST",
        "208 - QUIZ",
      ],
      Junior: [
        "301 - QIRA`ATH",
        "302 - HIFL",
        "303 - ADA'N",
        "304 - ELOCUTION",
        "305 - ARABIC SONG",
        "306 - ISLAMIC SONG",
        "307 - ISLAMIC GROUP SONG",
        "308 - MAPPILAPPATTU",
        "309 - URDU SONG",
        "310 - ARABIC HAND WRITING",
        "311 - PAINTING (WATER COLOR)",
        "312 - QUIZ",
      ],
      Senior: [
        "401 - QIRA`ATH",
        "402 - HIFL",
        "403 - ADA`N",
        "404 - ELOCUTION",
        "405 - ISLAMIC SONG ARABIC",
        "406 - ISLAMIC SONG",
        "407 - ENGLISH ELOCUTION",
        "408 - URDU ELOCUTION",
        "409 - MAPPILAPPATTU",
        "410 - POSTER COMPOSITION",
        "411 - ARABIC CALLIGRAPHY",
        "412 - QUIZ",
      ],
      "Super Senior": [
        "501 - QIRA`ATH",
        "502 - HIFL",
        "503 - ADA`N",
        "504 - ARABIC ELOCUTION",
        "505 - ELOCUTION",
        "506 - ISLAMIC SONG ARABIC",
        "507 - ISLAMIC SONG",
        "508 - SPEECH AND SONG",
        "509 - MAPPILAPPATTU",
        "510 - ESSAY WRITING",
        "511 - NEWS READING",
        "512 - ARABIC VOCABULARY",
        "513 - ARABIC CALLIGRAPHY",
      ],
      General: [
        "601 - BURDA RECITATION",
        "602 - MAULID RECITATION",
        "603 - DUFF MUTTU",
        "604 - ARABIC GROUP SONG",
      ],
      Alumni: [
        "701 - SPOT ELOCUTION",
        "702 - ISLAMIC SONG MASHUP",
        "703 - MAPPILAPPATTU",
        "704 - ISLAMIC SONG ARABIC",
        "705 - MASTER HUNT",
        "706 - GRAPHIC POSTER DESIGNING",
        "707 - NEWS WRITING",
      ],
    },
    Girls: {
      "Sub Junior": [
        "1001 - HAND WRITING ARABIC MALAYALAM",
        "1002 - STORY COMPOSITION",
        "1003 - PENCIL DRAWING",
      ],
      Junior: [
        "1004 - HAND WRITING ARABIC MALAYALAM",
        "1005 - COLLAGE",
        "1006 - PAINTING (WATER COLOUR)",
      ],
      Senior: [
        "1007 - POSTER COMPOSITION",
        "1008 - ARABIC CALLIGRAPHY",
        "1009 - IMAGE STITCHING",
        "1010 - POETRY WRITING",
      ],
      General: ["magazin"],
    },

    Others: {
      Muallim: [
        "801 - HIZB",
        "802 - HIFL",
        "803 - ADA`N",
        "804 - ARABIC ELOCUTION",
        "805 - URDU ELOCUTION",
        "806 - SPOT ELOCUTION",
        "807 - STUDY TOOL PREPARATION",
        "808 - ESSAY WRITING",
        "809 - PADAPPATTU",
        "810 - COMPOSITION OF JUMU`A QUTUBA",
        "811 - ARABIC CALLIGRAPHY",
        "812 - GRAPHIC POSTER DESIGNING",
        "813 - MUSHA`ARA",
        "814 - BURDA RECITATION",
      ],
    },
  };

  return (
    <div>
      <div className="container position-relative">
        <table>
          <thead className="tableHead">
            <tr>
              <th colSpan={3} className="centered-heading">
                മത്സരഫലങ്ങൾ
              </th>
            </tr>
            <tr>
              <th>BOYS</th>
              <th>GIRLS</th>
              <th>OTHERS</th>
            </tr>
          </thead>

          <tbody>
            {Categories.map((item, index) => (
              <tr key={index}>
                <td>
                  <select
                    className="no-border-select"
                    onChange={(e) => setSelectedBoysEvent(e.target.value)}
                  >
                    <option>{item.column1}</option> // kiidies, sub junior
                    ect...
                    {Events.Boys[item.column1] ? (
                      Events.Boys[item.column1].map((eventName, i) => (
                        <option key={i} value={eventName}>
                          {eventName} // islamic song , story telling ect ...
                        </option>
                      ))
                    ) : (
                      <option>{item.column1}</option>
                    )}
                  </select>
                  {authorized && (
                    <div className="d-flex">
                      <input
                        type="text"
                        placeholder="Enter Google Drive link"
                        onChange={
                          (e) =>
                            handleEventLinkChange(
                              item.column1,
                              selectedBoysEvent,
                              e.target.value
                            ) // Pass eventName here
                        }
                        value={
                          eventLinks[item.column1]?.[selectedBoysEvent] || ""
                        }
                      />
                      <button
                        onClick={(e) =>
                          updateEventLinksAndStore(
                            item.column1,
                            selectedBoysEvent,
                            eventLinks
                          )
                        }
                      >
                        Add
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <select
                    className="no-border-select"
                    onChange={(e) => setSelectedGirlsEvent(e.target.value)}
                  >
                    <option>{item.column2}</option>
                    {Events.Girls[item.column2] ? (
                      Events.Girls[item.column2].map((eventName, i) => (
                        <option key={i} value={eventName}>
                          {eventName}
                        </option>
                      ))
                    ) : (
                      <option>{item.column2}</option>
                    )}
                  </select>
                  {authorized && Events.Girls[item.column2] && (
                    <div className="d-flex">
                      <input
                        type="text"
                        placeholder="Enter Google Drive link"
                        onChange={
                          (e) =>
                            handleEventLinkChange(
                              item.column2,
                              selectedGirlsEvent,
                              e.target.value
                            ) // Pass eventName here
                        }
                        value={
                          eventLinks[item.column2]?.[selectedGirlsEvent] || ""
                        }
                      />
                      <button
                        onClick={(e) =>
                          updateEventLinksAndStore(
                            item.column2,
                            selectedGirlsEvent,
                            eventLinks
                          )
                        }
                      >
                        Add
                      </button>
                    </div>
                  )}
                </td>
                <td>
                  <select
                    className="no-border-select"
                    onChange={(e) => setSelectedOthersEvent(e.target.value)}
                  >
                    <option>{item.column3}</option>
                    {Events.Others[item.column3] ? (
                      Events.Others[item.column3].map((eventName, i) => (
                        <option key={i} value={eventName}>
                          {eventName}
                        </option>
                      ))
                    ) : (
                      <option>{item.column3}</option>
                    )}
                  </select>
                  {authorized && Events.Others[item.column3] && (
                    <div className="d-flex">
                      <input
                        type="text"
                        placeholder="Enter Google Drive link"
                        onChange={
                          (e) =>
                            handleEventLinkChange(
                              item.column3,
                              selectedOthersEvent,
                              e.target.value
                            ) // Pass eventName here
                        }
                        value={
                          eventLinks[item.column3]?.[selectedOthersEvent] || ""
                        }
                      />
                      <button
                        onClick={(e) =>
                          updateEventLinksAndStore(
                            item.column3,
                            selectedOthersEvent,
                            eventLinks
                          )
                        }
                      >
                        Add
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="login_button">
          <button
            className="btn "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsThreeDotsVertical />
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={() => setShow(true)}
              >
                Login
              </a>
            </li>
          </ul>
        </div>

        {/* modal start */}
        {show && (
          <div className="modal_overlay">
            <div className="modal_wrapper">
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={handleUsernameChange}
                />
              </div>

              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  aria-describedby="basic-addon1"
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className=" btn btn-primary centered-button "
                onClick={() => setShow(false)}
              >
                Close
              </button>
              <button
                className=" btn btn-primary centered-button ms-2"
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>
          </div>
        )}
        {/* modal end */}
      </div>
    </div>
  );
}
