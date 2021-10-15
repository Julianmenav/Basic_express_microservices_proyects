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
Link: [Timestamp microservice](https://boilerplate-project-headerparser.julianmenav.repl.co/)

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
