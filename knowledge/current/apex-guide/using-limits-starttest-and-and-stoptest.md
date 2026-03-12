---
title: "Using Limits,  startTest , and , and stopTest"
domain: apex-guide
topic: using-limits-starttest-and-and-stoptest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.093Z
estimatedTokens: 699
keywords: [Limits, startTest, stopTest, specific, limit, particular, governor, such, number, calls, amount, heap, size, remaining.]
---

# Using Limits,  startTest , and , and stopTest

> The Limits methods return the specific limit for the particular governor, such as the number
      of calls of a method or the amount of heap size remaining.

# Using Limits, startTest , and , and stopTest

The Limits methods return the specific limit for the particular governor, such as the number of calls of a method or the amount of heap size remaining.

Each method has two versions. The first version returns the amount of the resource that has been used in the current context. The second version contains the word “limit” and returns the total amount of the resource that is available for that context. For example, getCallouts returns the number of callouts to an external service that have already been processed in the current context, while getLimitCallouts returns the total number of callouts available in the given context.

In addition to the Limits methods, use the startTest and stopTest methods to validate how close the code is to reaching governor limits.

The startTest method marks the point in your test code when your test actually begins. Each test method is allowed to call this method only once. All of the code before this method should be used to initialize variables, populate data structures, and so on, allowing you to set up everything you need to run your test. Any code that executes after the call to startTest and before stopTest is assigned a new set of governor limits.

The startTest method does not refresh the context of the test: it adds a context to your test. For example, if your class makes 98 SOQL queries before it calls startTest, and the first significant statement after startTest is a DML statement, the program can now make an additional 100 queries. Once stopTest is called, however, the program goes back into the original context, and can only make 2 additional SOQL queries before reaching the limit of 100.

The stopTest method marks the point in your test code when your test ends. Use this method in conjunction with the startTest method. Each test method is allowed to call this method only once. Any code that executes after the stopTest method is assigned the original limits that were in effect before startTest was called. All asynchronous calls made after the startTest method are collected by the system. When stopTest is executed, all asynchronous processes are run synchronously. An exception encountered during stopTest halts the synchronous processing. For example, an unhandled exception in a batch job’s execute method will prevent the finish method from running in a test context.

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_runas.htm "Using the runAs Method Method")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_testing_SOSL.htm "Adding SOSL Queries to Unit Tests")

#### See Also

-   [Test Apex Triggers](https://trailhead.salesforce.com/content/learn/modules/apex_testing/apex_testing_triggers "Test Apex Triggers - HTML (New Window)")

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_testing_tools_runas.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_testing_SOSL.htm)
