

function getBotResponse(input) {
    //rock paper scissors
    if (input== "Pedra") {
        return "Papel";
    } else if (input == "papel") {
        return "Tesoura";
    } else if (input == "Tesoura") {
        return "Pedra";
    }

    // Simple responses
    if (input.toLowerCase()  == "bom dia") {
        return "Bom dia, como podemos te ajudar?";
    } else if (input == "Obrigado") {
        return "A Utfarm agradece o contato!";
    } else {
        return "Não entendemos a sua dúvida, nos contate no email contato@utfarm.com.br";
    }
    






}
