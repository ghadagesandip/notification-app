export class Notification {

    constructor(app){
        app.post('/notification/send', this.send);
    }

    send(req, resp){
        resp.send({message:'done'})
    }
}