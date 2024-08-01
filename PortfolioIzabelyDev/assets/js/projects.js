const divProjects = document.querySelector('.projects');

function createProject(img, imgAlt, url, title, description) {
    divProjects.innerHTML += `
            <div class="project">
                <img class="img-project" src="${img}" alt="${imgAlt}">
                <a class="title-project" href="${url}" target="_blank">${title}</a>
                <p class="description-project">${description}</p>
            </div>
        `;
}

createProject(
    "./assets/img/area-perímetro.jpeg",
    "Calcular área e perímetro",
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/fundamentosJS/areaEperimetro",
    "Calcular área e perímetro",
    "Formulário dinâmico para calcular a área e o perímetro de um retângulo."
);

createProject(
    "./assets/img/imc.jpeg",
    "Calcular IMC",
    "https://github.com/izabelydev/javascript-aulas/tree/main/25-exerc-imc",
    "Calcular IMC",
    "Calcular e classificar o Indíce de Massa Corporal."
);

createProject(
    "./assets/img/temperatura.jpeg",
    "Conversor de temperatura",
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/fundamentosJS/temperatura",
    "Conversor de temperatura",
    "Conversor de graus Celsius para Fahrenheit e vice-versa."
);

createProject(
    "./assets/img/divisibilidade.jpeg",
    "Divisibilidade",
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/fundamentosJS/checarDivisibilidade",
    "Divisibilidade",
    "Checar se um número é divisível pelo outro e mostrar o resultado."
);

createProject(
    "./assets/img/faixa-etaria.jpeg",
    "Faixa etária",
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/fundamentosJS/faixaEtaria",
    "Faixa etária",
    "Classificar a idade: criança, adolescente, adulto, idoso."
);

createProject(
    "./assets/img/formulario-dinamico.jpeg",
    "Formulário dinâmico",
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/fundamentosJS/concatenarStrings",
    "Formulário dinâmico ",
    "Formulário responsivo com animações e resposta dinâmica."
);


createProject(
    "./assets/img/ingresso.jpeg",
    "Ingresso",
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/fundamentosJS/tarifa",
    "Ingresso",
    "Escolher o tipo de ingresso e aplicar o desconto."
);