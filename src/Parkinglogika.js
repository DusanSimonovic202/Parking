import "./styles/Pocetna.css";

export default function Pocetna(props) {
  return (
    <div className="menuItem">
      <h4 className="parkingnaslov">{props.ime}</h4>
      <div
        className="prvibox"
        style={{ backgroundImage: `url(${props.image})` }}
      ></div>
      <div className="drugibox">
        <p className="ptext">Radno vreme: {props.radnoVreme}</p>
        <p className="ptext">Slobodna mesta: {props.slobodnaMesta}</p>
        <p className="ptext">Adresa: {props.adresa}</p>
        <p className="ptext">Cena: {props.cena}</p>
      </div>
    </div>
  );
}
