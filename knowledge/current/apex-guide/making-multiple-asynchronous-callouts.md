---
title: "Making Multiple Asynchronous Callouts"
domain: apex-guide
topic: making-multiple-asynchronous-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.090Z
estimatedTokens: 325
keywords: [Making, Multiple, Asynchronous, Callouts, long-running, service, simultaneously, Visualforce, add, three, requests, Continuation, instance, simultaneous, you’re]
---

# Making Multiple Asynchronous Callouts

> To make multiple callouts to a long-running service simultaneously from a Visualforce
      page, you can add up to three requests to the Continuation instance. An example of when to
      make simultaneous callouts is when you’re making independent requests to a service, such as
      getting inventory statistics for two products.

# Making Multiple Asynchronous Callouts

To make multiple callouts to a long-running service simultaneously from a Visualforce page, you can add up to three requests to the Continuation instance. An example of when to make simultaneous callouts is when you’re making independent requests to a service, such as getting inventory statistics for two products.

When you’re making multiple callouts in the same continuation, the callout requests run in parallel and suspend the Visualforce request. Only after all callout responses are returned does the Visualforce process resume.

The following Visualforce and Apex examples show how to make two asynchronous callouts simultaneously by using a single continuation. The Visualforce page is shown first. The Visualforce page contains a button that invokes the action method startRequestsInParallel in the controller. When the Visualforce process resumes, the outputPanel component is rendered again. This panel displays the responses of the two asynchronous callouts.

```

```

This example shows the controller class for the Visualforce page. The startRequestsInParallel method adds two requests to the Continuation. After all callout responses are returned, the callback method (processAllResponses) is invoked and processes the responses.

```

```

## Code Examples

```
<apex:page controller="MultipleCalloutController" showChat="false" showHeader="false">
   <apex:form >
      <!-- Invokes the action method when the user clicks this button. -->
      <apex:commandButton action="{!startRequestsInParallel}" value="Start Request" reRender="panel"/>  
   </apex:form>

   <apex:outputPanel id="panel">
       <!-- Displays the response body of the initial callout. -->   
       <apex:outputText value="{!result1}" />
       
       <br/>
       <!-- Displays the response body of the chained callout. -->
       <apex:outputText value="{!result2}" />
   </apex:outputPanel> 
   
</apex:page>
```

```apex
public with sharing class MultipleCalloutController {

    // Unique label for the first request
    public String requestLabel1;
    // Unique label for the second request
    public String requestLabel2;
    // Result of first callout
    public String result1 {get;set;}
   // Result of second callout
    public String result2 {get;set;}
    // Endpoints of long-running service
    private static final String LONG_RUNNING_SERVICE_URL1 = 
        '<Insert your first service URL>';
    private static final String LONG_RUNNING_SERVICE_URL2 = 
        '<Insert your second service URL>';
           
    // Action method
    public Object startRequestsInParallel() {
      // Create continuation with a timeout
      Continuation con = new Continuation(60);
      // Set callback method
      con.continuationMethod='processAllResponses';
      
      // Create first callout request
      HttpRequest req1 = new HttpRequest();
      req1.setMethod('GET');
      req1.setEndpoint(LONG_RUNNING_SERVICE_URL1);
      
      // Add first callout request to continuation
      this.requestLabel1 = con.addHttpRequest(req1);     
      
      // Create second callout request
      HttpRequest req2 = new HttpRequest();
      req2.setMethod('GET');
      req2.setEndpoint(LONG_RUNNING_SERVICE_URL2);
      
      // Add second callout request to continuation
      this.requestLabel2 = con.addHttpRequest(req2);     
      
      // Return the continuation
      return con;  
    }
    
    // Callback method.
    // Invoked only when responses of all callouts are returned.
    public Object processAllResponses() {   
      // Get the response of the first request
      HttpResponse response1 = Continuation.getResponse(this.requestLabel1);
      this.result1 = response1.getBody();

      // Get the response of the second request
      HttpResponse response2 = Continuation.getResponse(this.requestLabel2);
      this.result2 = response2.getBody();
                 
      // Return null to re-render the original Visualforce page
      return null;
    }
}
```
