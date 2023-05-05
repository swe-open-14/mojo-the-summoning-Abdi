const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
// const {Deck} = require('./') // import User model
const { Deck, Cards } = require('./') //
const {db} = require("../db/config.js")

// define in global scope
let deck;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({name: "Bill", xp: 99 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  test("Create a user and check username", async ()=>{
    expect(deck.name).toBe("Bill")
  } )

  test("check xp of deck", async ()=>{
    expect(deck.xp).toBe(99)
  } )

  test("check for assocciation with card" , async ()=>{
    await deck.createCard({ name: "jordan", mojo: 9, stamina: 87, imgURL: "www.freeIMages.com"})
   const deckCards = await deck.getCards();
   expect(deckCards[0]).toHaveProperty("stamina");
 } )

//  test("check for assocciation with deck" , async ()=>{
//   await deck.createDeck({name: "Bill", xp: 99 })
//  const userDeck = await user.getDeck();
//  // const deck = await Deck.findOne({where: {name: "Bill"}})
//  expect(userDeck).toHaveProperty("xp")
// } )

  
//   /**
//    * Create more tests
//    * E.g. check that the username of the created user is actually gandalf
//    */
})

