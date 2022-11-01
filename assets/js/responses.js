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
        return "Boa Tarde";
    } 
    if (input == "Quais os produtos?") {
        return "Os nossos produtos são";
    } else if (input == "Qual o contato?") {
        return "Nosso contato é contato@utfarm.com.br";
    } 
}