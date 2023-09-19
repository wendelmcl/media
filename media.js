const calcular = document.getElementById('calcular');

function calcularMedia () {
    const nome = document.getElementById('nome').value;
    const nota1 = +document.getElementById('nota1').value;
    const nota2 = +document.getElementById('nota2').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && nota1 !== '' && nota2 !== '') {


        const media = ((nota1 + nota2) / 2);

        let classificacao = '';

        if (media >= 7){
            classificacao = 'Aprovado.';
        }else if (media >= 4 && media <=7) {
            classificacao = 'AP3.';
        }else{
            classificacao = 'Reprovado.';
        }

        resultado.textContent = `${nome} sua nota é ${media} e sua classificação é: ${classificacao}`;
        
    }else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', calcularMedia);