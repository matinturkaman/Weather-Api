import React, { useState } from "react";
import cloud from "./image/cloud.svg";
import hot from "./image/hot.svg";
import { BsDribbble, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import {
  Bold,
  Box,
  Div,
  Flex,
  Hr,
  Image,
  Input,
  Link,
  Text,
} from "./styledComponents";

const api = {
  key: "65ebeea7cb3a599956de8e3cda2ea7d0",
  base: "https://api.openweathermap.org/data/2.5/",
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const dateBulder = (d) => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  };

  return (
    <div
      className={
        typeof weather.main !== "undefined"
          ? weather.main.temp > 16
            ? "sunny"
            : "clouds"
          : "clouds"
      }
    >
      <Flex>
        <Input
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          onKeyPress={search}
        />
      </Flex>
      {typeof weather.main != "undefined" ? (
        <>
          <Flex style={{ height: "90vh" }}>
            <Box>
              <Image
                src={
                  typeof weather.main != "undefined"
                    ? weather.main.temp > 16
                      ? hot
                      : cloud
                    : null
                }
                alt=""
              />
              <Bold>
                {weather.name}, {weather.sys.country}
              </Bold>
              <Text>{dateBulder(new Date())}</Text>
              <Bold
                style={{ fontSize: "35px", transform: "translateY(-60px)" }}
              >
                {Math.round(weather.main.temp)}°
              </Bold>
            </Box>
          </Flex>
        </>
      ) : (
        <Flex style={{ height: "90vh" }}></Flex>
      )}
      <Flex
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Div className="box">
          <Div className="div">
            Created by{": "}
            <Link
              href="https://github.com/matinturkaman"
              target="blank"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              matin turkaman
            </Link>
          </Div>
          <Div className="iconsBox">
            <a
              href="https://github.com/matinturkaman"
              target="blank"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <BsGithub
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://linkedin.com/in/matin-turkaman-a9b70b215"
              target="blank"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <BsLinkedin
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://www.instagram.com/matinturkaman/"
              target="blank"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <BsInstagram
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
              />
            </a>
            <a
              href="https://dribbble.com/matinturkaman"
              target="blank"
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              <BsDribbble
                style={{ color: "white", fontSize: "20px", cursor: "pointer" }}
              />
            </a>
          </Div>
        </Div>
      </Flex>
    </div>
  );
};

export default App;
