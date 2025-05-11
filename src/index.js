function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let promptInput = document.querySelector("#user-prompt");
  let apiKey = "41b39faeco43443c5c35d963td510b86";
  let context =
    "You are a Romantic poem expert who loves to write short poems. Your mission is to generate a four line poem in Basic HTML. Make sure to follow the user instructions  ";
  let prompt = `User instructions: Generate a poem about ${promptInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`context : ${context}`);
  console.log(`prompt : ${prompt}`);

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
