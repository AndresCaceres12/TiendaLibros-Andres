import React, { useState } from "react";
import "../style/PagoNequi.css";

import { Input } from "@nextui-org/react";
import ConfirmacionP from "./ConfirmacionP";
const PagoNequi = ({ total, setTotal, setAllProducts }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleZipCodeChange = (e) => {
    setZipCode(e.target.value);
  };
  console.log(total);
  const handlePayment = () => {
    if (phoneNumber !== "" && address !== "") {
      console.log("Realizando pago por Nequi");
      console.log("Monto: ", total);
      console.log("Número de teléfono: ", phoneNumber);
      console.log("direccion :", address);
      console.log("Ciudad :", city);
      console.log("Codigo postal :", zipCode);
      setErrorMessage("");
      setMostrarConfirmacion(true);
    } else {
      setErrorMessage("Por favor, completa todos los campos");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePayment();
  };

 const setLocalstorage = value =>{
  try{
    setTotal(value)
    window.localStorage.setItem("Totalpagar",value)
  } catch(error){
    console.log("no se pudo capturar")
  }
 }
 setLocalstorage(total)
  return (
    <form onSubmit={handleSubmit}>
      <div className="nequi-payment">
        <h2>Realizar Pago por Nequi</h2>
        <div className="form-group">
          <label htmlFor="amount">Monto:</label>

          <Input style={{color:"black"}} disabled placeholder="Disabled" value={total} />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Número de Teléfono:</label>

          <Input
            Placeholder="1234"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">DIRECCIÓN</label>

          <Input
            placeholder="123 Street"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">Ciudad</label>
            <Input
              value={city}
              onChange={handleCityChange}
              placeholder="Gotica"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Codigo postal</label>
            <Input
              type="text"
              id="zipCode"
              value={zipCode}
              onChange={handleZipCodeChange}
              placeholder="12345"
              required
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
        <button className="payment-button" type="submit">
          Realizar Pago
        </button>
      </div>
      {mostrarConfirmacion && (
        <ConfirmacionP

          CerrarConfirmacion={() => setMostrarConfirmacion(false)}
          setAllProducts={setAllProducts}
          total={total}
        />
      )}
    </form>
  );
};

export default PagoNequi;
