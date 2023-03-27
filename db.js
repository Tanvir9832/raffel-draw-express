const Ticket = require("./Ticket");

class MyDb{
    constructor(){
      this.tickets = [];
    }   

    // ctreate new ticket
    /**
     * 
     * @param {string} username 
     * @param {number} price 
     * @returns {ticket}
     */
    create(username,price){
        const ticket = new Ticket(username,price);
        this.tickets.push(ticket);
        return ticket;
    }

    // sell multiple ticket
/**
 * 
 * @param {string} username 
 * @param {number} price 
 * @param {number} quantity 
 * @returns {Array<Ticket>}
 */
    bulkCreate(username,price,quantity){
        const result = [];
        for(let i=0; i<quantity; i++){
            const ticket = this.create(username,price);
            result.push(ticket);
        }
        return result;
    }

    // return all tickets
    find(){
        return this.tickets;
    }

    // single ticket
/**
 * 
 * @param {string} ticketId 
 * @returns {ticket}
 */
    findById( ticketId ){
     const ticket =   this.tickets.find(item=> item.id === ticketId);
        return ticket;
    }

    //find all ticket of an user
    /**
     * 
     * @param {string} username 
     * @returns {Array<tickets>}
     */
    findByUserName(username){
        const tickets = this.tickets.filter(item=> item.username === username)
        return tickets;
    }
    // update ticket info
    /**
     * 
     * @param {{username : string , price : number}} ticketBody
     * @param {string} ticketId 
     * @returns {Ticket}
     */
    updateById(ticketBody,ticketId){
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updatedAt = new Date();
        return ticket ;
    }

    // delete ticket 
    /**
     * 
     * @param {string} ticketId 
     */
    deleteById(ticketId){
        const index = this.tickets.findIndex(ticket => ticket.id === ticketId)
        if(index != -1){
            this.tickets.splice(index,1);
            return true;
        }
        else{
            return false;
        }
    }

    // Draw 
    draw(){
        

    }
}


const myDb = new MyDb();

module.exports = myDb;