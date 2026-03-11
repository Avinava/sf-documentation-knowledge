---
title: "Testing Asynchronous Callouts"
domain: apex-guide
topic: testing-asynchronous-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.911Z
keywords: [Testing, Asynchronous, Callouts]
---

# Testing Asynchronous Callouts

# Testing Asynchronous Callouts

Write tests to test your controller and meet code coverage requirements for deploying or packaging Apex. Because Apex tests don’t support making callouts, you can simulate callout requests and responses. When you’re simulating a callout, the request doesn’t get sent to the external service, and a mock response is used.

The following example shows how to invoke a mock asynchronous callout in a test for a Web service call that uses HTTPRequest. To simulate callouts in continuations, call these methods of the Test class: [Test.setContinuationResponse()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_setContinuationResponse) and [Test.invokeContinuationMethod()](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm#apex_System_Test_invokeContinuationMethod).

The controller class to test is listed first, followed by the test class. The controller class from [Make Long-Running Callouts with Continuations](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm "Use asynchronous callouts to make long-running requests from a Visualforce page or a Lightning component to an external Web service and process responses in callback methods.") is reused here.

```

```

This example shows the test class corresponding to the controller. This test class contains a test method for testing an asynchronous callout. In the test method, Test.setContinuationResponse sets a mock response, and Test.invokeContinuationMethod causes the callback method for the continuation to be executed. The test ensures that the callback method processed the mock response by verifying that the controller’s result variable is set to the expected response.

```

```