class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === "Sulfuras, Hand of Ragnaros") {
        this.items[i].quality = 80
        return this.items
      } else if (this.items[i].name === "Aged Brie") {
        if (this.items[i].sellIn <= 0){
          this.items[i].quality += +2
        }
        if (this.items[i].sellIn > 0){
          this.items[i].quality += +1
        }
        if (this.items[i].quality <= 50){
          this.items[i].sellIn += -1       
        }
        if (this.items[i].quality > 50){
          this.items[i].quality = 50  
          this.items[i].sellIn += -1  
        }   
  
        return this.items
        
        
      } else if (this.items[i].name === "Backstage passes to a TAFKAL80ETC concert") {
        if (this.items[i].sellIn < 0){ // after concert, drop price to zero
          this.items[i].quality = 0
        } else if (this.items[i].sellIn < 6){ // 5 days or under
          this.items[i].quality += +3
          this.items[i].sellIn += -1
        } else if (this.items[i].sellIn < 11){ // 10 days or unders
          this.items[i].quality += +2
          this.items[i].sellIn += -1
        } else { // over 10 days sellin
          this.items[i].quality += +1
          this.items[i].sellIn += -1
        }
        if (this.items[i].quality >= 50) { // if quality over 50, drop it back to 50
          this.items[i].quality = 50
         
        }
        return this.items
        

      } else { // some random item
        if (this.items[i].sellIn > 0){
          this.items[i].quality += -1
          if (this.items[i].name === "Conjured"){ // "Conjured" items drop quality x 2 speed
            this.items[i].quality += -1
          }
        } else {
          this.items[i].quality += -2
          if (this.items[i].name === "Conjured"){ // "Conjured" items drop quality x 2 speed
            this.items[i].quality += -2
          }
        }
        this.items[i].sellIn += -1
        if (this.items[i].quality < 0 ){
          this.items[i].quality = 0
        }
        return this.items
        

      }

    }
}
}

module.exports = {
  Item,
  Shop,
};
