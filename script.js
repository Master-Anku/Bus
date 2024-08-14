"use strict";

// var Name = window.prompt("What is your name");
// var Age = window.prompt("Your age?")

// // Lo

// var user = {
//   Name: Name.trim(),
//   Age: Age.trim(),

// };

// localStorage.setItem("user", JSON.stringify(user));

// var storedUser = JSON.parse(localStorage.getItem("user"));
// console.log(storedUser.Name); // 'Name' ကို ပြန်လည်ကြည့်နိုင်ပါတယ်
// console.log(storedUser.Age);  // 'Age' ကို ပြန်လည်ကြည့်နိုင်ပါတယ်

function htmlOption() {
  let departure = document.querySelector("#departure");
  let arrival = document.querySelector("#arrival");

  // airports.forEach((ap) => {
  //   let option = document.createElement("option");
  //   option.value = ap.iata;
  //   option.textContent = `${ap.name} (${ap.iata})`;
  //   departure.appendChild(option);
  //   arrival.appendChild(option.cloneNode(true));

  // });

  airports.forEach((ap) => {
    let optionAp = `<option value="${ap.iata}" > ${ap.name} (${ap.iata})></option>`;
    departure.insertAdjacentHTML("beforeend", optionAp);
    arrival.insertAdjacentHTML("beforeend", optionAp);
  });
}

function checkFlight() {
  let departureIATA = document.querySelector("#departure").value.trim();
  let arrivalIATA = document.querySelector("#arrival").value.trim();
  let showResult = document.querySelector("#result");

  // console.log('Departure IATA:', departureIATA);
  // console.log('Arrival IATA:', arrivalIATA);

  // Check if both departure and arrival IATA codes are selected
  // if (departureIATA || arrivalIATA) {
  //   showResult.textContent = `Select both departure and arrival airports!ဘာမှမရှိပါ ရွေးချယ်ပေးပါ`;
  //   return;
  // }

  let flight = flightsfile.find(
    (f) => f.departureIATA === departureIATA && f.arrivalIATA === arrivalIATA
  );

  let departureAp = airports.find((a) => a.iata === departureIATA);
  let arrivalAp = airports.find((a) => a.iata === arrivalIATA);

  if (flight && departureAp && arrivalAp) {
    showResult.innerHTML = `
    <h2 class="resulth2">Flight Status</h2>
    <p class="subTitle">Departure Airport ကားကွင်း: <span class="details">${departureAp.name} (${departureAp.iata})</span></p>
    <p class="subTitle">Arrival Airport: <span class="details">${arrivalAp.name} (${arrivalAp.iata})</span></p>
    <p class="subTitle">Departure Time: <span class="details">${flight.departureTime}</span></p>
    <p class="subTitle">Arrival Time: <span class="details">${flight.arrivalTime}</span></p>
    <p class="subTitle">Departure Date: <span class="details">${flight.departureDate}</span></p>
    <p class="subTitle">Arrival Date: <span class="details">${flight.arrivalDate}</span></p>
    <p class="subTitle">Status: <span class="details">${flight.status}</span></p>
    <p class="subTitle">Duration: <span class="details">${flight.duration}</span></p>
    <img width=350px src='${flight.bus}'/>
    `;
  }
  // You have to change to imag tag for images ****
  else {
    showResult.innerHTML = "Flight details NOT found!တစ်ခုခုကို ရွေးချယ်ပေးပါ";
  }
}

// var imgUrl =document.querySelector("#img-url");
// imgUrl.innerHTML = "[flights.bus]"

document.addEventListener("DOMContentLoaded", () => {
  htmlOption();
  // checkFlight();
  document.querySelector("#checkStatus").addEventListener("click", checkFlight);
});
