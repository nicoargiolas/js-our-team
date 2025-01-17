// Dato un array di oggetti rappresentante un team di un’azienda, creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// Bonus
// Rendere l’esercizio responsive, mandando a capo le card

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// Collegamenti a elementi del dom
const teamHTML = document.getElementById('team');

// Creazione ciclo per inserire i dati in pagina
let counter = teamMembers.length;
for (let i = 0; i < counter; i++) {
  const {name, role, email, img} = teamMembers[i];
  teamHTML.innerHTML +=`
  <div class="member">
    <div class="img-box">
        <img src="${img}" alt="${name}">
    </div>
    <div class="text-box">
      <h4 class="name"> ${name.toUpperCase()} </h4>
      <p class="role"> ${role} </p>
      <a href="#" class="email"> ${email} </a>
    </div>
  </div>`;
}