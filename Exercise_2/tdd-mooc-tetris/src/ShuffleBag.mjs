import { Tetromino } from "./Tetromino.mjs";


export class ShuffleBag {
    bag;
    constructor(){
        this.bag = []
    }
    getBagSize(){
        return this.bag.length
    }


    getTetromino(){

        let letters = ['T',"I","O","J","L","S","Z"]
        let size = letters.length
        if (this.bag.length === 0) { // if bag is empty, shuffle new one
            console.log('bag is empty, lets shuffle!')
            while (0 != letters.length){
                let index = Math.floor(Math.random() * size)
                let popped_letter = letters.splice(index,1)
                this.bag.push(popped_letter)
                size--
            }

        }
        let TETRO = new Tetromino()
        let letter = this.bag.pop()
        if (letter[0] === 'T'){
            TETRO.T_SHAPE()
            return TETRO
        }
        if (letter[0] === 'I'){
            TETRO.I_SHAPE()
            return TETRO
        }
        if (letter[0] === 'O'){
            TETRO.O_SHAPE()
            return TETRO
        }
        if (letter[0] === 'S'){
            TETRO.S_SHAPE()
            return TETRO
        }
        if (letter[0] === 'Z'){
            TETRO.Z_SHAPE()
            return TETRO
        }
        if (letter[0] === 'L'){
            TETRO.L_SHAPE()
            return TETRO
        }
        if (letter[0] === 'J'){
            TETRO.J_SHAPE()
            return TETRO
        }


    }



}