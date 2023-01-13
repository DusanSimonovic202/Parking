import React from "react";
import "../styles/Pocetna.css";
import { BrojParkinga } from "../baza";
import Parking from "../Parkinglogika";

export default function Pocetna() {
  return (
    <div>
      <h1 className="naslov"> Parking Servis</h1>
      <h3 className="podnaslov">Kosovska Mitrovica</h3>
      <div className="menu">
        <div className="menuList">
          {BrojParkinga.map((BrojParkinga) => {
            return (
              <Parking
                key={BrojParkinga.key}
                ime={BrojParkinga.ime}
                image={BrojParkinga.image}
                radnoVreme={BrojParkinga.radnoVreme}
                slobodnaMesta={BrojParkinga.slobodnaMesta}
                adresa={BrojParkinga.adresa}
                cena={BrojParkinga.cena}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
