---
title: "Performing DML Operations and Mock Callouts"
domain: apex-guide
topic: performing-dml-operations-and-mock-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.424Z
estimatedTokens: 752
keywords: [Performing, DML, Operations, Mock, Callouts, aren’t, allowed, transaction, because, result, pending, uncommitted, work, prevents, executing]
---

# Performing DML Operations and Mock Callouts

> By default, callouts aren’t
allowed after DML operations in the same transaction because DML operations
result in pending uncommitted work that prevents callouts from executing.
Sometimes, you might want to insert test data in your test method
using DML before making a callout. To enable this, enclo

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

## Code Examples

```apex
@isTest
private class WebSvcCalloutTest {
    @isTest static void testEchoString() {              
        // Perform some DML to insert test data
        Account testAcct = new Account('Test Account');
        insert testAcct;

        // Call Test.startTest before performing callout
        // but after setting test data.
        Test.startTest();

        // Set mock callout class 
        Test.setMock(WebServiceMock.class, new WebServiceMockImpl());
        
        // Call the method that invokes a callout
        String output = WebSvcCallout.callEchoString('Hello World!');
        
        // Verify that a fake result is returned
        System.assertEquals('Mock response', output);

        Test.stopTest();
    }
}
```

```
Test.startTest();
MyClass.asyncCall();
Test.stopTest();

Test.setMock(..); // Takes two arguments
MyClass.mockCallout();
```

```
MyClass.asyncCall();

Test.startTest();
Test.setMock(..); // Takes two arguments
MyClass.mockCallout();
Test.stopTest();
```

```apex
@isTest
private class CalloutClassTest {
     @isTest static void testCallout() {
        // Perform some DML to insert test data
        Account testAcct = new Account('Test Account');
        insert testAcct;

        // Call Test.startTest before performing callout
        // but after setting test data.
        Test.startTest();

        // Set mock callout class 
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        
        // Call method to test.
        // This causes a fake response to be sent
        // from the class that implements HttpCalloutMock. 
        HttpResponse res = CalloutClass.getInfoFromExternalService();
        
        // Verify response received contains fake values
        String contentType = res.getHeader('Content-Type');
        System.assert(contentType == 'application/json');
        String actualValue = res.getBody();
        String expectedValue = '{"example":"test"}';
        System.assertEquals(actualValue, expectedValue);
        System.assertEquals(200, res.getStatusCode());

        Test.stopTest();
    }
}
```

## Related Topics

- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_considerations.htm)
- HttpCalloutMock (atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_httpcalloutmock.htm)
