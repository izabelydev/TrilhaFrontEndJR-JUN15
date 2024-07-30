const divProjects = document.querySelector('.projects');

function createProject(img, imgAlt, url, title, description) {
    return {
        project: () => {
            divProjects.innerHTML += `
            <div class="project">
                <img class="img-project" src="${img}" alt="${imgAlt}">
                <a class="title-project" href="${url}" target="_blank">${title}</a>
                <p class="description-project">${description}</p>
            </div>
        `;
        }
    };

}

createProject(
    "./assets/img/area-perímetro.jpeg", 
    "Calcular área e perímetro", 
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/areaEperimetro", 
    "Calcular área e perímetro", 
    "Formulário dinâmico para calcular a área e o perímetro de um retângulo."
).project();

createProject(
    "./assets/img/imc.jpeg", 
    "Calcular IMC", 
    "https://github.com/izabelydev/javascript-aulas/tree/main/25-exerc-imc", 
    "Calcular IMC", 
    "Calcular e classificar o Indíce de Massa Corporal."
).project();

createProject(
    "./assets/img/temperatura.jpeg", 
    "Conversor de temperatura", 
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/temperatura", 
    "Conversor de temperatura", 
    "Conversor de graus Celsius para Fahrenheit e vice-versa."
).project();

createProject(
    "./assets/img/divisibilidade.jpeg", 
    "Divisibilidade", 
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios//checarDivisibilidade", 
    "Divisibilidade", 
    "Checar se um número é divisível pelo outro e mostrar o resultado."
).project();

createProject(
    "./assets/img/faixa-etaria.jpeg", 
    "Faixa etária", 
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/faixaEtaria", 
    "Faixa etária", 
    "Classificar a idade: criança, adolescente, adulto, idoso."
).project();

createProject(
    "./assets/img/formulario-dinamico.jpeg", 
    "Formulário dinâmico", 
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/concatenarStrings", 
    "Formulário dinâmico ", 
    "Formulário responsivo com animações e resposta dinâmica."
).project();


createProject(
    "./assets/img/ingresso.jpeg", 
    "Ingresso", 
    "https://github.com/izabelydev/javascript-aulas/tree/main/Desafios/tarifa", 
    "Ingresso", 
    "Escolher o tipo de ingresso e aplicar o desconto."
).project();