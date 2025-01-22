const alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesar_cipher_encrypt() {
    let message = document.querySelector(".encrypt").value.toLowerCase();
    let keyInput = document.querySelector(".key-encrypt").value;
    let shift = keyInput ? parseInt(keyInput) : Math.floor(Math.random() * 25) + 1; // Gera chave aleatória se não for fornecida
    let encrypted = "";

    for (let char of message) {
        if (alphabet.includes(char)) {
            let new_index = (alphabet.indexOf(char) + shift) % 26;
            encrypted += alphabet[new_index];
        } else {
            encrypted += char; // Mantém espaços e caracteres especiais
        }
    }

    document.querySelector(".result").textContent = `Texto criptografado: ${encrypted} | Chave: ${shift}`;
}

function caesar_cipher_decrypt() {
    let message = document.querySelector(".decrypt").value.toLowerCase();
    let keyInput = document.querySelector(".key-decrypt").value;
    let result = "";

    if (keyInput) {
        // Caso uma chave seja fornecida
        let shift = parseInt(keyInput);
        let decrypted = "";

        for (let char of message) {
            if (alphabet.includes(char)) {
                let new_index = (alphabet.indexOf(char) - shift + 26) % 26; // Evita índices negativos
                decrypted += alphabet[new_index];
            } else {
                decrypted += char; // Mantém espaços e caracteres especiais
            }
        }

        result = `Texto descriptografado: ${decrypted}`;
    } else {
        // Caso nenhuma chave seja fornecida, exibe todas as variações
        result = "Variações possíveis:\n";

        for (let shift = 1; shift <= 25; shift++) {
            let variation = "";

            for (let char of message) {
                if (alphabet.includes(char)) {
                    let new_index = (alphabet.indexOf(char) - shift + 26) % 26;
                    variation += alphabet[new_index];
                } else {
                    variation += char;
                }
            }

            result += `Chave ${shift}: ${variation}\n`;
        }
    }

    document.querySelector(".result").textContent = result;
}
