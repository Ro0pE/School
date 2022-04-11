export class Block {
  color;
  position;
  model;
  block_is_falling;
  block_is_collapsed;
  block_can_be_rotated;
  start_position;
  current_position;

  constructor(color) {
    this.current_position = 1;
    this.color = color;
    this.position = '';
    this.model = "";
    this.block_can_be_rotated = true;
    this.block_is_collapsed = false;
    this.block_is_falling = true;
    this.start_position = 1
  }
  

  getStartPosition(){
    return this.start_position;
  }

  setPosition(pos) {
    this.current_position = pos;
    
  }
  getPosition(){
    return this.current_position;

  }
  setModel(model) {
    this.model = model
  }
  setMoving(bool){
    this.block_is_falling = bool;
  }
  getMoving(){
    return this.block_is_falling
  }
  setCollapsed(bool){
    this.block_is_collapsed = bool;
  }
  getCollapsed () {
    return this.block_is_collapsed;
  }
  setRotate(bool){
    console.log('block cant be rotated')
    this.block_can_be_rotated = bool
  }
  canRotate() {
    return this.block_can_be_rotated;
  }
}
