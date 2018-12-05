'use strict'
let bears = [{type: 'Grizzly', color: 'Brown', age: 5}, {type: 'Polar', color: 'white', age: 10}]
class BearController {
    bearGetSend({request, response}){
    response.send(bears)
    }
}


module.exports = BearController
