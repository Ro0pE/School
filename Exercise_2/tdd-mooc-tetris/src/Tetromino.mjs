export class Tetromino {

       width;
       height;
       coords;
       shape;
       position;
       name;

       constructor() {
           this.width = 4;
           this.height = 4;
           this.coords = []
           this.shape = ''
           this.name = ''
           this.position = 1
       }
       getCoords(){
           return this.coords
       }
       setCoords(coords) {
           this.coords = coords
       }
       deleteCoords(){
           this.coords = []
       }
       getCoordsSize() {
           return this.coords.length
       }



       T_SHAPE(){         
        let t_pieces = '....TTT..T......'  
        let t_shape = t_pieces.split('')
        this.shape = t_shape
        this.name = 'T'
        this.coords.push(13,14,15,24)
           return t_shape
       }
       
       I_SHAPE(){
        let i_pieces = '....IIII........'  
        let i_shape = i_pieces.split('')
        this.shape = i_shape
        this.name = 'I'
        this.coords.push(13,14,15,16)
           return i_shape
       }
       J_SHAPE(){
        let j_pieces = '....JJJ...J.....'  
        let j_shape = j_pieces.split('')
        this.shape = j_shape
        this.name = 'J'
        this.coords.push(13,14,15,25)
           return j_shape
       }
       L_SHAPE(){
        let l_pieces = '....LLL.L......'  
        let l_shape = l_pieces.split('')
        this.shape = l_shape
        this.name = 'L'
        this.coords.push(13,14,15,23)
           return l_shape
       }
       Z_SHAPE(){
        let z_pieces = '....ZZ...ZZ.....'  
        let z_shape = z_pieces.split('')
        this.shape = z_shape
        this.name = 'Z'
        this.coords.push(13,14,24,25)
           return z_shape
       }
       S_SHAPE(){         
        let s_pieces = '.....SS.SS......'
        let s_shape = s_pieces.split('')
        this.shape = s_shape
        this.name = 'S'
        this.coords.push(15,14,24,23)

           return s_shape
       }
       O_SHAPE(){
        let o_pieces = '.....OO..OO.....'  
        let o_shape = o_pieces.split('')
        this.shape = o_shape
        this.name = 'O'
        this.coords.push(4,5,14,15)
           return o_shape
       }

       getBlockedAreas(){
        return this.coords
        }
         setBlockedAreas(index){
            this.coords.push(index)

        }
        getName(){
            return 'test'

        }
       rotateRight(){
           if (this.name === 'I'){
            if (this.position === 1){
                let first = this.coords[0] - 8
                let second = this.coords[1] + 1
                let third = this.coords[2] + 10
                let fourth = this.coords[3] + 19
                this.coords = []
                this.coords.push(first,second,third,fourth)         
                this.position = 2
                return
            }
            if (this.position === 2) {
                let first = this.coords[0] + 8
                let second = this.coords[1] - 1
                let third = this.coords[2] - 10
                let fourth = this.coords[3] - 19
                this.coords = []
                this.coords.push(first,second,third,fourth)         
                this.position = 1
                return
            }
           }
           if (this.name === 'Z'){  
               if (this.position === 1){
                let first = this.coords[0] - 8
                let second = this.coords[1] + 1
                let third = this.coords[2] - 10
                let fourth = this.coords[3] - 1
                this.coords = []
                this.coords.push(first,second,third,fourth)         
                this.position = 2
                return
               }
               if (this.position === 2){
                let first = this.coords[0] + 8
                let second = this.coords[1] - 1
                let third = this.coords[2] + 10
                let fourth = this.coords[3] + 1
                this.coords = []
                this.coords.push(first,second,third,fourth)         
                this.position = 1
                return
               }
           }
           if (this.name === 'S'){  
            if (this.position === 1){
             let first = this.coords[0] - 12
             let second = this.coords[1] - 1
             let third = this.coords[2] - 10
             let fourth = this.coords[3] + 1
             this.coords = []
             this.coords.push(first,second,third,fourth)         
             this.position = 2
             return
            }
            if (this.position === 2){
                let first = this.coords[0] + 12
                let second = this.coords[1] + 1
                let third = this.coords[2] + 10
                let fourth = this.coords[3] - 1
             this.coords = []
             this.coords.push(first,second,third,fourth)         
             this.position = 1
             return
            }
        }
           if (this.name === 'O'){
               return
           }
           if (this.name === 'T' || this.name === 'L' || this.name === 'J'){
            let fourth = 0
            if (this.position === 4){
                let first = this.coords[0] - 11
                let second = this.coords[1]
                let third = this.coords[2] + 11
                if (this.name === 'T'){
                     fourth = this.coords[3] + 9
                }
                if (this.name === 'L'){
                     fourth = this.coords[3] - 2
                }
                if (this.name === 'J') {
                    fourth = this.coords[3] + 20
                }

                this.coords = []
                this.coords.push(first,second,third,fourth)         
                this.position = 1
                return
            } else if (this.position === 3){
                let first = this.coords[0] - 1
                let second = this.coords[1] - 10
                let third = this.coords[2]  - 19
                if (this.name === 'T'){
                     fourth = this.coords[3] + 1
                }
                if (this.name === 'L'){
                     fourth = this.coords[3] + 10
                }
                if (this.name === 'J') {
                    fourth = this.coords[3] - 8
                }

                this.coords = []
                this.coords.push(first,second,third,fourth)    
                this.position = 4
                return          
            } else if (this.position === 2){
                let first = this.coords[0] + 21
                let second = this.coords[1] + 10
                let third = this.coords[2] - 1
                if (this.name === 'T'){
                     fourth = this.coords[3] + 1    
                }
                if (this.name === 'L'){
                     fourth = this.coords[3] + 12  
                }
                if (this.name === 'J') {
                    fourth = this.coords[3] - 10
                }

                this.coords = []
                this.coords.push(first,second,third,fourth)
                this.position = 3
                return                 
            } else if (this.position === 1){        
                let first = this.coords[0] - 9
                let second = this.coords[1] 
                let third = this.coords[2] + 9
                if (this.name === 'T'){
                     fourth = this.coords[3] - 11  
                }
                if (this.name === 'L'){
                     fourth = this.coords[3] - 20
                }
                if (this.name === 'J') {
                    fourth = this.coords[3] - 2
                }

                this.coords = []
                this.coords.push(first,second,third,fourth)
                this.position = 2
                return
            }
        }
        }
        rotateLeft(){
            if (this.name === 'I') {
                if (this.position === 1){
                    let first = this.coords[0] - 8
                    let second = this.coords[1] + 1
                    let third = this.coords[2] + 10
                    let fourth = this.coords[3] + 19
                    this.coords = []
                    this.coords.push(first,second,third,fourth)         
                    this.position = 2
                    return
                }
                if (this.position === 2) {
                    let first = this.coords[0] + 8
                    let second = this.coords[1] - 1
                    let third = this.coords[2] - 10
                    let fourth = this.coords[3] - 19
                    this.coords = []
                    this.coords.push(first,second,third,fourth)         
                    this.position = 1
                    return
                }             
            }
            if (this.name === 'Z'){  
                if (this.position === 1){
                 let first = this.coords[0] - 8
                 let second = this.coords[1] + 1
                 let third = this.coords[2] - 10
                 let fourth = this.coords[3] - 1
                 this.coords = []
                 this.coords.push(first,second,third,fourth)         
                 this.position = 2
                 return
                }
                if (this.position === 2){
                 let first = this.coords[0] + 8
                 let second = this.coords[1] - 1
                 let third = this.coords[2] + 10
                 let fourth = this.coords[3] + 1
                 this.coords = []
                 this.coords.push(first,second,third,fourth)         
                 this.position = 1
                 return
                }
            }
            if (this.name === 'S'){  
                if (this.position === 1){
                 let first = this.coords[0] - 12
                 let second = this.coords[1] - 1
                 let third = this.coords[2] - 10
                 let fourth = this.coords[3] + 1
                 this.coords = []
                 this.coords.push(first,second,third,fourth)         
                 this.position = 2
                 return
                }
                if (this.position === 2){
                    let first = this.coords[0] + 12
                    let second = this.coords[1] + 1
                    let third = this.coords[2] + 10
                    let fourth = this.coords[3] - 1
                 this.coords = []
                 this.coords.push(first,second,third,fourth)         
                 this.position = 1
                 return
                }
            }
            if (this.name === 'O'){
                return
            }
            if (this.name === 'T' || this.name === 'L' || this.name === 'J') {
                let fourth = 0
                if (this.position === 4){
                    let first = this.coords[0] + 1
                    let second = this.coords[1] +10
                    let third = this.coords[2] + 19
                    if (this.name === 'T'){
                        fourth = this.coords[3] - 1
                    }
                    if (this.name === 'L'){
                        fourth = this.coords[3] - 10
                    }
                    if (this.name === 'J') {
                        fourth = this.coords[3] + 8
                    }
                    this.coords = []
                    this.coords.push(first,second,third,fourth)             
                    this.position = 3
                    return
                    
                } else if (this.position === 3){
                    let first = this.coords[0] - 21
                    let second = this.coords[1] - 10
                    let third = this.coords[2] + 1
                    if (this.name === 'T'){
                        fourth = this.coords[3] - 1
                    }
                    if (this.name === 'L'){
                        fourth = this.coords[3] - 12
                    }
                    if (this.name === 'J') {
                        fourth = this.coords[3] + 10
                    }

                    this.coords = []
                    this.coords.push(first,second,third,fourth)
                    this.position = 2
                    return            
                } else if (this.position === 2){         
                    let first = this.coords[0] + 9
                    let second = this.coords[1] 
                    let third = this.coords[2] - 9
                    if (this.name === 'T'){
                        fourth = this.coords[3] + 11
                    }
                    if (this.name === 'L'){
                        fourth = this.coords[3] + 20
                    }
                    if (this.name === 'J') {
                        fourth = this.coords[3] + 2
                    }

                    this.coords = []
                    this.coords.push(first,second,third,fourth)
                    this.position = 1
                    return                      
                } else if (this.position === 1){
                    let first = this.coords[0] + 11
                    let second = this.coords[1] 
                    let third = this.coords[2]  - 11
                    if (this.name === 'T'){
                        fourth = this.coords[3] - 9
                    }
                    if (this.name === 'L'){
                        fourth = this.coords[3] + 2
                    }
                    if (this.name === 'J') {
                        fourth = this.coords[3] - 20
                    }
                     
                    this.coords = []
                    this.coords.push(first,second,third,fourth)
                    this.position = 4
                    return 
                }
            }

    }

    algo3x3(start,side,shape){
          let parse_text = shape           
          let empty = '_________'
          let list = parse_text.split('')
          let empty_list = empty.split('')
          let k = start
          let f = 0
          let s = 0
          let d = 0
          let i;
          for (let j = 0; j < 3;j++){        
                for (i = 0; i < 3; i++){
                    empty_list[k+f-s] = list[d]
                    if (side === "left") {
                        f = f - 3              
                      } 
                      if (side === "right") {            
                        f = f + 3
                      }
                    
                    d++
                }
                if (side === "left"){
                    s = s - 1
                }
                if (side === "right") {
                    s = s + 1
                }
                i = 0
                f = 0
        }
        // trim output
        let new_shape = "";
        for (let f = 0; f < empty_list.length;f++){
            new_shape = new_shape+empty_list[f]
        }

          let output = ""
          let g = 1
          for (let i = 0; i < empty_list.length;i++){
            output= output + empty_list[i]
            if (g === 3){
                output = output + "\n"
                g = 0
            }
            g++
          }
          this.shape = new_shape // update object shape
          
          return empty_list 

    }
}


  