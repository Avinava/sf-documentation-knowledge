---
title: "Sample Visualforce Page Using the AJAX Toolkit Using the
      AJAX Toolkit"
domain: ajax
topic: sample-visualforce-page-using-the-ajax-toolkit-using-the-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:56.666Z
estimatedTokens: 291
keywords: [Sample, Visualforce, AJAX, Toolkit, demonstrates]
---

# Sample Visualforce Page Using the AJAX Toolkit Using the
      AJAX Toolkit

> This example demonstrates using the AJAX Toolkit in a Visualforce page.

# Sample Visualforce Page Using the AJAX Toolkit Using the AJAX Toolkit

This example demonstrates using the AJAX Toolkit in a Visualforce page.

To add JavaScript to a Visualforce page, use this procedure:

1.  Create the Visualforce page. For more information, see the [Visualforce Developer's Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.pages.meta/pages/ "HTML (New Window)").
2.  Cut and paste the following sample code into your Visualforce page.

    The JavaScript code queries your organization and returns every account ID, account name, and industry type, if any:

    ```

    ```


After you created and navigated to the Visualforce page, you see text similar to this image:

![output of scontrol, list of Ids, names, and value for industry](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fajax%2Fimages%2Fscontrol_output.gif&folder=ajax)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

You can also use an Apex controller to create the Visualforce page. However, this sample is about basic functionality with the AJAX Toolkit that contains API calls and processes Salesforce data.

## Code Examples

```
<apex:page >
    <script type="text/javascript">
    var __sfdcSessionId = '{!GETSESSIONID()}';
    </script>
    <script src="../../soap/ajax/66.0/connection.js"
          type="text/javascript"></script>
    <script type="text/javascript">     window.onload = setupPage;
    function setupPage() {
      //function contains all code to execute after page is rendered

      var state = { //state that you need when the callback is called
          output : document.getElementById("output"),
          startTime : new Date().getTime()};

      var callback = {
          //call layoutResult if the request is successful
          onSuccess: layoutResults,

          //call queryFailed if the api request fails
          onFailure: queryFailed,
          source: state};

      sforce.connection.query(
          "Select Id, Name, Industry From Account order by Industry",
           callback);
  }

  function queryFailed(error, source) {
    source.output.innerHTML = "An error has occurred: " + error;
  }

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
  </script>

    <div id="output"> </div>
   
</apex:page>
```
