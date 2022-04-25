export class RotatingShape {
   shape;
   counter;
   position_up
   position_right
   position_left
   position_down
      constructor(){
         this.shape = '....TTT..T......'
         this.position_up = true;
         this.position_down = false;
         this.position_left = false;
         this.position_right = false;
      }
    
      toString(){
        let fix = '....\nTTT.\n.T..\n....\n'
          return fix;
      }

      rotateLeft(){
        let parse_text = this.shape           
        let empty = '----------------'
        let list = parse_text.split('')
        let empty_list = empty.split('')
        for (let i = 0; i < list.length; i++){ // clear shape
          list[i] = '.'
        }
        if (this.position_up){
          list[1] = 'T'
          list[5] = 'T'
          list[6] = 'T'
          list[9] = 'T'
          this.position_up = false
          this.positon_right = true
        }
        if (this.position_right){
          list[5] = 'T'
          list[8] = 'T'
          list[9] = 'T'
          list[10] = 'T'
          this.position_right = false
          this.position_down = true

        }

        console.log('new shape ' , list)
        let output = ""
        let g = 1
        for (let i = 0; i < list.length;i++){
          output= output + list[i]
          if (g === 4){
              output = output + "\n"
              g = 0
          }
          g++
        }
        return output

      }

      rotateRight(){
        let parse_text = this.shape           
        let empty = '----------------'
        let list = parse_text.split('')
        let empty_list = empty.split('')
        for (let i = 0; i < list.length; i++){ // clear shape
          list[i] = '.'
        }
        if (this.position_up){
          list[1] = 'T'
          list[4] = 'T'
          list[5] = 'T'
          list[9] = 'T'
          this.position_up = false
          this.positon_righ = true
        }
        if (this.position_right){
          list[5] = 'T'
          list[8] = 'T'
          list[9] = 'T'
          list[10] = 'T'
          this.position_right = false
          this.position_down = true

        }

        console.log('new shape ' , list)
        let output = ""
        let g = 1
        for (let i = 0; i < list.length;i++){
          output= output + list[i]
          if (g === 4){
              output = output + "\n"
              g = 0
          }
          g++
        }
        return output
      

      }



}