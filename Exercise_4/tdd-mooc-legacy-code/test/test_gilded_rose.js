var { expect } = require("chai");
var { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
  });
  it("New item sulfuras", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("Sulfuras, Hand of Ragnaros");
  });
  it("New item not sulfuras", function () {
    const gildedRose = new Shop([new Item("Reaper", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
  });
  it("Item aged brie", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(41);
  });
  it("Item Backstage passes to a TAFKAL80ETC concert", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(47);
  });
  it("Item Backstage passes to a TAFKAL80ETC concert, cheaper", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 45)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(48);
  });
  it("Item random shit", function () {
    const gildedRose = new Shop([new Item("Stuff", 0, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(49);
  });

  it("Backstage passes to a TAFKAL80ETC concert , sellin 0, with quality over 50", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 51)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("Backstage passes to a TAFKAL80ETC concert , sellin 4, with quality 35", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 4, 35)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(3);
  });
  it("aged brie , sellin 0, with quality < 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 48)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });
  it("Item count", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 48)]);
    const items = gildedRose.updateQuality()
    let item_count = items.length
    expect(item_count).to.equal(1);
  });
  it("Aged Brie sellin > 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 48)]);
    const items = gildedRose.updateQuality()
    expect(items[0].sellIn).to.equal(4);
  });
  it("Aged Brie sellin > 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 48)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(49);
  });
  it("Empty shop", function () {
    const shop = new Shop();
    const items = shop.updateQuality()
    expect(items).to.equal(undefined);
  });
  it("Item is Conjured sellin > 0", function () {
    const gildedRose = new Shop([new Item("Conjured", 5, 35)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(33);
  });
  it("Item is Conjured sellin <= 0", function () {
    const gildedRose = new Shop([new Item("Conjured", 0, 35)]);
    const items = gildedRose.updateQuality()
    expect(items[0].quality).to.equal(31);
  });
  it("Item is Sulfuras, Hand of Ragnaros", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });
  it("If item quality < 0", function () {
    const gildedRose = new Shop([new Item("Saunakauha", 1, -1)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].quality).to.equal(0);
  });
  it("If item quality === 0", function () {
    const gildedRose = new Shop([new Item("Saunakauha", 1, 0)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].quality).to.equal(0);
  });
  it("If item is Aged Brie and quality === 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 1, 50)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].quality).to.equal(50);
  });
  it("If Backstage passes to a TAFKAL80ETC concert and sellin === 11", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 50)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].sellIn).to.equal(10);
  });
  it("If Backstage passes to a TAFKAL80ETC concert and sellin === 11 and quality < 50", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 11, 40)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].quality).to.equal(41);
  });
  it("If Backstage passes to a TAFKAL80ETC concert and sellin < 11 and quality === 50", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].quality).to.equal(50);
  });
  it("If Backstage passes to a TAFKAL80ETC concert and sellin < 6 and quality === 50", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].quality).to.equal(50);
  });
  it("If Backstage passes to a TAFKAL80ETC concert and sellin == 6 and quality <50", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 6, 44)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].quality).to.equal(46);
  });
  it("If item is not Sulfuras, Hand of Ragnaros", function () {
    const gildedRose = new Shop([new Item("", 9, 50)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].sellIn).to.equal(8);
  });
  it("If item is  Sulfuras, Hand of Ragnaros", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -2, 50)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].sellIn).to.equal(-2);
  });
  it("If item is  Sulfuras, Hand of Ragnaros and selling > 5", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 6, 50)]);
    const items = gildedRose.updateQuality();
    console.log(items)
    expect(items[0].sellIn).to.equal(6);
  });
  it("If item is Lapio and sellin === 0", function () {
    const gildedRose = new Shop([new Item("Lapio", 0, 41)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].sellIn).to.equal(-1);
  });
  it("If item is Lapio and sellin < 0", function () {
    const gildedRose = new Shop([new Item("Lapio", -1, 1)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(0);
  });
  it("If item is Lapio and sellin > 0", function () {
    const gildedRose = new Shop([new Item("Lapio", 1, 41)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(40);
  });
  it("If item is  Sulfuras, Hand of Ragnaros", function () {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 41)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(80);
  });
  it("If item is Aged Brie", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 60)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(50);
  });
  it("If item is Aged Brie", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 40)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].sellIn).to.equal(4);
  });
  it("If item is Aged Brie", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 5, 40)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].sellIn).to.equal(4);
  });
  it("If item is Aged Brie and sellin > 2", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 51)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].sellIn).to.equal(1);
  });
  it("If item is Aged Brie and to be 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 49)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].sellIn).to.equal(1);
  });
  it("If item is Aged Brie and sellin 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 25)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(27);
  });
  it("If item is Aged Brie and quality to be over 50", function () {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 55)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(50);
  });
  it("If item is Aged Brie and sellin > 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 45)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(47);
  });
  it("If item is Aged Brie and sellin > 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(50);
  });
  it("If item is Aged Brie and sellin === 0", function () {
    const gildedRose = new Shop([new Item("Aged Brie", -1, 48)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(50);
  });
  it("If item is Backstage passes to a TAFKAL80ETC concert, sellin 8 ", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 8, 52)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].sellIn).to.equal(7);
  });
  it("If item is Backstage passes to a TAFKAL80ETC concert, sellin -1 ", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", -1, 50)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(0);
  });
  it("If item is Backstage passes to a TAFKAL80ETC concert, sellin 12 ", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 12, 49)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(50);
  });
  it("If item is Backstage passes to a TAFKAL80ETC concert, sellin 5. quality 49 ", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5 , 49)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(50);
  });
  it("If item is  Kaljapullo ", function () {
    const gildedRose = new Shop([new Item("Kaljapullo", 5 , 0)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(0);
  });
  it("If item is  Kaljapullo sellin >  0 ", function () {
    const gildedRose = new Shop([new Item("Kaljapullo", 1 , -5)]);
    const items = gildedRose.updateQuality();
    console.log('test' , items)
    expect(items[0].quality).to.equal(0);
  });



});
