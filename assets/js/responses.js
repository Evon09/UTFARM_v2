function getBotResponse(input) {
    //rock paper scissors
    if (input == "Pedra") {
        return "Papel";
    } else if (input == "papel") {
        return "Tesoura";
    } else if (input == "Tesoura") {
        return "Pedra";
    }
    if (input == "Bom dia") {
        return "Bom dia";
    } else if (input == "Boa tarde") {
        return "Boa tarde";
    } else if (input == "Boa noite") {
        return "Boa noite";
    }
}