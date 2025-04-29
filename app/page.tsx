"use client";
import HighlightButton from "./components/HighlightButton";
import Image from "next/image";
import Cat1 from "../public/cute cat.jpeg";
import YoutubeIcon from "../public/youtube.jpeg";
import TiktokIcon from "../public/tiktok logo.jpg";
import InstagramIcon from "../public/instagram logo.jpeg";
// import DeliItem1 from "../public/deli-item-1.jpg";
// import DeliItem2 from "../public/deli-item-2.jpg";
// import DeliItem3 from "../public/deli-item-3.jpg";
import "./styles/globals.css";
import Link from "next/link";

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
          <div className="nominate-title">
            <h1 className="sub1">NOMINATE</h1>
          </div>
          <div className="nominate-subtitle">
            <h1 className="sub2">A SHOP CAT TO BE ON OUR SHOW!</h1>
          </div>
          <HighlightButton
            text="NOMINATE"
            customStyle={{ marginTop: "20px" }}
            onClick={() => (window.location.href = "/subpages")}
          />
        </div>
      </div>

      {/* Add bottom marquee */}
      <div className="bottom-marquee">
        <div className="marquee-text">
          ★ COLD CUTS ★ BEER ★ LOTTO ★ CIGARETTES ★ COLD CUTS ★ BEER ★ LOTTO ★
          CIGARETTES ★ COLD CUTS ★ BEER ★ LOTTO ★ CIGARETTES ★ COLD CUTS ★ BEER
          ★ LOTTO ★ CIGARETTES ★ COLD CUTS ★ BEER ★ LOTTO ★ CIGARETTES ★ COLD
          CUTS ★ BEER ★ LOTTO ★ CIGARETTES ★ COLD CUTS ★ BEER ★ LOTTO ★
          CIGARETTES ★ COLD CUTS ★ BEER ★ LOTTO ★ CIGARETTES ★ COLD CUTS ★ BEER
          ★ LOTTO ★ CIGARETTES ★ COLD CUTS ★ BEER ★ LOTTO ★ CIGARETTES ★
        </div>
      </div>

      {/* Add this right before your deli menu section */}
      <h1 className="deli-menu-header">DELI MENU</h1>

      {/* Add Deli Menu Section */}
      <div className="deli-menu">
        <div className="menu-item">
          <div className="title-price-container">
            <div className="item-title">JUICY HAT</div>
            <span className="price-tag">$24.99</span>
          </div>
          <Image
            src={Cat1}
            alt="Juicy Hat"
            width={70}
            height={70}
            style={{ height: "auto" }} // Maintain aspect ratio
          />
        </div>
        <div className="menu-item">
          <div className="title-price-container">
            <div className="item-title">CATNIP TOY</div>
            <span className="price-tag">$24.99</span>
          </div>
          <Image
            src={Cat1}
            alt="Catnip Toy"
            width={70}
            height={70}
            style={{ height: "auto" }}
          />
        </div>
        <div className="menu-item">
          <div className="title-price-container">
            <div className="item-title">CAT BANDANA</div>
            <span className="price-tag">$24.99</span>
          </div>
          <Image
            src={Cat1}
            alt="Cat Bandana"
            width={70}
            height={70}
            style={{ height: "auto" }}
          />
        </div>
      </div>

      {/* 📺 Watch & 📬 Get in Touch Bar */}
      <div className="footer-bar">
        <div className="footer-left">
          <h2>WATCH</h2>
          <div className="social-icons">
            <Link
              href="https://www.youtube.com/@madrealities1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={YoutubeIcon}
                alt="YouTube"
                width={32}
                height={32}
                className="hover-button"
                priority
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@shopcatsshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={TiktokIcon}
                alt="TikTok"
                width={32}
                height={32}
                className="hover-button"
                priority
              />
            </Link>
            <Link
              href="https://www.instagram.com/shopcatsshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={32}
                height={32}
                className="hover-button"
                priority
              />
            </Link>
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
