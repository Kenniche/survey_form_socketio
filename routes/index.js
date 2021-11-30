module.exports = function Route(app, server){
    const io = require('socket.io') (server);

    // Root route to render the index.ejs view.
    app.get('/', function(req, res) {
        res.render("index");
    })

    io.sockets.on('connection', function (socket) {
        console.log("Client/socket is connected!");
        console.log("Client/socket id is: ", socket.id);
        // all the server socket code goes in here
        socket.on("posting_form", function (data){
            let rando = Math.floor(Math.random()*1000)+1
            socket.emit('updated_message', {response: data, number: rando});
            // socket.emit('random_number', {response: Math.floor(Math.random() * 1000)+1});
        })
    })

};