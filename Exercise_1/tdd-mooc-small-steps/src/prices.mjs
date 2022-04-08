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
    const date = parseDate(req.query.date);
   // const plain_date  = date.toTemporalInstant()
   // console.log('date ' , date)
  //  console.log('plain_date ' , plain_date)
    const cost = calculateCost(age, type, date, baseCost);
    res.json({ cost });
  });

  function parseDate(dateString) {
    if (dateString) {
      return new Date(dateString);
    }
  }

  function calculateCost(age, type, date, baseCost) {
    if (type === "night") {
      return calculateCostForNightTicket(age, baseCost);
    } else {
      return calculateCostForDayTicket(age, date, baseCost);
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

  function calculateCostForDayTicket(age, date, baseCost) {
    let reduction = calculateReduction(date);
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

  function calculateReduction(date) {

    
    
    let reduction = 0;
    if (date && isMonday(date) && !isHoliday(date)) {
      reduction = 35;
    }
    return reduction;
  }

  function isMonday(date) {
    const plain_date  = date.toTemporalInstant().toZonedDateTimeISO("UTC")
    const plain_date2 = plain_date.toPlainDate()
    let new_date = Temporal.PlainDate.from(plain_date2)

    return new_date.dayOfWeek === 1;
  }

  function isHoliday(date) {
    const plain_date  = date.toTemporalInstant().toZonedDateTimeISO("UTC")
    const plain_date2 = plain_date.toPlainDate()
    let new_date = Temporal.PlainDate.from(plain_date2)

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
