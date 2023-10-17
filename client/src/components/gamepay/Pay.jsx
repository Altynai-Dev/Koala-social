import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
 
const Pay = () => { 
  const [cardholder, setCardholder] = useState(""); 
  const [cardNumber, setCardNumber] = useState(""); 
  const [expired, setExpired] = useState({ month: "", year: "" }); 
  const [securityCode, setSecurityCode] = useState(""); 
  const [card, setCard] = useState("front"); 
 
  const navigate = useNavigate(); 
  const formatCardNumber = () => { 
    if (cardNumber.length > 18) { 
      return; 
    } 
    setCardNumber(cardNumber.replace(/\W/gi, "").replace(/(.{4})/g, "$1 ")); 
  }; 
 
  const isValid = () => { 
    if ( 
      cardholder.length < 5 || 
      cardNumber === "" || 
      (expired.month === "" && expired.year === "") || 
      securityCode.length !== 3 
    ) { 
      return false; 
    } 
    return true; 
  }; 
 
  const onSubmit = () => { 
    alert(`You did it ${cardholder}.`); 
  }; 
 
  return ( 
    <div className="m-4"> 
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white"> 
        <header className="flex flex-col justify-center items-center"> 
          <div style={{ display: "flex" }}> 
            <div className={`relative ${card === "front" ? "" : "hidden"}`}> 
              <img 
                //   className="w-full h-auto" 
                style={{ width: "300px" }} 
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png" 
                alt="front credit card" 
              /> 
              <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12"> 
                <p className="number mb-5 sm:text-xl"> 
                  {cardNumber !== "" ? cardNumber : "0000 0000 0000 0000"} 
                </p> 
                <div className="flex flex-row justify-between"> 
                  <p>{cardholder !== "" ? cardholder : "Card holder"}</p> 
                  <div> 
                    <span>{expired.month}</span> 
                    {expired.month !== "" && <span>/</span>} 
                    <span>{expired.year}</span> 
                  </div> 
                </div> 
              </div> 
            </div> 
            <div className={`relative ${card === "back" ? "" : "hidden"}`}> 
              <img 
                style={{ width: "300px" }} 
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png" 
                alt="" 
              /> 
              <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12"> 
                <div className="border border-white w-16 h-9 flex justify-center items-center"> 
                  <p>{securityCode !== "" ? securityCode : "code"}</p> 
                </div> 
              </div> 
            </div> 
          </div> 
          <ul className="flex"> 
            <li className="mx-2"> 
              <img 
                className="w-16" 
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/computop.png" 
                alt="" 
              /> 
            </li> 
            <li className="mx-2"> 
              <img 
                className="w-14" 
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/verified-by-visa.png" 
                alt="" 
              /> 
            </li> 
            <li className="ml-5"> 
              <img 
                className="w-7" 
                src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/mastercard-id-check.png" 
                alt="" 
              /> 
            </li> 
          </ul> 
        </header> 
        <main className="mt-4 p-4"> 
          <h1 className="text-xl font-semibold text-gray-700 text-center"> 
            Card payment 
          </h1> 
          <div> 
            <div className="my-3"> 
              <input 
                type="text"className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" 
                placeholder="Card holder" 
                maxLength="22" 
                value={cardholder} 
                onChange={(e) => setCardholder(e.target.value)} 
              /> 
            </div> 
            <div className="my-3"> 
              <input 
                type="text" 
                className="block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" 
                placeholder="Card number" 
                value={cardNumber} 
                onChange={(e) => setCardNumber(e.target.value)} 
                onKeyDown={formatCardNumber} 
                onKeyUp={isValid} 
                maxLength="19" 
              /> 
            </div> 
            <div className="my-3 flex flex-col"> 
              <div className="mb-2"> 
                <label className="text-gray-700">Expired</label> 
              </div> 
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2"> 
                <select 
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" 
                  value={expired.month} 
                  onChange={(e) => 
                    setExpired({ ...expired, month: e.target.value }) 
                  } 
                > 
                  <option value="" disabled> 
                    MM 
                  </option> 
                  {[...Array(12).keys()].map((month) => ( 
                    <option 
                      key={month + 1} 
                      value={String(month + 1).padStart(2, "0")} 
                    > 
                      {String(month + 1).padStart(2, "0")} 
                    </option> 
                  ))} 
                </select> 
                <select 
                  className="form-select appearance-none block w-full px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" 
                  value={expired.year} 
                  onChange={(e) => 
                    setExpired({ ...expired, year: e.target.value }) 
                  } 
                > 
                  <option value="" disabled> 
                    YY 
                  </option> 
                  {[...Array(6).keys()].map((year) => ( 
                    <option key={2021 + year} value={2021 + year}> 
                      {2021 + year} 
                    </option> 
                  ))} 
                </select> 
                <input 
                  type="text" 
                  className="block w-full col-span-2 px-5 py-2 border rounded-lg bg-white shadow-lg placeholder-gray-400 text-gray-700 focus:ring focus:outline-none" 
                  placeholder="Security code" 
                  maxLength="3" 
                  value={securityCode} 
                  onChange={(e) => setSecurityCode(e.target.value)} 
                  onFocus={() => setCard("back")} 
                  onBlur={() => setCard("front")} 
                /> 
              </div> 
            </div> 
          </div> 
        </main> 
        <footer className="mt-6 p-4"> 
          <button 
            className="submit-button px-4 py-3 rounded-full bg-blue-300 text-blue-900 focus:ring focus:outline-none w-full text-xl font-semibold transition-colors" 
            // disabled={!isValid()} 
            onClick={() => navigate("/games")} 
          > 
            Pay now 
          </button> 
        </footer> 
      </div> 
    </div> 
  ); 
}; 
 
export default Pay;