export class Notification {
    constructor(app) {
        app.get('/notification', this.index);
        app.post('/notification/send', this.send);
    }

    send(req, resp){
        resp.send({message:'done'})
    }

    index(req, resp){
        resp.send({message:'done'})
    }
}