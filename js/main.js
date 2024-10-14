const tripLength = parseInt(
  prompt("Quanti chilometri vorresti percorrere?", "Es: 10").replace(
    "Es: ",
    " "
  )
);
const personAge = parseInt(
  prompt("Quanti anni hai?", "Es: 27").replace("Es: ", " ")
);

const pricePerKilometer = 0.21;
let ticketPrice = pricePerKilometer * tripLength;

const underDiscount = 0.8;
const overDiscount = 0.6;

if (personAge > 65) ticketPrice *= overDiscount;
if (personAge < 18) ticketPrice *= underDiscount;

if (!isNaN(personAge) || !isNaN(tripLength)) {
  alert(
    `In base alla tua esigenza ed età il prezzo del biglietto è il seguente: ${ticketPrice.toFixed(
      2
    )}`
  );
} else {
  alert("I dati inseriti sono errati.");
}
