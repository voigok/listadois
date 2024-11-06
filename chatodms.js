function contarCaracteres(string) {
    let contador = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            contador++;
        }
    }
    return contador;
}

function ehPalindromo(string) {
    let stringLimpa = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            stringLimpa += string[i].toLowerCase();
        }
    }
    let reverso = '';
    for (let i = stringLimpa.length - 1; i >= 0; i--) {
        reverso += stringLimpa[i];
    }
    return stringLimpa === reverso;
}

function contarVogaisEConsoantes(string) {
    let vogais = 0;
    let consoantes = 0;
    const vogaisString = 'aeiouáéíóúãõ';
    const consoantesString = 'bcdfghjklmnpqrstvwxyz';

    for (let i = 0; i < string.length; i++) {
        const char = string[i].toLowerCase();
        if (vogaisString.includes(char)) {
            vogais++;
        } else if (consoantesString.includes(char)) {
            consoantes++;
        }
    }
    return {
        vogais: vogais,
        consoantes: consoantes
    };
}

function substituirCaracteres(string, charAntigo, charNovo) {
    let resultado = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] === charAntigo) {
            resultado += charNovo;
        } else {
            resultado += string[i];
        }
    }
    return resultado;
}

function somarElementos(M) {
    let soma = 0;
    for (let i = 0; i < M.length; i++) {
        soma += M[i];
    }
    return soma;
}

function numeroPresente(M, numero) {
    for (let i = 0; i < M.length; i++) {
        if (M[i] === numero) {
            return true;
        }
    }
    return false;
}

function imprimirDiagonalPrincipal(M) {
    for (let i = 0; i < M.length; i++) {
        console.log(M[i][i]);
    }
}

console.log(contarCaracteresSemEspacos("Olá Mundo"));
console.log(verificarPalindromo("radar"));
console.log(contarVogaisEConsoantes("Exemplo de string"));
console.log(substituirCaracteresEmTexto("banana", "a", "o"));
console.log(somarElementosArray([1, 2, 3, 4, 5]));
console.log(verificarNumeroPresente([1, 2, 3, 4, 5], 3));
imprimirDiagonalPrincipalDaMatriz([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);