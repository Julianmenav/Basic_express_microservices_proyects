# Basic_express_microservices_proyects
Little applications using Node.js and Express.js part of the FCC Back End Certification.

## Timestamp Microservice

It takes a date string and gives you back a JSON with Unix value and utc format for the given date.
Example usage:
```
https://boilerplate-project-timestamp.julianmenav.repl.co/api/2015-12-25
https://boilerplate-project-timestamp.julianmenav.repl.co/api/1450137600
```
Example output:
```
{ "unix": 1450137600, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }
```
Link: [Timestamp microservice](https://boilerplate-project-timestamp.julianmenav.repl.co/)

## Header Parser

It returns the language and the operating system by looking it up through the request.
Example output:
```
{"ipaddress":"::ffff:159.20.14.100","language":"en-US,en;q=0.5",
"software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"}
```
Link: [Header Parser](https://boilerplate-project-headerparser.julianmenav.repl.co/)

## URL Shortener

Enter any URL in the form to have a shorter version of it and be able to access the web through it.
Example output:
```
{"original_url":"https://github.com","short_url":[number]}
```
To access the web:
```
https://boilerplate-project-urlshortener.julianmenav.repl.co/api/shorturl/[number]
```
Link: [URL Shortener](https://boilerplate-project-urlshortener.julianmenav.repl.co/)

## Exercise Tracker

Through the form, it allows to create a user and store it in a database using mongodb.
Example output:
```
{"username":"sampleUser","_id":"6169d1fef4fc27e3a922a397"}
```
Through the form on the right, and with the id of the previous output we can assign an exercise to the user, with some properties. If no date is specified, the current date will be taken into account. There is no limit to the number of exercises for a user.

We can see a record of the exercises of a user by entering his id in the following url:
```
https://boilerplate-project-exercisetracker.julianmenav.repl.co/api/users/:_id/logs?[from][&to][&limit]
```
We can also see only a selection of these, with the optional parameters: from, to and limit. With the first 2 parameters we select a range of dates,and with limit parameter we select the maximum number of exercises in the log.
The format for the dates will be: yyyy-mm-dd

The output could be something like (Count is the number of exercises for that user):
```
{
  "username": "sampleUser",
  "count": 3,
  "_id": "6169d1fef4fc27e3a922a397",
  "log": [
    {
      "description": "Task 1",
      "duration": 15,
      "date": "Sun Nov 10 1996",
      "_id": "6169d8ff15f9897d7b7dbf20"
    },
    {
      "description": "Exercise 2",
      "duration": 420,
      "date": "Sat Feb 01 2014",
      "_id": "6169d93a15f9897d7b7dbf24"
    },
    {
      "description": "Exercise 4",
      "duration": 60,
      "date": "Fri Oct 15 2021",
      "_id": "6169d94e15f9897d7b7dbf29"
    }
  ]
}
```
Link: [Exercise Tracker](https://boilerplate-project-exercisetracker.julianmenav.repl.co/)

## File Metadata

Upload any file through the form and the output will give you metadata info about it.
```
{"name":"sample.txt","type":"text/plain","size":1420}
```
Link: [Exercise Tracker](https://boilerplate-project-filemetadata.julianmenav.repl.co/)








