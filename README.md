# MongoDB-Practice

Considered the above-attached JSON file as the dump of the collection and import into your local MongoDB. Write MongoDB queries for the below-given requirements:

1. Write a MongoDB query to display all the documents in the collection restaurants.
2. Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine for all the documents in the collection restaurant
3. Write a MongoDB query to display the fields restaurant_id, name, borough, and cuisine, but exclude the field _id for all the documents in the collection restaurant. Write a MongoDB query to display the fields restaurant_id, name, borough, and zip code, but exclude the field _id for all the documents in the collection restaurant.
4. Write a MongoDB query to display all the restaurants which are in the borough Bronx.
5. Write a MongoDB query to display the first 5 restaurants which are in the borough Bronx.
6. Write a MongoDB query to display the next 5 restaurants after skipping first 5 which are in the borough Bronx.
7. Write a MongoDB query to find the restaurants that achieved a score of more than 90.
8. Write a MongoDB query to find the restaurants that achieved a score, of more than 80 but less than 100.
9. Write a MongoDB query to find the restaurants which locate in a latitude value less than -95.754168.
10. Write a MongoDB query to find the restaurants that do not prepare any cuisine of 'American' and whose grade score is more than 70 and latitude less than -65.754168.
11. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American' and achieved a score of more than 70 and located in the longitude less than -65.754168. Note: Do this query without using $and operator.
12. Write a MongoDB query to find the restaurants which do not prepare any cuisine of 'American ' and achieved a grade point 'A' not belonging to the borough Brooklyn. The document must be displayed according to the cuisine in descending order.
13. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Wil' as the first three letters of their name.
14. Write a MongoDB query to find the restaurant Id, name, borough and cuisine for those restaurants which contain 'ces' as the last three letters of their name.
15. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which contain 'Reg' as three letters somewhere in their name.
16. Write a MongoDB query to find the restaurants which belong to the borough Bronx and prepared either American or Chinese dishes.
17. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which belong to the borough Staten Island or Queens or Bronxor Brooklyn.
18. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which do not belong to the borough Staten Island or Queens, or Bronxor Brooklyn.
19. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which achieved a score that is not more than 10.
20. Write a MongoDB query to find the restaurant Id, name, borough, and cuisine for those restaurants which prepared dishes except 'American' and 'Chinees' or the restaurant's name begins with the letter 'Wil'. 
21. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants which achieved a grade of "A" and scored 11 on an ISODate "2014-08-11T00:00:00Z" among many survey dates.
22. Write a MongoDB query to find the restaurant Id, name, and grades for those restaurants where the 2nd element of the grades array contains a grade of "A" and score 9 on an ISODate "2014-08-11T00:00:00Z".
23. Write a MongoDB query to find the restaurant Id, name, address, and geographical location for those restaurants where the 2nd element of the coord array contains a value that is more than 42 and up to 52.
24. Write a MongoDB query to arrange the name of the restaurants in ascending order along with all the columns.
25. Write a MongoDB query to arrange the name of the restaurants in descending along with all the columns
26. Write a MongoDB query to arrange the name of the cuisine in ascending order and for that same cuisine borough should be in descending order.
27. Write a MongoDB query to know whether all the addresses contains the street or not.
28. Write a MongoDB query which will select all documents in the restaurants collection where the coord field value is Double.
29. Write a MongoDB query which will select the restaurant Id, name and grades for those restaurants which returns 0 as a remainder after dividing the score by 7.
30. Write a MongoDB query to find the restaurant name, borough, longitude and attitude and cuisine for those restaurants 31. which contains 'mon' as three letters somewhere in its name.
31. Write a MongoDB query to find the restaurant name, borough, longitude and latitude and cuisine for those restaurants which contain 'Mad' as first three letters of its name. 
