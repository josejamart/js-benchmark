# Benchmark framework

## Purpose

This application makes the orchestration of all test. It reads the test definition file ([data/test.json](../data/tests.json)) and calls each test sequentially. It is made to don't overload the browser and avoid incorrect results. Once a test is executed, it will be closed automatically and this will cause launching the next execution.

Once the application is started it generates a random id, this id will be shared between al test to manage the results. All test are executed in a separated tab. They receive the id from the url and save the result to local storage using  the random id plus the test id. The main application listen to changes from local storage and publish the results.

## Parametrized execution

It's possible to execute a test individually or a set of test by using the parameter "ids". It also possible to keep opened the test instead of closing it automatically by using the parameter "close".

The parameter "ids" is a list of identifiers separated by commas.

The parameter "close" is a boolean value.

Sample of execution of the test c1-t1a without closing it after the test. 

````
http://localhost:3000/index.html#close=false/ids=c1-t1a
````

## Test results

Of each test three data are gathered, *total time* (time from the start of the test to the last DOM mutation), *render time* (time from the start of the rendering to the last DOM mutation) and *number of mutations* (number of times the DOM is modified).

Besides this data each result also shows a natural identifier and a test description.

## Test definitions

The test are grouped in categories. A category contains an id, a title and a list of tests.

Category sample:
```json
{
  "id":"c1",
  "title": "Backbone",
  "tests": []
}
```
A test contains an id, a natural id, a description, a level, a sublevel, an url and a flag to enable o disable the test.

Test sample:
```json
{
  "id":"t1a",
  "naturalId": "T1-bigPainting",
  "description":"Rendering 42.000 elements with a single text. This test use Backbone views.",
  "level":"1",
  "sublevel":"a",
  "url":"/backbone/T1-bigPainting/index.html",
  "enabled":true
}
```
