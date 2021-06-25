// Obtener todos los usuarios api externa jsonplaceholder
exports.getAllUsersExt = (req, res) => {
    const Request = require("request");
    Request.get("https://jsonplaceholder.typicode.com/todos", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(JSON.parse(body));
    });
};
