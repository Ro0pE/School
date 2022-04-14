export class RotatingShape {
   shape;
   counter;
      constructor(){
         this.shape3x3 = `ABC\nDEF\nGHI\n`
         this.shape4x4 = '....\nIIII\n....\n....\n'
         this.shape5x5 = `.....\n.TTT.\n..T..\n.....\n.....\n`
      }
      

      toString(){
  

          //return this.shape
          return this.shape4x4;
      }
      rotateRight(){  // 3 and 5, fix start number

          //return this.algo3x3(2,"right")
          return this.algo4x4(3,"right")
          //return this.algo5x5(4,"right")
          
      }
      rotateLeft(){ // 3 and 5, fix start number

        //return this.algo3x3(6,"left")
        return this.algo4x4(12,"left")
        //return this.algo5x5(20,"left")
    }
    algo3x3(start,side){
        console.log('start ', start , ' side ', side)
        let parse_text = 'ABCDEFGHI'            
          let empty = '.........'
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
    algo4x4(start,side) {
      let parse_text = '....IIII........'
      let empty = '................'
      let list = parse_text.split('')
      let empty_list = empty.split('')
      let k = start
      let f = 0
      let s = 0
      let d = 0
      let i;
      for (let j = 0; j < 4;j++){        
            for (i = 0; i < 4; i++){
                empty_list[k+f-s] = list[d]
                if (side === "left") {
                  f = f - 4              
                } 
                if (side === "right") {            
                  f = f + 4
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
  let output = ""
  let g = 1
  for (let i = 0; i < empty_list.length;i++){
    output= output + empty_list[i]
    if (g === 4){
        output = output + "\n"
        g = 0
    }
    g++
  }
  console.log('shape\n'+output)
  return output
}
    algo5x5(start,side) {
        let parse_text = '......TTT...T............'
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
   /* if (side === "left"){
      for (let f = 0; f < empty_list.length; f++){
        if (empty_list[f] !== '.'){
         // console.log('index ' , f)
          empty_list[f-5] = empty_list[f]
          empty_list[f] = '.'
         // console.log(empty_list[f])
        }
      }
    }*/
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
          console.log('shape\n'+output)
          return output

}

}