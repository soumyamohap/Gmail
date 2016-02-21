$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging into sales force applicatio",
  "description": "",
  "id": "logging-into-sales-force-applicatio",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "",
  "description": "",
  "id": "logging-into-sales-force-applicatio;",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "I am in sales force login page in \"Chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I enter the \"username\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "I enter the \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I select \"login\" button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 35
    }
  ],
  "location": "loginTest.I_am_in_sales(String)"
});
formatter.result({
  "duration": 15458718830,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 13
    }
  ],
  "location": "loginTest.I_enter(String)"
});
formatter.result({
  "duration": 1992301330,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 13
    }
  ],
  "location": "loginTest.I_enter(String)"
});
formatter.result({
  "duration": 1825120157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 10
    }
  ],
  "location": "loginTest.I_select(String)"
});
formatter.result({
  "duration": 4345133548,
  "status": "passed"
});
});