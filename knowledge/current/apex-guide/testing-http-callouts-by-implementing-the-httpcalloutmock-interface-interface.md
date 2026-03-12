---
title: "Testing HTTP Callouts by Implementing the  HttpCalloutMock Interface Interface"
domain: apex-guide
topic: testing-http-callouts-by-implementing-the-httpcalloutmock-interface-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.702Z
estimatedTokens: 622
keywords: [Testing, HTTP, Callouts, Implementing, HttpCalloutMock, Provide, implementation, specify, response, sent, respond, which, Apex, runtime, calls, send, callout., Note]
---

# Testing HTTP Callouts by Implementing the  HttpCalloutMock Interface Interface

> Provide an implementation for the HttpCalloutMock interface to specify the response sent in the respond method, which the Apex runtime calls to
                send a response for a callout.

# Testing HTTP Callouts by Implementing the HttpCalloutMock Interface Interface

Provide an implementation for the HttpCalloutMock interface to specify the response sent in the respond method, which the Apex runtime calls to send a response for a callout.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

-   The class that implements the HttpCalloutMock interface can be either global or public.
-   You can annotate this class with [@isTest](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm) since it will be used only in test context. In this way, you can exclude it from your organization’s code size limit of 6 MB.

Now that you have specified the values of the fake response, instruct the Apex runtime to send this fake response by calling Test.setMock in your test method. For the first argument, pass HttpCalloutMock.class, and for the second argument, pass a new instance of your interface implementation of HttpCalloutMock, as follows:

```

```

After this point, if an HTTP callout is invoked in test context, the callout is not made and you receive the mock response you specified in the respond method implementation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To mock a callout if the code that performs the callout is in a managed package, call Test.setMock from a test method in the same package with the same namespace.

This is a full example that shows how to test an HTTP callout. The interface implementation (MockHttpResponseGenerator) is listed first. It is followed by a class containing the test method and another containing the method that the test calls. The testCallout test method sets the mock callout mode by calling Test.setMock before calling getInfoFromExternalService. It then verifies that the response returned is what the implemented respond method sent. Save each class separately and run the test in CalloutClassTest.

```

```

```

```

```

```

#### See Also

-   [*Apex Reference Guide*: HttpCalloutMock Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_httpcalloutmock.htm "Apex Reference Guide: HttpCalloutMock Interface - HTML (New Window)")

-   [*Apex Reference Guide*: Test Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_methods_system_test.htm "Apex Reference Guide: Test Class - HTML (New Window)")

## Code Examples

```apex
global class YourHttpCalloutMockImpl implements HttpCalloutMock {
    global HTTPResponse respond(HTTPRequest req) {
        // Create a fake response.
        // Set response values, and 
        // return response.
    }
}
```

```
Test.setMock(HttpCalloutMock.class, new YourHttpCalloutMockImpl());
```

```apex
@isTest
global class MockHttpResponseGenerator implements HttpCalloutMock {
    // Implement this interface method
    global HTTPResponse respond(HTTPRequest req) {
        // Optionally, only send a mock response for a specific endpoint
        // and method.
        System.assertEquals('https://example.com/example/test', req.getEndpoint());
        System.assertEquals('GET', req.getMethod());
        
        // Create a fake response
        HttpResponse res = new HttpResponse();
        res.setHeader('Content-Type', 'application/json');
        res.setBody('{"example":"test"}');
        res.setStatusCode(200);
        return res;
    }
}
```

```apex
public class CalloutClass {
    public static HttpResponse getInfoFromExternalService() {
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://example.com/example/test');
        req.setMethod('GET');
        Http h = new Http();
        HttpResponse res = h.send(req);
        return res;
    }
}
```

```apex
@isTest
private class CalloutClassTest {
     @isTest static void testCallout() {
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
    }
}
```

## Related Topics

- @isTest (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)
