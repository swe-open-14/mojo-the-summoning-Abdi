const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const { Cards, Attacks } = require('./') //
const { db } = require("../db/config.js")

// define in global scope
let card;

// clear db and create new card before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Cards.create({ id: 1, name: "jordan", mojo: 9, stamina: 87, imgURL: "www.freeIMages.com"}) 
})

// clear db after tests
afterAll(async () => {
  await db.sync({ force: true })
})

describe('card', () => {
  test("Create a card and check name", async () => {
    expect(card.name).toBe("jordan")
  })

  test("check id of card", async () => {
    expect(card.id).toBe(1)
  })

  test("check mojo of card", async () => {
    expect(card.mojo).toBe(9)
  })

  test("check stamina of card", async () => {
    expect(card.stamina).toBe(87)
  })

  test("check imgURL of card", async () => {
    expect(card.imgURL).toBe("www.freeIMages.com")
  })

  test("check for assocciation with attack" , async ()=>{
    await card.createAttack({ title: "testTitle", mojoCost: 20, staminaCost: 50 })
   const cardAttacks = await card.getAttacks();
   expect(cardAttacks[0]).toHaveProperty("mojoCost");
 } )
})
