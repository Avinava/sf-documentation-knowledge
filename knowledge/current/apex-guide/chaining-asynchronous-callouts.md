---
title: "Chaining Asynchronous Callouts"
domain: apex-guide
topic: chaining-asynchronous-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:33.053Z
estimatedTokens: 439
keywords: [Chaining, Asynchronous, Callouts, order, callouts, matters, callout, conditional, response, another, chain, requests., means, next, made, only, after, previous, returns., example]
---

# Chaining Asynchronous Callouts

> If the order of the callouts matters, or when a callout is conditional on the response
      of another callout, you can chain callout requests. Chaining callouts means that the next
      callout is made only after the response of the previous callout returns. For example, you
      might need to chain a callout to get warranty extension information after the warranty service
      response indicates that the warranty expired. You can chain up to three callouts.

# Chaining Asynchronous Callouts

If the order of the callouts matters, or when a callout is conditional on the response of another callout, you can chain callout requests. Chaining callouts means that the next callout is made only after the response of the previous callout returns. For example, you might need to chain a callout to get warranty extension information after the warranty service response indicates that the warranty expired. You can chain up to three callouts.

The following Visualforce and Apex examples show how to chain one callout to another. The Visualforce page is shown first. The Visualforce page contains a button that invokes the action method invokeInitialRequest in the controller. The Visualforce process is suspended each time a continuation is returned. The Visualforce process resumes after each response is returned and renders each response in the outputPanel component.

```

```

This example show the controller class for the Visualforce page. The invokeInitialRequest method creates the first continuation. The callback method (processInitialResponse) processes the response of the first callout. If this response meets a certain condition, the method chains another callout by returning a second continuation. After the response of the chained continuation is returned, the second callback method (processChainedResponse) is invoked and processes the second response.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

The response of a continuation must be retrieved before you create a new continuation and before the Visualforce request is suspended again. You can’t retrieve an old response from an earlier continuation in the chain of continuations.

## Code Examples

```
<apex:page controller="ChainedContinuationController" showChat="false" showHeader="false">
   <apex:form >
      <!-- Invokes the action method when the user clicks this button. -->
      <apex:commandButton action="{!invokeInitialRequest}" value="Start Request" reRender="panel"/>  
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
public with sharing class ChainedContinuationController {

    // Unique label for the initial callout request
    public String requestLabel1;
    // Unique label for the chained callout request
    public String requestLabel2;
    // Result of initial callout
    public String result1 {get;set;}
    // Result of chained callout
    public String result2 {get;set;}
    // Endpoint of long-running service
    private static final String LONG_RUNNING_SERVICE_URL1 = 
        '<Insert your first service URL>';
    private static final String LONG_RUNNING_SERVICE_URL2 = 
        '<Insert your second service URL>';
           
    // Action method
    public Object invokeInitialRequest() {
      // Create continuation with a timeout
      Continuation con = new Continuation(60);
      // Set callback method
      con.continuationMethod='processInitialResponse';
      
      // Create first callout request
      HttpRequest req = new HttpRequest();
      req.setMethod('GET');
      req.setEndpoint(LONG_RUNNING_SERVICE_URL1);
      
      // Add initial callout request to continuation
      this.requestLabel1 = con.addHttpRequest(req);              
      
      // Return the continuation
      return con;  
    }
    
    // Callback method for initial request
    public Object processInitialResponse() {   
      // Get the response by using the unique label
      HttpResponse response = Continuation.getResponse(this.requestLabel1);
      // Set the result variable that is displayed on the Visualforce page
      this.result1 = response.getBody();
           
      Continuation chainedContinuation = null;
      // Chain continuation if some condition is met
      if (response.getBody().toLowerCase().contains('expired')) {
          // Create a second continuation 
          chainedContinuation = new Continuation(60);
          // Set callback method
          chainedContinuation.continuationMethod='processChainedResponse';
          
          // Create callout request
          HttpRequest req = new HttpRequest();
          req.setMethod('GET');
          req.setEndpoint(LONG_RUNNING_SERVICE_URL2);
          
          // Add callout request to continuation
          this.requestLabel2 = chainedContinuation.addHttpRequest(req); 
      }
      
      // Start another continuation 
      return chainedContinuation;  
    }    
    
    // Callback method for chained request
    public Object processChainedResponse() {   
      // Get the response for the chained request
      HttpResponse response = Continuation.getResponse(this.requestLabel2);
      // Set the result variable that is displayed on the Visualforce page
      this.result2 = response.getBody();
           
      // Return null to re-render the original Visualforce page
      return null;
    }
}
```
