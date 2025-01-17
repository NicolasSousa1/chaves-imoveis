// Seleção dos elementos do formulário
const titulo = document.getElementById('titulo');
const endereco = document.getElementById('endereco');
const preco = document.getElementById('preco');
const descricao = document.getElementById('descricao');
const quartos = document.getElementById('quartos');
const banheiros = document.getElementById('banheiros');
const vagas = document.getElementById('vagas');
const tamanho = document.getElementById('tamanho');
const imagensInput = document.getElementById('imagens'); // Input para imagens

// Função para gerar o anúncio e criar um arquivo HTML para download
function gerarAnuncio(imagensHTML) {
    const anuncioHTML = `
    <!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Mudar o titulo !-->
    <title>${titulo.value}</title>

    <link rel="stylesheet" href="../../../estilos/anuncios.css">
    <link rel="stylesheet" href="../../../estilos/media-anuncios.css">

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=menu" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css">


    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
</head>

<body>

    <header>
        <div class="header-container">
            <span class="material-symbols-outlined" id="menuh">
                menu
            </span>
            <img src="../../../imagens/logo-nova-removebg-preview.png" alt="Logo" id="logoh">
        </div>

        <img src="../../../imagens/logo-nova-removebg-preview.png" alt="Logo" id="logoh1">

        <nav id="navegacao">
            <img src="../../../imagens/logo-nova-removebg-preview.png" alt="Logo da empresa" id="logoh2">
            <a href="../../../index.html">Home</a>
            <a href="../../../vendas.html">Comprar</a>
            <a href="../../../alugar.html">Locação</a>
            <a href="../../../sobre.html">Quem Somos</a>
            <a href="../../../contato.html">Contato</a>
        </nav>

        <nav id="navegacaog">

            <a href="../../../index.html">Home</a>
            <a href="../../../vendas.html">Comprar</a>
            <a href="../../../alugar.html">Locação</a>
            <a href="../../../sobre.html">sobre nós</a>
            <a href="../../../contato.html">Contato</a>
        </nav>

    </header>

    <main class="container">

        <!-- Caixa de contato (oculta inicialmente) -->
        <div id="caixa-contato" class="caixa-contato">
            <div class="caixa-contato-conteudo">
                <h2>Entre em contato</h2>
                <h3>Informações de Contato</h3>
                <p><strong>Email:</strong> Chaveseliasimoveis@gmail.com</p>
                <p><strong>Telefone:</strong> (11) 94755-8646</p>
                <p><strong>WhatsApp:</strong> (11) 94755-8646</p>
                <button id="fechar-contato" class="btn-contato">Fechar</button>
            </div>
        </div>


        <section class="carrossel-imagens">

            <button class="carrossel-btn preva"><i class="fas fa-chevron-left"></i></button>

            <div class="imagens-container">
                <!-- FOTOS DO APARTAMENTO -->
                ${imagensHTML}
            </div>

            <button class="carrossel-btn nexta"><i class="fas fa-chevron-right"></i></button>
        </section>

        <!-- Modal para exibir as imagens -->
        <div id="modal-imagem" class="modal">
            <span class="close">&times;</span>
            <button class="modal-btn prev"><i class="fas fa-chevron-left"></i></button>
            <img class="modal-content" id="imagem-aberta" src="">
            <button class="modal-btn next"><i class="fas fa-chevron-right"></i></button>
        </div>


        <div class="conteudo">

            <section class="informacoes-descricao">
                <!-- TITULO DO ANUNCIO -->
                <h2>${titulo.value}</h2>

                <!-- ENDEREÇO DO IMÓVEL -->
                <p class="localizacao"><i class="fas fa-map-marker-alt"></i>${endereco.value}</p>

                <!-- PREÇO -->
                <p class="preco">R$ ${preco.value}</p>

                <ul class="detalhes-principais">

                    <!-- NUMERO DE QUARTOS -->
                    <li><i class="fas fa-bed"></i>${quartos.value} Quartos</li>

                    <!-- NUMERO DE BANHEIROS -->
                    <li><i class="fas fa-bath"></i>${banheiros.value} Banheiros</li>

                    <!-- NUMERO DE VAGAS-->
                    <li><i class="fas fa-car"></i>${vagas.value} Vaga de Garagem</li>

                    <!-- TAMANHO EM M²-->
                    <li><i class="fas fa-ruler-combined"></i> ${tamanho.value}m²</li>
                </ul>
                <h3>Descrição</h3>

                <!-- DESCRIÇÃO DO IMÓVEL-->
                <p>
                ${descricao.value}
                </p>
            </section>

            <!-- contato -->
            <section class="contato">
                <h2>Fale com o Anunciante</h2>
                <button class="btn-contato" onclick="abrirContato()">Entrar em Contato</button>
                <button class="btn-contatowpp wppverde">WhatsApp</button>
                <p>WhatsApp: (11) 94755-8646</p>


            </section>
        </div>

        <!-- Mapa -->
        <section class="mapa">
            <h3>Localização</h3>
            <div class="mapa-embed">
                <!-- COLOCAR O LINK DO ENDEREÇO NO GOOGLE MAPS -->
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196724836345!2d-122.08424968532642!3d37.42199977982511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a60ca04df7%3A0x92ff34558e7d3a5d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1631308422074!5m2!1sen!2sus"
                    width="100%" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy;Chaves Imóveis</p>
        <div class="footer-contact">
            <img src="../../../imagens/whatsapp.png" alt="WhatsApp" class="wpp">
            <span>WhatsApp: (11) 94755-8646</span>
        </div>
        <p>Avenida das Pitangueiras 267</p>
    </footer>


    <script>



        const container = document.querySelector('.imagens-container');
        const btnNext = document.querySelector('.nexta');
        const btnPrev = document.querySelector('.preva');

        btnNext.addEventListener('click', () => {
            container.scrollBy({ left: 300, behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            container.scrollBy({ left: -300, behavior: 'smooth' });
        });




        // Obter o ícone de menu e o menu lateral
        const menuHamburger = document.getElementById('menuh');
        const menuLateral = document.getElementById('navegacao');

        // Adicionar o evento de clique ao ícone de menu
        menuHamburger.addEventListener('click', () => {
            // Verifica se o menu está visível ou não
            if (menuLateral.style.transform === 'translateX(0%)') {
                menuLateral.style.transform = 'translateX(-100%)'; // Ocultar o menu
            } else {
                menuLateral.style.transform = 'translateX(0%)'; // Mostrar o menu
            }
        });





        // Obter os botões e a caixa de contato
        const btnContato = document.querySelector('.btn-contato');
        const btnWhatsapp = document.querySelector('.btn-contatowpp');
        const caixaContato = document.getElementById('caixa-contato');
        const btnFecharContato = document.getElementById('fechar-contato');

        // Função para abrir a caixa de contato
        function abrirContato() {
            caixaContato.style.display = 'flex';  // Torna a caixa visível
        }

        // Função para fechar a caixa de contato
        function fecharContato() {
            caixaContato.style.display = 'none';  // Torna a caixa invisível
        }

        // Adicionar eventos de clique para abrir a caixa de contato
        btnContato.addEventListener('click', abrirContato);  // Para o botão "Entrar em Contato"
        btnWhatsapp.addEventListener('click', abrirContato);  // Para o botão "WhatsApp"

        // Adicionar evento de clique para fechar a caixa de contato
        btnFecharContato.addEventListener('click', fecharContato);


        // Seletores principais
        const imagens = document.querySelectorAll('.imagens-container img');
        const modal = document.getElementById('modal-imagem');
        const modalImg = document.getElementById('imagem-aberta');
        const closeModal = document.querySelector('.close');
        const prevBtn = document.querySelector('.modal-btn.prev');
        const nextBtn = document.querySelector('.modal-btn.next');

        let currentImageIndex = 0;

        // Função para abrir o modal
        function abrirModal(index) {
            currentImageIndex = index;
            modalImg.src = imagens[currentImageIndex].src;
            modal.style.display = 'flex';
        }

        // Função para fechar o modal
        function fecharModal() {
            modal.style.display = 'none';
        }

        // Função para ir para a próxima imagem
        function proximaImagem() {
            currentImageIndex = (currentImageIndex + 1) % imagens.length;
            modalImg.src = imagens[currentImageIndex].src;
        }

        // Função para ir para a imagem anterior
        function imagemAnterior() {
            currentImageIndex = (currentImageIndex - 1 + imagens.length) % imagens.length;
            modalImg.src = imagens[currentImageIndex].src;
        }

        // Adicionar eventos para as imagens
        imagens.forEach((img, index) => {
            img.addEventListener('click', () => abrirModal(index));
        });

        // Eventos dos botões do modal
        closeModal.addEventListener('click', fecharModal);
        nextBtn.addEventListener('click', proximaImagem);
        prevBtn.addEventListener('click', imagemAnterior);

        // Fechar o modal ao clicar fora da imagem
        modal.addEventListener('click', (e) => {
            if (e.target === modal) fecharModal();
        });

    </script>



</body>

</html>`;

    // Cria um Blob com o conteúdo HTML gerado
    const blob = new Blob([anuncioHTML], { type: 'text/html' });

    // Cria um link para o download do arquivo
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${titulo.value.replace(/\s+/g, '_')}_anuncio.html`; // Nome do arquivo

    // Clica no link para iniciar o download
    link.click();
}

// Função para lidar com o envio do formulário
function novo_an(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const imagensSelecionadas = imagensInput.files;
    let imagensHTML = '';
    const promises = [];

    // Processa as imagens enviadas
    if (imagensSelecionadas.length > 0) {
        for (const imagem of imagensSelecionadas) {
            const leitor = new FileReader();
            const promise = new Promise((resolve) => {
                leitor.onload = function (e) {
                    imagensHTML += `<img src="${e.target.result}" alt="Imagem do imóvel" style="max-width: 150px; margin: 5px;">`;
                    resolve();
                };
                leitor.readAsDataURL(imagem); // Ler o arquivo como Base64
            });
            promises.push(promise);
        }

        // Após todas as imagens serem processadas
        Promise.all(promises).then(() => {
            gerarAnuncio(imagensHTML); // Gera o anúncio com as imagens e baixa o arquivo HTML
        });
    } else {
        gerarAnuncio('<p>Nenhuma imagem enviada.</p>'); // Se não houver imagens
    }
}
