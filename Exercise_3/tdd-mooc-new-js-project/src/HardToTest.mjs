
import fs from 'fs';
export class HardToTest {
  name;
  date;
  counter;
  sum;
  first;
  fibo;
  helper;
  fibonacci;
  content;

  constructor(){
    this.counter = 0
    this.name = 'hello'
    this.date = new Date()
    this.sum = 0;
    this.first = 0;
    this.fibo = 1;
    this.helper = 0;
    this.fibonacci = []
    this.content = '';
  }
  
  countFibonacci(howManyNumbers){
    this.counter++
    console.log(this.counter,'th fibonacci number is ' , this.fibo)
    if (howManyNumbers === 0){
      return 0
    }
    if (howManyNumbers === 1){
      return this.fibo
    }
    this.fibonacci.push(this.fibo)
    this.content += this.fibo.toString()+" "
    this.helper = this.first
    this.first = this.fibo
    this.fibo = this.helper + this.fibo
    
    fs.writeFileSync('numbers.txt',this.content, error => {
      if (error) {
        console.error(error)
      }
    })

    return this.countFibonacci(howManyNumbers-1)
  }


  getPreviusValues(){

    return 
  }


  getName(){
    return this.name
  }
  getDate(){
    return this.date
  }
  incrementCounter(amount){
    for (let i = 0 ; i < amount; i++){
      this.counter += 1
    }
    return this.counter
  }

  randomFibonacci(){
    const random_number = Math.floor(Math.random() * 10)
    return this.countFibonacci(random_number)
  }



}