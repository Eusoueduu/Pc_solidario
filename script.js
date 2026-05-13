// ===============================
// ANIMAÇÃO AO ROLAR A PÁGINA
// ===============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));

// ===============================
// FORMULÁRIO
// ===============================

document
  .getElementById("donationForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let pecas = document.getElementById("pecas").value;
    let observacao = document.getElementById("obs").value;

    let mensagem = `
📦 *Nova Doação de PC*

👤 Nome: ${nome}
📧 E-mail: ${email}
📱 Telefone: ${telefone}

🖥️ Peças:
${pecas}

📝 Observação:
${observacao}
`;

    try {
      const response = await fetch(
        "https://api.z-api.io/instances/3F2FBFE949D3C1C2968566D9DF04EBD1/token/30940B79BC10555F7979AE01/send-text",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            phone: "5591985486954",
            text: "TESTE",
          }),
        }
      );

      const data = await response.json();

      console.log(response.status);

      console.log(await response.text());

      alert("Mensagem enviada com sucesso!");

    } catch (error) {

      console.log(error);

      alert("Erro ao enviar mensagem!");
    }
  });
