---
title: "Embedding API Calls in JavaScript"
domain: ajax
topic: embedding-api-calls-in-javascript
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.589Z
estimatedTokens: 852
keywords: [Embedding, API, Calls, JavaScript, made, toolkit, procedure, Connecting, write, code, processing, sure, check, SOAP, Developer]
---

# Embedding API Calls in JavaScript

> After you have made the toolkit available using the procedure in Connecting to the API, you can write the
            JavaScript code that contains your API calls and processing. Be sure to check the
                    SOAP API Developer Guide for information about each call that you wish to use. T

# Embedding API Calls in JavaScript

After you have made the toolkit available using the procedure in [Connecting to the API](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_connecting.htm "The first portion of any JavaScript code that uses the AJAX Toolkit must make the toolkit available to the JavaScript code. The syntax for this is different depending on whether you are embedding JavaScript in a Visualforce page, or a button or link."), you can write the JavaScript code that contains your API calls and processing. Be sure to check the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "HTML (New Window)") for information about each call that you wish to use. The syntax for calls is different in the AJAX Toolkit; for details see [API Calls and the AJAX Toolkit](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_calls.htm "This toolkit supports all SOAP API calls, as well as runTests() from Apex.").

The following example shows a simple synchronized call that you can issue after connecting. This query returns the Name and Id for every User and writes them to the log.

```

```

We recommend that you wrap your JavaScript code so that the entire HTML page is rendered by the browser before the code executes, to avoid errors. For example:

```

```

When you specify setupPage() in the body onload, the browser initializes all HTML elements before it calls setupPage().

For example, the following code could be added to a Visualforce page to retrieve data:

```

```

The API interaction in the code above is accomplished in the first line of the setupPage function. A SOQL statement specifies what data to return. For more information about the source context variable, see [source Context Variable Context Variable](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_source_context_variable.htm "Pass in any context and get it back in the callback method by using the source context variable.").

After fetching the data in this example, you should handle error conditions, for example:

```

```

For more about error handling, see [Error Handling with the AJAX Toolkit](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_errors.htm "The AJAX Toolkit provides the ability to handle errors for synchronous and asynchronous calls.").

Use a callback function to handle the results of this asynchronous call. A callback function is a function that is passed by reference to the AJAX Toolkit. The AJAX Toolkit calls the callback function under defined conditions, for example, upon completion. For more information about callback function syntax, see [API Calls and the AJAX Toolkit](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_calls.htm "This toolkit supports all SOAP API calls, as well as runTests() from Apex.").

For example, the following code verifies that at least one result was returned, and iterates through the result set if it exists:

```

```

A suggested best practice is to use JavaScript onFailure as the callback function for failure conditions and JavaScript onSuccess for processing results that are successfully returned.

For more information about embedding API calls in JavaScript with the AJAX Toolkit, especially the differences in syntax and availability of asynchronous calls, see [API Calls and the AJAX Toolkit](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_calls.htm "This toolkit supports all SOAP API calls, as well as runTests() from Apex.").

## Code Examples

```
result = sforce.connection.query("Select Name, Id from User");
  records = result.getArray("records");
 
  for (var i=0; i< records.length; i++) {
    var record = records[i];
    log(record.Name + " -- " + record.Id);
  }
```

```
<body onload="setupPage();">
     <div id="output"></div>
</body>
```

```
<script type="text/javascript">
    function setupPage() {
           sforce.connection.query("Select Id, Name, Industry From Account order by Industry",
           {onSuccess : layoutResults,
            onFailure : queryFailed,
            source : {
                      output : document.getElementById("output"),
                      startTime : new Date().getTime()
                     }
           });
       }
</script>
```

```
function queryFailed(error, source) {
       source.output.innerHTML = "<font color "red">
                An error has occurred: </font> <p>" + error;
       }
```

```
/**
* This method will be called when the toolkit receives a successful
* response from the server.
* @queryResult - result that server returned
* @source - state passed into the query method call.
*/

function layoutResults(queryResult, source) {

     if (queryResult.size > 0) {
     var output = "";

     //get the records array
     var records = queryResult.getArray('records');

     //loop through the records and construct html string
     for (var i = 0; i < records.length; i++) {
          var account = records[i];
          output += account.Id + " " + account.Name +
          " [Industry - " + account.Industry + "]<br>";
     }

     //render the generated html string
     source.output.innerHTML = output;
     }
}
```

## Related Topics

- Connecting to the API (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_connecting.htm)
- API Calls and the AJAX Toolkit (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_calls.htm)
- source Context Variable Context Variable (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_source_context_variable.htm)
- Error Handling with the AJAX Toolkit (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_errors.htm)
