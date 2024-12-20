
/* função para abrir o menu no mobile */

function openmenu() {


    let menuh = document.getElementById('navegacao')

    if (menuh.style.display == 'flex') {
    
    menuh.style.display = 'none' 

    } else {

        menuh.style.display = 'flex'

    }

}