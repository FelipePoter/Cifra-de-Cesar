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
    const list = document.querySelector(".decrypt-list");
    list.innerHTML = ""; // Limpa a lista anterior

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

        const listItem = document.createElement("li");
        listItem.textContent = `Texto descriptografado: ${decrypted}`;
        list.appendChild(listItem);
    } else {
        // Caso nenhuma chave seja fornecida, exibe todas as variações
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

            const listItem = document.createElement("li");
            listItem.textContent = `Chave ${shift}: ${variation}`;
            list.appendChild(listItem);
        }
    }
}

function animateButton(button) {
    button.classList.add("clicked");
    setTimeout(() => {
        button.classList.remove("clicked");
    }, 150);
}

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => animateButton(button));
});
