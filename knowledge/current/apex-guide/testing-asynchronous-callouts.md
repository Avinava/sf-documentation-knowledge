---
title: "Testing Asynchronous Callouts"
domain: apex-guide
topic: testing-asynchronous-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:33.108Z
estimatedTokens: 456
keywords: [Testing, Asynchronous, Callouts, Write, tests, test, controller, meet, code, coverage, requirements, deploying, packaging, Apex, Because]
---

# Testing Asynchronous Callouts

> Write tests to test your controller and meet code coverage requirements for deploying
        or packaging Apex. Because Apex tests don’t support making callouts, you can simulate
        callout requests and responses. When you’re simulating a callout, the request doesn’t get
        sent to the external service, and a mock response is used.

# Testing Asynchronous Callouts

Write tests to test your controller and meet code coverage requirements for deploying or packaging Apex. Because Apex tests don’t support making callouts, you can simulate callout requests and responses. When you’re simulating a callout, the request doesn’t get sent to the external service, and a mock response is used.

The following example shows how to invoke a mock asynchronous callout in a test for a Web service call that uses HTTPRequest. To simulate callouts in continuations, call these methods of the Test class: [Test.setContinuationResponse()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_setContinuationResponse) and [Test.invokeContinuationMethod()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_invokeContinuationMethod).

The controller class to test is listed first, followed by the test class. The controller class from [Make Long-Running Callouts with Continuations](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm "Use asynchronous callouts to make long-running requests from a Visualforce page or a Lightning component to an external Web service and process responses in callback methods.") is reused here.

```

```

This example shows the test class corresponding to the controller. This test class contains a test method for testing an asynchronous callout. In the test method, Test.setContinuationResponse sets a mock response, and Test.invokeContinuationMethod causes the callback method for the continuation to be executed. The test ensures that the callback method processed the mock response by verifying that the controller’s result variable is set to the expected response.

```

```

## Code Examples

```apex
public with sharing class ContinuationController {
    // Unique label corresponding to the continuation request
    public String requestLabel;
    // Result of callout
    public String result {get;set;}
    // Endpoint of long-running service
    private static final String LONG_RUNNING_SERVICE_URL = 
        '<Insert your service URL>';
   
   // Action method
    public Object startRequest() {
      // Create continuation with a timeout
      Continuation con = new Continuation(40);
      // Set callback method
      con.continuationMethod='processResponse';
      
      // Create callout request
      HttpRequest req = new HttpRequest();
      req.setMethod('GET');
      req.setEndpoint(LONG_RUNNING_SERVICE_URL);
      
      // Add callout request to continuation
      this.requestLabel = con.addHttpRequest(req);
      
      // Return the continuation
      return con;  
    }
    
    // Callback method 
    public Object processResponse() {   
      // Get the response by using the unique label
      HttpResponse response = Continuation.getResponse(this.requestLabel);
      // Set the result variable that is displayed on the Visualforce page
      this.result = response.getBody();
      
      // Return null to re-render the original Visualforce page
      return null;
    }
}
```

```apex
@isTest
public class ContinuationTestingForHttpRequest {
    public static testmethod void testWebService() {
        ContinuationController controller = new ContinuationController();
        // Invoke the continuation by calling the action method
        Continuation conti = (Continuation)controller.startRequest();
        
        // Verify that the continuation has the proper requests
        Map<String, HttpRequest> requests = conti.getRequests();
        system.assert(requests.size() == 1);
        system.assert(requests.get(controller.requestLabel) != null);
        
        // Perform mock callout 
        // (i.e. skip the callout and call the callback method)
        HttpResponse response = new HttpResponse();
        response.setBody('Mock response body');   
        // Set the fake response for the continuation     
        Test.setContinuationResponse(controller.requestLabel, response);
        // Invoke callback method
        Object result = Test.invokeContinuationMethod(controller, conti);
        // result is the return value of the callback
        System.assertEquals(null, result);
        // Verify that the controller's result variable
        //   is set to the mock response.
        System.assertEquals('Mock response body', controller.result);
    }
}
```

## Related Topics

- Make Long-Running Callouts with Continuations (atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm)
