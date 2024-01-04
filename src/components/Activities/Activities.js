import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import ActivityCards from "./ActivityCards";
import Awards from "../Awards/Awards";
const ActivitiesArray = [
  {
    imgURL: "https://i.postimg.cc/4xyZQCn9/BA-seminar.jpg",
    title: "Main vocal Business Analyst Seminar",
  },
  {
    imgURL: "https://i.postimg.cc/hjbHqMfn/Green-Summer.jpg",
    title: "Green Summer Campaign 2022",
  },
  {
    imgURL: "https://i.postimg.cc/NMwWVZGb/HoiSV.jpg",
    title:
      "Member of The Associated Organ of Vietnamese Students's Association",
  },
  {
    imgURL: "https://i.postimg.cc/zG4mwV9s/MC.jpg",
    title: "MC for Green Summer Campaign 2022",
  },
  {
    imgURL: "https://i.postimg.cc/jjJbBzHq/MC-TLSV.jpg",
    title: "MC for UIT-Leader Competition",
  },
  {
    imgURL: "https://i.postimg.cc/GpDWXbRH/MC-TLSV2.jpg",
    title: "MC for UIT-Leader Competition",
  },
  {
    imgURL: "https://i.postimg.cc/YCvKm1yN/TLSV.jpg",
    title: "Top 24 UIT Leader",
  },
  {
    imgURL: "https://i.postimg.cc/prW3V8FF/graduation.jpg",
    title: "Main vocal graduation 2022",
  },
];

function Activities() {
  return (
    <Container fluid style={{ padding: 80, margin: 0 }}>
      <Particle />
      <Container>
        <h1
          style={{
            color: "white",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          My Recent <strong>Activities </strong>
        </h1>
        <p style={{ color: "white", marginBottom: "1rem" }}>
          Here are a few activities I've joined recently.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: 60,
            alignItems: "center" /* Center items vertically */,
            justifyContent: "center" /* Center items horizontally */,
          }}
        >
          {ActivitiesArray.map((activity, index) => (
            <ActivityCards
              key={index}
              imgURL={activity.imgURL}
              title={activity.title}
            />
          ))}
        </div>
      </Container>
      <Awards />
    </Container>
  );
}

export default Activities;
