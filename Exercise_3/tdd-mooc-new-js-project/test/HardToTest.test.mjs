import { expect } from "chai";
import { HardToTest } from "../src/HardToTest.mjs";
import fs from 'fs';

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

describe("Hard to test", () => {

    xit("Object name is hello", () => {
        const object = new HardToTest()
      expect(object.getName()).equal('hello')
    });
    xit("Object day is same as today", () => {
        const object = new HardToTest()
        const now = new Date().getDay()
      expect(object.getDate().getDay()).equal(now)
    });
    xit("Object year is same as today", () => {
        const object = new HardToTest()
        const now = new Date().getFullYear()
      expect(object.getDate().getFullYear()).equal(now)
    });
    xit("Run counter x 100", () => {
        const object = new HardToTest()
        const result = object.incrementCounter(100)
      expect(result).equal(100)
    });
    xit("Count fibonacci 0", () => {
        const object = new HardToTest()
        const result = object.countFibonacci(0)
      expect(result).equal(0)
    });
    xit("Count fibonacci 1", () => {
        const object = new HardToTest()
        const result = object.countFibonacci(1)
      expect(result).equal(1)
    });
    xit("Count fibonacci 4", () => {
        const object = new HardToTest()
        const result = object.countFibonacci(4)
      expect(result).equal(3)
    });
    xit("Count fibonacci 8", () => {
        const object = new HardToTest()
        const result = object.countFibonacci(8)
      expect(result).equal(21)
    });
    xit("Count fibonacci 49", () => {
        const object = new HardToTest()
        const result = object.countFibonacci(49)
      expect(result).equal(7778742049)
    });
    xit("Count fibonacci random 1-10", () => {
        const object = new HardToTest()
        const result = object.randomFibonacci()
        console.log('result' ,result)
      expect(result).lessThanOrEqual(34)
    });
    xit("Find a fibonacci number which is today's date(number)", () => {
        const object = new HardToTest()
        const today = new Date().getDate()
        console.log('today is ' , today,'th of May' )
        const result = object.countFibonacci(today)
        console.log('result' ,result)
      expect(result).equal(3)
    });
    xit("Find a fibonacci number which is tomorrows's date(number)", () => {
        const object = new HardToTest()
        const tomorrow = new Date().getDate() + 1
        console.log('tomorrow is ' , tomorrow,'th of May' )
        const result = object.countFibonacci(tomorrow)
        console.log('result' ,result)
      expect(result).equal(5)
    });
    xit("Pick a random date between 2000-01-01 and current time, then find fibonacci number of that random date (number)", () => {
        const object = new HardToTest()
        const random_date = randomDate(new Date(2000,1,1), new Date())
        const get_random_day = random_date.getDate()
        const result = object.countFibonacci(get_random_day)
        if (result === 10){
            expect(result).equal(34)
        }
        if (result === 9){
            expect(result).equal(21)
        }
        if (result === 8){
            expect(result).equal(13)
        }

      expect(result).lessThanOrEqual(832040)
    });

  });