import reactImg from "./assets/react-core-concepts.png";
let broj = Math.floor(Math.random() * 4);
function conditionalRendering() {
  if (broj === 0) {
    return "What is the capital of Australia?";
  } else if (broj === 1) {
    return "Who wrote the novel To Kill a Mockingbird?";
  } else if (broj === 2) {
    return "What is the chemical symbol for gold?";
  } else if (broj === 3) {
    return "In which year did the Titanic sink?";
  } else if (broj === 4) {
    return "Who painted the Mona Lisa?";
  }
}

const odgovori = ["Sydney", "Harper Lee", "Au", "1912", "Leonardo da Vinci"];

function handleSubmit() {
  const inputValue = document.querySelector("input").value;
  if (inputValue.toLowerCase() == odgovori[broj].toLowerCase()) {
    document.getElementById("result").innerHTML = "Correct";
  } else {
    document.getElementById("result").innerHTML = "Wrong";
  }
}
function Next() {
  window.location.reload();
}
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h2>{conditionalRendering(broj)}</h2>
      <p>
        <input type="text" /> <button onClick={handleSubmit}>Submit</button>
        <button onClick={Next}>Next</button>
      </p>

      <p id="result"></p>
    </header>
  );
  Odgovor();
}

function App() {
  return (
    <div>
      <Header />
      <main></main>
    </div>
  );
}

export default App;
