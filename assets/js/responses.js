function getBotResponse(input) {
    //rock paper scissors
    if (input.toLowerCase() == "Pedra") {
        return "Papel";
    } else if (input.toLowerCase() == "papel") {
        return "Tesoura";
    } else if (input.toLowerCase() == "Tesoura") {
        return "Pedra";
    }
    if (input.toLowerCase() == "Bom dia") {
        return "Bom dia";
    } else if (input.toLowerCase()== "Boa tarde") {
        return "Boa tarde";
    } else if (input.toLowerCase() == "Boa noite") {
        return "Boa noite";
    }
}