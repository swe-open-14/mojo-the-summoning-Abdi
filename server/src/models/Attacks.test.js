const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals')
const Attacks = require('./Attack') // import User model
const {db} = require("../db/config.js")

// define in global scope
let attack;

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attacks.create({ id: 1, title: "testTitle", mojoCost: 20, staminaCost: 50 })
})

// clear db after tests
afterAll(async () => await db.sync({ force: true }))

describe('User', () => {

    test("check id of attack", async ()=>{
        expect(attack.id).toBe(1)
      } )

  test("Create an attack and check name", async ()=>{
    expect(attack.title).toBe("testTitle")
  } )

 

  test("check mojo of attack", async ()=>{
    expect(attack.mojoCost).toBe(20)
  } )

  test("check staminaCost of attack", async ()=>{
    expect(attack.staminaCost).toBe(50)
  } )

  /**
   * Create more tests
   * E.g. check that the username of the created user is actually gandalf
   */
})

