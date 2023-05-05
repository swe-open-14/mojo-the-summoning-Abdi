const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const {User} = require('./') 
const Deck = require('./Deck')// import User model
const {db} = require("../db/config.js")

// define in global scope
let user;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  user = await User.create({username: "abdi" }) // use User.create instead of await User.await
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {
  test("Create a user and check username", async ()=>{
    expect(user.username).toBe("abdi")
  } )

  test("check id of user", async ()=>{
    expect(user.id).toBe(1)
  } )


  test("check for assocciation with deck" , async ()=>{
     await user.createDeck({name: "Bill", xp: 99 })
    const userDeck = await user.getDeck();
    // const deck = await Deck.findOne({where: {name: "Bill"}})
    expect(userDeck).toHaveProperty("xp")
  } )

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})

