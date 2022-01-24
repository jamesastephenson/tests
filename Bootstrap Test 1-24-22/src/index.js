const card = document.getElementById("card");
const cardText = document.getElementById("cardText");

card.addEventListener("click", BGChange, false);

function BGChange() {
  if (card.classList.contains("bg-dark")) {
    card.classList.replace("bg-dark", "bg-light");
    cardText.classList.replace("bg-white", "bg-dark");
    cardText.classList.replace("text-black", "text-white");
  } else {
    card.classList.replace("bg-light", "bg-dark");
    cardText.classList.replace("bg-dark", "bg-white");
    cardText.classList.replace("text-white", "text-black");
  }
}
