import "./polyfills.mjs";
import express from "express";
import { Temporal } from "@js-temporal/polyfill";

// Refactor the following code to get rid of the legacy Date class.
// Use Temporal.PlainDate instead. See /test/date_conversion.spec.mjs for examples.

function createApp(database) {
  const app = express();

  app.put("/prices", (req, res) => {
    const liftPassCost = req.query.cost;
    const liftPassType = req.query.type;
    database.setBasePrice(liftPassType, liftPassCost);
    res.json();
  });

  app.get("/prices", (req, res) => {
    const age = req.query.age;
    const type = req.query.type;
    const baseCost = database.findBasePriceByType(type).cost;
    const new_date = parsePlainDate(req.query.date)
    const cost = calculateCost(age, type, new_date, baseCost);
    res.json({ cost });
  });

  function parsePlainDate(dateString) {
    if (dateString) {
      let new_date = Temporal.PlainDate.from(dateString)
      return new_date;
    }
  }



  function calculateCost(age, type, new_date, baseCost) {
    if (type === "night") {
      return calculateCostForNightTicket(age, baseCost);
    } else {
      return calculateCostForDayTicket(age, new_date, baseCost);
    }
  }

  function calculateCostForNightTicket(age, baseCost) {
    if (age === undefined) {
      return 0;
    }
    if (age < 6) {
      return 0;
    }
    if (age > 64) {
      return Math.ceil(baseCost * 0.4);
    }
    return baseCost;
  }

  function calculateCostForDayTicket(age, new_date, baseCost) {
    let reduction = 0;
    if (new_date) {
    reduction = calculateReduction(new_date);
    }
    if (age === undefined) {
      return Math.ceil(baseCost * (1 - reduction / 100));
    }
    if (age < 6) {
      return 0;
    }
    if (age < 15) {
      return Math.ceil(baseCost * 0.7);
    }
    if (age > 64) {
      return Math.ceil(baseCost * 0.75 * (1 - reduction / 100));
    }
    return Math.ceil(baseCost * (1 - reduction / 100));
  }

  function calculateReduction(new_date) {
    let reduction = 0;
   

    
    if (new_date && isMonday(new_date) && !isHoliday(new_date)) {
      reduction = 35;
    }

    


    return reduction;
  }

  function isMonday(new_date) {
    console.log('monday ' , new_date)


    return new_date.dayOfWeek === 1;
  }

  function isHoliday(new_date) {

    const holidays = database.getHolidays();
    for (let row of holidays) {
      let new_holiday_date = Temporal.PlainDate.from(row.holiday)


      if (
        new_date &&
        new_date.year === new_holiday_date.year &&
        new_date.month === new_holiday_date.month &&
        new_date.day === new_holiday_date.day
      ) {
        return true;
      }
    }
    return false;
  }

  return app;
}

export { createApp };
