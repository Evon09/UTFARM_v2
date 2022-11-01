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
        return "Bom dia";
    } else if (input.toLowerCase()== "boa tarde") {
        return "Boa tarde";
    } else if (input.toLowerCase() == "boa noite") {
        return "Boa noite";
    }
}