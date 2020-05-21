const fs = require('fs');

const registroDeRutas = (req, res, next) => {
    fs.appendFileSync('userLogs.txt', `El usuario ingresó a la ruta: ${req.url}\n`);
    next();
};

module.exports = registroDeRutas;