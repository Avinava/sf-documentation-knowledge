---
title: "Error Handling with the AJAX Toolkit"
domain: ajax
topic: error-handling-with-the-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.596Z
estimatedTokens: 149
keywords: [Error, Handling, AJAX, Toolkit, ability, handle, errors, synchronous, asynchronous, calls]
---

# Error Handling with the AJAX Toolkit

> The AJAX Toolkit provides the ability to handle errors for synchronous and
        asynchronous calls.

# Error Handling with the AJAX Toolkit

The AJAX Toolkit provides the ability to handle errors for synchronous and asynchronous calls.

## Error Handling for Synchronous Calls

If the API call fails, then the AJAX Toolkit throws an exception. The exception contains all the available error information. For example:

```

```

## Error Handling for Asynchronous Calls

For asynchronous calls, the onFailure property of the asynchronous object is called. For example:

```

```

If the onFailure property was not defined, the AJAX Toolkit pops up a new read-only browser window showing the error.

## Code Examples

```
<html>
<head>
    <script src="/soap/ajax/66.0/connection.js" type="text/javascript"></script>
 
    <script>
 
        function setupPage() {
            var output = document.getElementById("output");
            var startTime = new Date().getTime()

             try {
                var queryResult = sforce.connection.query("Select Id, Name, Industry From  
                     Account order by Industry limit 30");
                layoutResults(queryResult, output, startTime);
            } catch(error) {
                queryFailed(error, output);
            }
        }
 
        function queryFailed(error, out) {
            out.innerHTML = "<font color=red>An error has occurred:</font> <p>" + error;
        }
 
        function layoutResults(queryResult, out, startTime) {
            var timeTaken = new Date().getTime() - startTime;
 
            if (queryResult.size > 0) {
                var output = "";
                var records = queryResult.getArray('records');
 
                for (var i = 0; i < records.length; i++) {
                    var account = records[i];
                    output += account.Id + " " + account.Name + " [Industry - "  
                         + account.Industry + "]<BR>";
                }
 
                out.innerHTML = output + "<BR> query complexted in: " + timeTaken + " ms.";
            } else {
                out.innerHTML = "No records matched.";
            }
        }
 
    </script>
</head>

 <body onload="setupPage()">
<div id="output"></div>
</body>
</html>
```

```
connection.query("Select Name From Account", 
   {onSuccess: displayResult,
       onFailure: queryFailed});

function displayResult(result){}
function queryFailed(error){}
```
