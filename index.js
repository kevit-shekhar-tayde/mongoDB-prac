const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "DB_Practice";

MongoClient.connect(connectionURL)
  .then((client) => {
    console.log("Connected to database.");
    const db = client.db(databaseName);
    const collection = db.collection("restaurants");

    // 1. display all documents in collection restaurants.
    // const allRestaurants = collection
    //   .find()
    //   .toArray()
    //   .then((rest) => console.log(rest));
    // console.log(allRestaurants);

    // 2. display some fields of all documents in collection restaurants.
    // collection
    //   .find(
    //     {},
    //     { projection: { restaurant_id: 1, name: 1, borough: 1, cuisine: 1 } }
    //   )
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 3. display some fields of all documents exclude _id.
    // collection
    //   .find(
    //     {},
    //     {
    //       projection: {
    //         restaurant_id: 1,
    //         name: 1,
    //         borough: 1,
    //         cuisine: 1,
    //         _id: 0,
    //       },
    //     }
    //   )
    //   .toArray()
    //   .then((rest) => console.log(rest));
    // 4. display some fields of all documents exclude _id.
    // collection
    //   .find(
    //     {},
    //     {
    //       projection: {
    //         restaurant_id: 1,
    //         name: 1,
    //         borough: 1,
    //         "address.zipcode": 1,
    //         _id: 0,
    //       },
    //     }
    //   )
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 5. display  all restaurants of borough bronx.
    // collection
    //   .find({ borough: "Bronx" })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 6. display  first 5 restaurants of borough bronx.
    // collection
    //   .find({ borough: "Bronx" })
    //   .limit(5)
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 7. display 5 but skip first 5 restaurants of borough bronx.
    // collection
    //   .find({ borough: "Bronx" })
    //   .skip(5)
    //   .limit(5)
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 8. display restaurants with score > 90.
    // collection
    //   .find({ "grades.score": { $gt: 90 } })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 9. display restaurants with score > 90.***********
    // collection
    //   .find({ "grades.score": { $gt: 80, $lt: 100 } })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 10. display restaurants with latitude < -95.754168.
    // collection
    //   .find({ "address.coord.0": { $lt: -95.754168 } })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 11. display restaurants that do not prepare any cuisine of 'American' and whose grade score is more than 70 and latitude less than -65.754168
    // collection
    //   .find({
    //     "address.coord.0": { $lt: -65.754168 },
    //     "grades.score": { $gt: 70 },
    //     cuisine: { $nin: ["American "] },
    //   })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 12. display restaurants with conditions and using $and operator
    // collection
    //   .find({
    //     $and: [
    //       { "address.coord.1": { $lt: 65.754168 } },
    //       { "grades.score": { $gt: 70 } },
    //       { cuisine: { $nin: ["American "] } },
    //     ],
    //   })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 13. display restaurants with name starts with Wil
    // collection
    //   .find({ name: { $regex: /Wil/i } })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 14. display restaurants with name ends with ces
    // collection
    //   .find({ name: { $regex: "ces$" } })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 16. display restaurants with name contains Reg
    // collection
    //   .find({ name: { $regex: /(.*Reg.*)/g } })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 17. display restaurants from Bronx and with american or chinese dishes
    // collection
    //   .find({
    //     borough: "Bronx",
    //     $or: [{ cuisine: "American " }, { cuisine: "Chinese" }],
    //   })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 18. display restaurants belong to the borough Staten Island or Queens or Bronxor Brooklyn
    // collection
    //   .find({
    //     $or: [
    //       { borough: "Staten Island" },
    //       { borough: "Queens" },
    //       { borough: "Bronx" },
    //       { borough: "Brooklyn" },
    //     ],
    //   })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 19. display restaurants not belong to the borough Staten Island or Queens or Bronxor Brooklyn
    // collection
    //   .find({
    //     borough: { $nin: ["Staten Island", "Queens", "Bronx", "Brooklyn"] },
    //   })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 20. display restaurants achieved score not more than 10
    // collection
    //   .find({ "grades.score": { $lt: 11 } })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 21. display restaurants achieved score not more than 10
    // collection
    //   .find({
    //     $or: [
    //       { cuisine: { $nin: ["American ", "Chinese"] } },
    //       { name: { regex: /Wil/i } },
    //     ],
    //   })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 22. display restaurants achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z"
    // const query = {
    //   grades: {
    //     $elemMatch: {
    //       grade: "A",
    //       score: 11,
    //       date: new Date("2014-08-11T00:00:00Z"),
    //     },
    //   },
    // };
    // collection
    //   .find(query)
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 23. ***** display restaurants with 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z"
    // const query = {
    //   "grades.1": {
    //     grade: "A",
    //     score: 9,
    //     date: new Date("2014-08-11T00:00:00Z"),
    //   },
    // };
    // collection
    //   .find(query)
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 24. display restaurants with 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z"
    // const query = {
    //   $and: [
    //     {
    //       "address.coord.1": { $gt: 42 },
    //     },
    //     {
    //       "address.coord.1": { $lt: 52 },
    //     },
    //   ],
    // };
    // collection
    //   .find(query)
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 25. ===xxx====
    // collection
    //   .find()
    //   .sort({ name: 1 })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 26. ===xxx====
    // collection
    //   .find()
    //   .sort({ name: -1 })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 27. ===xxx====
    // collection
    //   .find()
    //   .sort({ cuisine: 1, borough: -1 })
    //   .project({ restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0 })
    //   .toArray()
    //   .then((rest) => console.log(rest));

    // 28. ===xxx===
    // collection
    //   .countDocuments({
    //     "address.street": { $exists: false },
    //   })
    //   .then((result) => {
    //     if (result === 0) {
    //       return console.log(true);
    //     }
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));

    // 29. ===xxx===
    // collection
    //   .find({
    //     "address.coord": { $type: "double" },
    //   })
    //   .toArray()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));

    // 30. ===xxx===
    // const query = {
    //   "grades.score": { $mod: [7, 0] },
    // };

    // const projection = {
    //   restaurant_id: 1,
    //   name: 1,
    //   grades: 1,
    // };

    // collection
    //   .find(query, projection)
    //   .toArray()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));

    // 31. ===xxx===
    // const query = {
    //   name: /(.*mon.*)/g,
    // };

    // const projection = {
    //   borough: 1,
    //   name: 1,
    //   "address.coord.0": 1,
    //   "address.coord.1": 1,
    // };

    // collection
    //   .find(query)
    //   .project(projection)
    //   .toArray()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));

    // 32. ===xxx===
    // const query = {
    //   name: /^Mad/,
    // };

    // const projection = {
    //   cuisine: 1,
    //   name: 1,
    //   grades: 1,
    //   "address.coord.0": 1,
    //   "address.coord.1": 1,
    // };

    // collection
    //   .find(query, projection)
    //   .toArray()
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((err) => console.log(err));
  })
  .catch((err) => console.log("Unable to connect to database"));
