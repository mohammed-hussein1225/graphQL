let array = [];

fetch("https://countries.trevorblades.com/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
        {
            egypt: country(code: "EG") {
                name
            
                capital
            
                languages {
                code
                name
                }
            }
            usa: country(code:"US"){
                name
                capital
                languages {
                    code
                    name
                }
            }
            ae: country(code: "AE"){
                name
                capital
                languages {
                    code 
                    name 
                }
            }
            sa: country (code: "SA"){
              name
              capital
              languages{
                code 
                name
              }
            }
            
        }
      `,
  }),
})
  .then((response) => response.json())
  .then((data) => show(data.data))
  .catch((error) => console.error("Error:", error));

function show(data) {
  console.log(data.EA);

  let card = document.querySelector(".card_1");
  let card_2 = document.querySelector(".card_2");
  let card_3 = document.querySelector(".card_3");
  let card_4 = document.querySelector(".card_4");

  card.innerHTML = `
  <h1>  country : ${data.usa.name}</h1>
  <h3>  Capital : ${data.usa.capital}</h3>
  <ul>
    <li>   languages</li>
    <li> ${data.usa.languages[0].name}</li>
    <li> ${data.usa.languages[0].code}</li>
  </ul>
  `;

  card_2.innerHTML = `
  <h1>  country : ${data.egypt.name}</h1>
  <h3>  Capital : ${data.egypt.capital}</h3>
  <ul>
    <li>   languages</li>
    <li> ${data.egypt.languages[0].name}</li>
    <li> ${data.egypt.languages[0].code}</li>
  </ul>
  `;

  card_3.innerHTML = `
  <h1>  country : ${data.ae.name}</h1>
  <h3>  Capital : ${data.ae.capital}</h3>
  <ul>
    <li>   languages</li>
    <li> ${data.ae.languages[0].name}</li>
    <li> ${data.ae.languages[0].code}</li>
  </ul>
  `;

  card_4.innerHTML = `
  <h1>  country : ${data.ae.name}</h1>
  <h3>  Capital : ${data.ae.capital}</h3>
  <ul>
    <li>   languages</li>
    <li> ${data.ae.languages[0].name}</li>
    <li> ${data.ae.languages[0].code}</li>
  </ul>
  `;
}
