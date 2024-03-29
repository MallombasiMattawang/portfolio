import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import antrian from "../../Assets/Projects/antrian.png";
import puzzle from "../../Assets/Projects/puzzle.png";
import julang from "../../Assets/Projects/julang.png";
import siap from "../../Assets/Projects/siap.png";
import ksda from "../../Assets/Projects/ksda.png";
import monica from "../../Assets/Projects/monica.png";
import school from "../../Assets/Projects/school.png";
import taliabu from "../../Assets/Projects/taliabu.png";
import pu from "../../Assets/Projects/pu.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Project <strong className="purple">Terbaru </strong>
        </h1>
        <p style={{ color: "white" }}>
          Berikut adalah beberapa proyek yang saya kerjakan baru-baru ini.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pu}
              isBlog={false}
              title="Web Dispar Kab. Pulau Taliabu"
              description="Akses Semua Database Infrastruktur Yang Dimiliki Dinas Pekerjaan Umum Kab. Bulukumba seperti Sungai, Jalan, dan lainnya"
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://pu.bulukumbakab.go.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taliabu}
              isBlog={false}
              title="Database Sungai Kab. Bulukumba"
              description="Aplikasi ini bertujuan untuk mengembangkan dan meningkatkan pelayanan serta memperkenalkan dan mempromosikan Kabupaten Pulau Taliabu secara terarah kepada wisatawan domestik dan mancanegara di Kabupaten Pulau Taliabu dengan memanfaatkan media elektronik."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://dispar.taliabukab.go.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={school}
              isBlog={false}
              title="SmartSchool Polman"
              description="Smartschool adalah sistem yang dibuat untuk mendigitalkan semua aspek di sekolah, termasuk pembelajaran, pengelolaan sarana dan prasarana sekolah, dengan tujuan untuk memudahkan kegiatan belajar mengajar di sekolah."
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://smartschool-polman.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siap}
              isBlog={false}
              title="Perizinan Online DPMPTSP"
              description="Sistem perizinan online DPMPTSP ini diperuntukkan bagi pemohon yang akan mengajukan permohonan perizinan secara online menggunakan sertifikat elektronik yang diterbitkan oleh Balai Sertifikasi Elektronik (BSrE), BSSN "
              //ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://siap.bulukumbakab.go.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={monica}
              isBlog={false}
              title="Dashboard Monica"
              description="Dashboard Monica Telkom Regional Wilayah 7 merupalkan sistem monitoring dan reporting project mitra-mitra yang bekerjasama dengan perusahaan TELKOM."
              //ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://monica.web.id/ped-panel/auth/login"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ksda}
              isBlog={false}
              title="Web Profile Balai Besar KSDA Sulsel"
              description="Website Profile Balai Besar Konservasi SDA Sulawesi Selatan, Kementerian Lingkungan Hidup dan Kehutanan"
              //ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="http://ksdasulsel.menlhk.go.id/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={puzzle}
              isBlog={false}
              title="Puzzle Satwa Dilindungi"
              description="permainan menyusun gambar hewan dengan tiga tingkatan kesulitan cocok untuk mengisi waktu senggang anda, jangan sampai stress aja ya mainnya :D"
              ghLink="https://github.com/MallombasiMattawang/puzzle-satwa"
              demoLink="http://ksdasulsel.menlhk.go.id/post/game-puzzle-satwa-identitas-sulawesi"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={julang}
              isBlog={false}
              title="Julang Sulawesi"
              description="Julang sulwesi / Rangkong Sulawesi atau Rhinoceros Cassedix adalah Satwa Endemik Sulawesi yang semakin menurun populasi. Game Si Julang Melawan Naga Jahat ini di kembangkan IT BBKSDA Sulsel sebagai kampanye konservasi terhadap satwa Julang di sulawesi"
              ghLink="https://github.com/MallombasiMattawang/julang-sulawesi"
             demoLink="http://ksdasulsel.menlhk.go.id/post/si-julang-game-petualangan-rangkong-sulawesi" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={antrian}
              isBlog={false}
              title="Loket Antrian"
              description="Aplikasi Antrian loket dengan Printer POS, Display Monitor Nomor & Loket, Fitur Panggilan dan restart otomatis "
              ghLink="https://github.com/MallombasiMattawang/antrian"
            // demoLink="http://ksdasulsel.menlhk.go.id/post/si-julang-game-petualangan-rangkong-sulawesi" 
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
