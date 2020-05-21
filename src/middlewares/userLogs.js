const fs = require('fs');

const registroDeRutas = (req, res, next) => {
    const frase = 'El usuario ingresó a la ruta: '
    fs.appendFileSync('./logs/userLogs.txt', frase + req.url);
    next();
};

module.exports = registroDeRutas;