let english = false;

function translate() {
  const language = document.querySelector("#language");
  const tech = document.querySelector("#tech");
  const bio = document.querySelector("#bio");
  const bioTitle = document.querySelector("#bioTitle");
  const projectTitle = document.querySelector("#projectTitle");
  const skillsTitle = document.querySelector("#skillsTitle");
  const YourEmail = document.querySelector("#YourEmail");
  const YourSubject = document.querySelector("#YourSubject");
  const YourName = document.querySelector("#YourName");
  const YourMsg = document.querySelector("#YourMsg");
  const subject = document.querySelector("#subject");
  const name = document.querySelector("#name");
  const msg = document.querySelector("#msg");
  const email = document.querySelector("#email");
  const job = document.querySelector("#job");
  const sBtn = document.querySelector("#sBtn");
  const SQL = document.querySelector("#SQL");
  const NoSQL = document.querySelector("#NoSQL");

  language.addEventListener("click", () => {
    if (!english) {
      // Inglês
      language.src = "/image/us.png";
      tech.innerHTML = "Most used technologies";
      bioTitle.innerHTML = "ABOUT ME";
      bio.innerHTML = `
      My name is Lucas, I am currently 23 years old, and I am a student in the field of computer science. 
      I am passionate about technology and always eager to learn new tools and technologies. 
      I am constantly seeking new challenges and opportunities to grow and improve as a developer. 
      My hobbies include playing video games, watching movies and series, and reading books, especially mangas and comics.
      `;
      projectTitle.innerHTML = "PROJECTS";
      skillsTitle.innerHTML = "SKILLS";
      YourEmail.innerHTML = "E-mail:";
      email.placeholder = "Enter your E-Mail";
      YourSubject.innerHTML = "Subject:";
      subject.placeholder = "Enter the subject";
      YourName.innerHTML = "Name:";
      name.placeholder = "Enter your name";
      YourMsg.innerHTML = "Message:";
      msg.placeholder = "Enter your message";
      job.innerHTML = "Developer Full Stack | Brazil";
      sBtn.innerHTML = "Send";
      SQL.innerHTML = "SQL Database";
      NoSQL.innerHTML = "NoSQL";

      english = true;
    } else {
      // Português
      language.src = "/image/br.png";
      tech.innerHTML = "Tecnologias mais usadas";
      bioTitle.innerHTML = "SOBRE MIM";
      bio.innerHTML = `
Meu nome é Lucas, atualmente possuo 23 anos e sou estudante da área da ciência da computação.
Sou apaixonado por tecnologia e estou sempre em busca de aprender novas ferramentas e tecnologias.
Estou sempre em busca de novos desafios e oportunidades para aprender e crescer como desenvolvedor.
Meus hobbies incluem jogar video game, assistir filmes e séries, e ler livros, em especial mangás e quadrinhos.
`;
      projectTitle.innerHTML = "PROJETOS";
      skillsTitle.innerHTML = "HABILIDADES";
      YourEmail.innerHTML = "Seu e-mail:";
      email.placeholder = "Digite seu e-mail";
      YourSubject.innerHTML = "Assunto:";
      subject.placeholder = "Digite o assunto";
      YourName.innerHTML = "Nome:";
      name.placeholder = "Digite seu nome";
      YourMsg.innerHTML = "Mensagem:";
      msg.placeholder = "Digite sua mensagem";
      job.innerHTML = "Desenvolvedor Full Stack | Brasil";
      sBtn.innerHTML = "Enviar";
      NoSQL.innerHTML = "Banco de dados NoSQL";
      SQL.innerHTML = "Banco de dados SQL";

      english = false;
    }
  });
}

translate();
