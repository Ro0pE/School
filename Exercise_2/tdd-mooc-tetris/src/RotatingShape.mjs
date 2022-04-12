export class RotatingShape {
   shape;
   counter;
      constructor(){
         this.shape3x3 = `ABC\nDEF\nGHI\n`
         this.shape5x5 = `ABCDE\nFGHIJ\nKLMNO\nPQRST\nUVWXY\n`
      }
      

      toString(){
  

          //return this.shape
          return this.shape3x3;
      }
      rotateRight(){

          return this.algo3x3(2,"right")
         // return this.algo5x5(4,"right")
      }
      rotateLeft(){

        return this.algo3x3(6,"left")
        //return this.algo5x5(20,"left")
    }
    algo3x3(start,side){
        console.log('start ', start , ' side ', side)
        let parse_text = 'ABCDEFGHI'            
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
          return output 

    }
    algo5x5(start,side) {
        let parse_text = 'ABCDEFGHIJKLMNOPQRSTUVWXY'
        let empty = '-------------------------'
        let list = parse_text.split('')
        let empty_list = empty.split('')
        let k = start
        let f = 0
        let s = 0
        let d = 0
        let i;
        for (let j = 0; j < 5;j++){        
              for (i = 0; i < 5; i++){
                  empty_list[k+f-s] = list[d]
                  if (side === "left") {
                    f = f - 5              
                  } 
                  if (side === "right") {            
                    f = f + 5
                  }
                  d++

              }
              if (side === "left"){
                s = s - 1
              }
              if (side === "right")
              s = s + 1
              
              i = 0
              f = 0
    }
          // trim output
          let output = ""
          let g = 1
          for (let i = 0; i < empty_list.length;i++){
            output= output + empty_list[i]
            if (g === 5){
                output = output + "\n"
                g = 0
            }
            g++
          }
          return output

}

}