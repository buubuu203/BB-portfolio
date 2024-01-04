import React from "react";
import { Container } from "react-bootstrap";
import {
  SV5T,
  ThuKhoa,
  TNTT,
  HoiSV,
  AISC2023,
} from "../../assets/Awards/index";
import Particle from "../Particle";
import AwardCard from "./AwardCard";

const AwardArray = [
  {
    imgURL: AISC2023,
    title: "The winner of Advanced Information Systems Contest 2023",
  },
  {
    imgURL: SV5T,
    title: "Sinh viên 5 Tốt - Khoa HTTT",
  },
  {
    imgURL: ThuKhoa,
    title: "Top Valedictorian of E-Commerce 2021",
  },
  {
    imgURL: TNTT,
    title: "Thanh niên tiên tiến làm theo lời Bác",
  },
  {
    imgURL: HoiSV,
    title: "Giấy khen trong công tác Hội",
  },
];

// function chunkArray(arr, chunkSize) {
//   return Array.from({ length: Math.ceil(arr.length / chunkSize) }, (_, index) =>
//     arr.slice(index * chunkSize, (index + 1) * chunkSize)
//   );
// }

function Awards() {
  return (
    <Container fluid>
      <Particle />
      <Container>
        <h1
          style={{
            color: "white",
            marginTop: "2rem",
            marginBottom: "1rem",
          }}
        >
          My Recent <strong>Awards </strong>
        </h1>
        <p style={{ color: "white", marginBottom: "1rem" }}>
          Here are many awards that I've received recently.
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
          {AwardArray.map((activity, index) => (
            <AwardCard
              key={index}
              imgURL={activity.imgURL}
              title={activity.title}
            />
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Awards;
