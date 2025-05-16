//scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const altaData = [
        { name: 'Vingadores', category: 'Marvel', image: 'img/marvel.jpeg' },
        { name: 'Princesas da Disney', category: 'Disney', image: 'img/disney-princesas.jpeg' },
        { name: 'Power Ranger Vermelho', category: 'Power-ranger', image: 'img/red-rangers.jpg' }
    ];

    const destaqueData = [
        { name: 'Personagem de the big bang theory', category: 'Séries', image: 'img/the-big-bang.jpeg' },
        { name: 'Você no mundo de Harry Potter', category: 'Harry Potter', image: 'img/harry-potter.jpg' },
        { name: 'Qual herói da DC você seria?', category: 'DC Comics', image: 'img/DC-heroes.jpeg' }
    ];

    const altaGrid = document.querySelector('.alta-grid');
    const destaqueGrid = document.querySelector('.destaque-grid');

    altaData.forEach(quiz => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${quiz.image}" alt="${quiz.name}" class="card-image">
            <h3>${quiz.name}</h3>
            <p>${quiz.category}</p>
            <button class="char-card" data-tema="${quiz.category}">Quem você é?</button>`;

        altaGrid.appendChild(card);
    });

    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('char-card')) {
            const tema = event.target.dataset.tema;
            // Envia o tema pela URL
            window.location.href = `char.html?tema=${encodeURIComponent(tema)}`;
        }
    });

    destaqueData.forEach(quiz => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <img src="${quiz.image}" alt="${quiz.name}" class="card-image">
            <h3>${quiz.name}</h3>
            <p>${quiz.category}</p>
            <button class="quiz-card">Você sabe?</button>
        `;

        destaqueGrid.appendChild(card);

        // Lógica para redirecionar ao clicar nos botões

        // Botões de personagens (alta)
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('char-card')) {
                const tema = event.target.dataset.tema.toLowerCase();

                let destino;
                switch (tema) {
                    case 'disney':
                        destino = 'char.html';
                        break;
                    case 'marvel':
                        destino = 'ving.html';
                        break;
                    case 'power-ranger':
                        destino = 'power-ranger.html';
                        break;
                    default:
                        destino = 'char.html'; // fallback
                }

                window.location.href = `${destino}?tema=${encodeURIComponent(tema)}`;
            }

            if (event.target.classList.contains('quiz-card')) {
                window.location.href = 'quiz.html';
            }
        });


        // Botões de quiz (destaque)
        const quizButtons = document.querySelectorAll('.quiz-card');
        quizButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Vai para a página quiz.html
                window.location.href = 'quiz.html';
            });
        });


    });
});