const { createClient, print } = require('redis');

class RedisMod {
    constructor(args) {
        this.client = createClient();
        this.client.on('error', this.onError);
        this.client.on('ready', (err) => {
            if(err) return this.onError(err);
            console.log('connection ready')
        });
    }

    onError(err) {
        console.log('Something went wrong ' + err);
    }

    set = (key,value, errCb) => {
        try {
            if(!key) {
                throw new Error('redis set, key cann not be empty')
            }
            if(!value) {
                throw new Error('redis set, value cann not be empty')
            }
            this.client.set(key, value, print);
        } catch(e) {
            this.onError(e);
            if(errCb) {
                errCb(e)
            }
        }
    }

    get(key, errCb) {
        try {
            if(!key) {
                throw new Error('redis get, key cann not be empty')
            }

            return new Promise((resolve, reject) => {
                this.client.get(key, (err, result) => {
                    if(err) {
                        return reject(err);
                    }

                    console.log(result);
                    resolve(result);
                })
            })
        }catch(e) {
            this.onError(e);
            if(errCb) {
                errCb(e)
            }
        }
    }
}

module.exports = new RedisMod();