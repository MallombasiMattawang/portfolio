import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Semua, Nama Lengkap saya <span className="purple">Mallombasi Mattawang </span>, tapi teman-teman saya biasa memanggil saya  <span className="purple">Awan </span> atau <span className="purple">Awang </span> 
            dan berasal dari <span className="purple"> Gowa, Sulawesi Selatan.</span>
            <br />Saya seorang web developer sejak tahun 2014 dan lulusan Teknik Informatika Universitas Indonesia Timur di tahun yang sama. <br />
            <br />
            Selain coding, beberapa kegiatan lain yang saya suka lakukan!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bermain Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Menulis Blog
            </li>
            <li className="about-activity">
              <ImPointRight /> Karate
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "angkat sauh, arungi samudra.....nikmati perjalanan anda"
          </p>
          <footer className="blockquote-footer">Awan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
