function getBotResponse(input) {
    //rock paper scissors
    if (input.toLowerCase() == "pedra") {
        return "Papel";
    } else if (input.toLowerCase() == "papel") {
        return "Tesoura";
    } else if (input.toLowerCase() == "tesoura") {
        return "Pedra";
    }
    if (input.toLowerCase() == "bom dia") {
        return "Bom dia, como podemos te ajudar?";
    } else if (input.toLowerCase()== "boa tarde") {
        return "Boa tarde, como podemos te ajudar?";
    } else if (input.toLowerCase() == "boa noite") {
        return "Boa noite, como podemos te ajudar?";
    }
    if (input.toLowerCase() == "quais são os produtos?") {
        return "Os produtos são...";
    } else if (input.toLowerCase()== "qual o contato?") {
        return "O nosso contato é contato@utfarm.com.br";
    } else if (input.toLowerCase() == "qual o endereço?") {
        return "Nós ficamos localizados em...";
    }
}