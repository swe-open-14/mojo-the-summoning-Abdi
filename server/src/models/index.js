const User = require('./User')
const Deck = require('./Decks')
const Cards = require('./Cards')
const Attacks = require('./Attacks')
// import the rest of your models above

//set up the associations here
User.hasOne(Deck)
Deck.belongsTo(User)

Deck.belongsToMany(Cards, {through: "DecksCards"});
Cards.belongsTo(Deck)


Cards.belongsToMany(Attacks, {through: "CardsAttack"});
Attacks.belongsToMany(Cards, {through: "CardsAttack"});


// and then export them all below
module.exports = {
    User,
    Deck,
    Cards,
    Attacks
}
