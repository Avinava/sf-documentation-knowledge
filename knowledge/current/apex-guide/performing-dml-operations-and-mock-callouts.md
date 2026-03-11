---
title: "Performing DML Operations and Mock Callouts"
domain: apex-guide
topic: performing-dml-operations-and-mock-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.643Z
keywords: [Performing, DML, Operations, Mock, Callouts, Before, Asynchronous, Apex, See]
---

# Performing DML Operations and Mock Callouts

# Performing DML Operations and Mock Callouts

By default, callouts aren’t allowed after DML operations in the same transaction because DML operations result in pending uncommitted work that prevents callouts from executing. Sometimes, you might want to insert test data in your test method using DML before making a callout. To enable this, enclose the portion of your code that performs the callout within Test.startTest and Test.stopTest statements. The Test.startTest statement must appear before the Test.setMock statement. Also, the calls to DML operations must not be part of the Test.startTest/Test.stopTest block.

DML operations that occur after mock callouts are allowed and don’t require any changes in test methods.

The DML operations support works for all implementations of mock callouts using: the HttpCalloutMock interface and static resources (StaticResourceCalloutMock or MultiStaticResourceCalloutMock). The following example uses an implemented HttpCalloutMock interface but you can apply the same technique when using static resources.

## Performing DML Before Mock Callouts

This example is based on the [HttpCalloutMock](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpcalloutmock.htm) example provided earlier. The example shows how to use Test.startTest and Test.stopTest statements to allow DML operations to be performed in a test method before mock callouts. The test method (testCallout) first inserts a test account, calls Test.startTest, sets the mock callout mode using Test.setMock, calls a method that performs the callout, verifies the mock response values, and finally, calls Test.stopTest.

```

```

## Asynchronous Apex and Mock Callouts

Similar to DML, asynchronous Apex operations result in pending uncommitted work that prevents callouts from being performed later in the same transaction. Examples of asynchronous Apex operations are calls to future methods, batch Apex, or scheduled Apex. These asynchronous calls are typically enclosed within Test.startTest and Test.stopTest statements in test methods so that they execute after Test.stopTest. In this case, mock callouts can be performed after the asynchronous calls and no changes are necessary. But if the asynchronous calls aren’t enclosed within Test.startTest and Test.stopTest statements, you’ll get an exception because of uncommitted work pending. To prevent this exception, do either of the following:

-   Enclose the asynchronous call within Test.startTest and Test.stopTest statements.
    
    ```
    
    ```
    
-   Follow the same rules as with DML calls: Enclose the portion of your code that performs the callout within Test.startTest and Test.stopTest statements. The Test.startTest statement must appear before the Test.setMock statement. Also, the asynchronous calls must not be part of the Test.startTest/Test.stopTest block.
    
    ```
    
    ```
    

Asynchronous calls that occur after mock callouts are allowed and don’t require any changes in test methods.

#### See Also

-   [*Apex Reference Guide*: Test Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test Class - HTML (New Window)")