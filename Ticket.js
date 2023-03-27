const shortid = require("shortid");
class Ticket{
    /**
     * 
     * @param {string} username 
     * @param {number} price 
     */
    constructor(username,price){
        this.name = username
        this.id = shortid.generate();
        this.price = price
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }
}



module.exports = Ticket;