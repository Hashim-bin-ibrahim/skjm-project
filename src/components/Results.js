import React from "react";
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
                  <select className="no-border-select">
                    <option>{item.column1}</option>{" "}
                    {/* Show the category name initially */}
                    {Events.Boys[item.column1] ? (
                      Events.Boys[item.column1].map((eventName, i) => (
                        <option key={i}>{eventName}</option>
                      ))
                    ) : (
                      <option>{item.column1}</option>
                    )}
                  </select>
                </td>
                <td>
                  {Events.Girls[item.column2] &&
                  Events.Girls[item.column2].length > 0 ? (
                    <select className="no-border-select">
                      <option>{item.column2}</option>
                      {Events.Girls[item.column2].map((eventName, i) => (
                        <option key={i}>{eventName}</option>
                      ))}
                    </select>
                  ) : (
                    <div>{item.column2}</div>
                  )}
                </td>
                <td>
                  {Events.Others[item.column3] &&
                  Events.Others[item.column3].length > 0 ? (
                    <select className="no-border-select">
                      <option>{item.column3}</option>{" "}
                      {/* Show the category name initially */}
                      {Events.Others[item.column3] ? (
                        Events.Others[item.column3].map((eventName, i) => (
                          <option key={i}>{eventName}</option>
                        ))
                      ) : (
                        <option>{item.column3}</option>
                      )}
                    </select>
                  ) : (
                    <div>{item.column3}</div>
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
              <a className="dropdown-item" href="#">
                Login
              </a>
            </li>
           
          </ul>
          
        </div>
      </div>
    </div>
  );
}
