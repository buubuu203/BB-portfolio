import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import AwardCard from "./AwardCard";

const AwardArray = [
  {
    imgURL: "https://i.postimg.cc/50yy2qPP/AISC2023.jpg",
    title: "The winner of Advanced Information Systems Contest 2023",
  },
  {
    imgURL: "https://i.postimg.cc/dQz2gL3M/HoiSV.jpg",
    title: "Sinh viên 5 Tốt - Khoa HTTT",
  },
  {
    imgURL: "https://i.postimg.cc/nMbhT8n5/SV5T.jpg",
    title: "Top Valedictorian of E-Commerce 2021",
  },
  {
    imgURL: "https://i.postimg.cc/Y9P9GGZt/ThuKhoa.jpg",
    title: "Thanh niên tiên tiến làm theo lời Bác",
  },
  {
    imgURL: "https://i.postimg.cc/hv7G94RT/TNTT.jpg",
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
