"use client";
import HighlightButton from "./components/HighlightButton";
import Image from "next/image";
import Cat1 from "../public/cute cat.jpeg";
import "./styles/globals.css";

export default function Home() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="main-title">
          SHOP <br />
          CATS
        </h1>
        <h2 className="header-sticker">
          A<br />
          MAD REALITIES
          <br />
          SHOW
        </h2>
      </div>

      {/* 🔁 Top marquee (scrolls above cats) */}
      <div className="marquee-bar">
        <div className="marquee-text">
          🐾 NYC 🐾 MEET YOUR LOCAL SHOP CATS 🐾 HOSTED BY MICHELLADONNA 🐾 NYC
          🐾 MEET YOUR LOCAL SHOP CATS 🐾 HOSTED BY MICHELLADONNA 🐾 NYC 🐾 MEET
          YOUR LOCAL SHOP CATS 🐾 HOSTED BY MICHELLADONNA 🐾 NYC 🐾 MEET YOUR
          LOCAL SHOP CATS 🐾 HOSTED BY MICHELLADONNA 🐾 NYC 🐾 MEET YOUR LOCAL
          SHOP CATS 🐾 HOSTED BY MICHELLADONNA 🐾 NYC 🐾 MEET YOUR LOCAL SHOP
          CATS 🐾 HOSTED BY MICHELLADONNA 🐾 NYC 🐾 MEET YOUR LOCAL SHOP CATS 🐾
          HOSTED BY MICHELLADONNA 🐾 NYC 🐾 MEET YOUR LOCAL SHOP CATS 🐾 HOSTED
          BY MICHELLADONNA 🐾
        </div>
      </div>

      {/* Main Content + Cats */}
      <div className="cat-circle-wrapper">
        {/* Cats surrounding the text */}
        <Image
          src={Cat1}
          className="cat top-center"
          alt="cat"
          width={100}
          height={100}
        />
        <Image
          src={Cat1}
          className="cat top-left"
          alt="cat"
          width={100}
          height={100}
        />
        <Image
          src={Cat1}
          className="cat top-right"
          alt="cat"
          width={100}
          height={100}
        />
        <Image
          src={Cat1}
          className="cat bottom-left"
          alt="cat"
          width={100}
          height={100}
        />
        <Image
          src={Cat1}
          className="cat bottom-right"
          alt="cat"
          width={100}
          height={100}
        />
        <Image
          src={Cat1}
          className="cat bottom-center"
          alt="cat"
          width={100}
          height={100}
        />

        {/* Nomination text */}
        <div className="nominate-content">
          <h1 className="sub1">NOMINATE</h1>
          <h2 className="sub2">A SHOP CAT TO BE ON OUR SHOW!</h2>
          <HighlightButton
            text="NOMINATE"
            customStyle={{ marginTop: "20px" }}
            onClick={() => (window.location.href = "/subpages")}
          />
        </div>
      </div>

      {/* 📺 Watch & 📬 Get in Touch Bar */}
      <div className="footer-bar">
        <div className="footer-left">
          <h2>WATCH</h2>
          <div className="social-icons">
            <a href="https://youtube.com">
              <img
                src="youtube.jpeg"
                alt="Button Image"
                className="hover-button"
              ></img>
            </a>
            <a href="https://tiktok.com">
              <img src="tiktok logo.jpg" className="hover-button"></img>
            </a>

            <a href="https://instagram.com">
              <img src="instagram logo.jpeg" className="hover-button"></img>
            </a>
          </div>
        </div>

        <div className="footer-right">
          <a href="mailto:contact@shopcats.tv" className="contact-link">
            <h2>GET IN TOUCH</h2>
          </a>
        </div>
      </div>

      <footer>
        <div className="footer-marquee-text">
          2024 MAD REALTIES ALL RIGHTS RESERVED. 2024 MAD REALTIES ALL RIGHTS
          RESERVED. 2024 MAD REALTIES ALL RIGHTS RESERVED. 2024 MAD REALTIES ALL
          RIGHTS RESERVED. 2024 MAD REALTIES ALL RIGHTS RESERVED. 2024 MAD
          REALTIES ALL RIGHTS RESERVED. 2024 MAD REALTIES ALL RIGHTS RESERVED.
          2024 MAD REALTIES ALL RIGHTS RESERVED. 2024 MAD REALTIES ALL RIGHTS
          RESERVED. 2024 MAD REALTIES ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}
