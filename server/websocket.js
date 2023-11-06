const ws = require('ws');

const wss = new ws.Server({
    port: 5001,
}, () => console.log(`Server started on 5001`));


wss.on('connection', function connection(ws){
    // private chat
    //ws.id = Date.now();
    // listener
    ws.on('message', function (message) {
        // subscribing on event and send event in callback
        message = JSON.parse(message);
        // switch case of event
        switch(message.event){
            case 'message':
                broadcastMessage(message);
                break;
            case 'connection':
                broadcastMessage(message);
                break;
        }
    });
});

function broadcastMessage(message, id) {
    wss.clients.forEach(client => {
        //if( client.id === id ) {
            client.send(JSON.stringify(message))
        //}
    })
}