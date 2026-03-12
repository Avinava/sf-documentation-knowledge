---
title: "Testing HTTP Callouts Using Static Resources"
domain: apex-guide
topic: testing-http-callouts-using-static-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.709Z
estimatedTokens: 1223
keywords: [Testing, HTTP, Callouts, Resources, test, callouts, specifying, body, response, you’d, receive, resource, two, built-in, classes—StaticResourceCalloutMock, MultiStaticResourceCalloutMock., StaticResourceCalloutMock, Note, MultiStaticResourceCalloutMock]
---

# Testing HTTP Callouts Using Static Resources

> You can test HTTP callouts by specifying the body of the
response you’d like to receive in a static resource and using
one of two built-in classes—StaticResourceCalloutMock or MultiStaticResourceCalloutMock.

# Testing HTTP Callouts Using Static Resources

You can test HTTP callouts by specifying the body of the response you’d like to receive in a static resource and using one of two built-in classes—[StaticResourceCalloutMock](#StaticMockSection) or [MultiStaticResourceCalloutMock](#MultiStaticSection).

## Testing HTTP Callouts Using StaticResourceCalloutMock

Apex provides the built-in StaticResourceCalloutMock class that you can use to test callouts by specifying the response body in a static resource. When using this class, you don’t have to provide your own implementation of the HttpCalloutMock interface. Instead, just create an instance of StaticResourceCalloutMock and set the static resource to use for the response body, along with other response properties, like the status code and content type.

First, you must create a static resource from a text file to contain the response body:

1.  Create a text file that contains the response body to return. The response body can be an arbitrary string, but it must match the content type, if specified. For example, if your response has no content type specified, the file can include the arbitrary string abc. If you specify a content type of application/json for the response, the file content should be a JSON string, such as {"hah":"fooled you"}.
2.  Create a static resource for the text file:
    1.  From Setup, enter Static Resources in the Quick Find box, then select **Static Resources**.
    2.  Click **New**.
    3.  Name your static resource.
    4.  Choose the file to upload.
    5.  Click **Save**.

To learn more about static resources, see “Defining Static Resources” in the Salesforce online help.

Next, create an instance of StaticResourceCalloutMock and set the static resource, and any other properties.

```

```

In your test method, call Test.setMock to set the mock callout mode and pass it HttpCalloutMock.class as the first argument, and the variable name that you created for StaticResourceCalloutMock as the second argument.

```

```

After this point, if your test method performs a callout, the callout is not made and the Apex runtime sends the mock response you specified in your instance of StaticResourceCalloutMock.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To mock a callout if the code that performs the callout is in a managed package, call Test.setMock from a test method in the same package with the same namespace.

This is a full example containing the test method (testCalloutWithStaticResources) and the method it is testing (getInfoFromExternalService) that performs the callout. Before running this example, create a static resource named mockResponse based on a text file with the content {"hah":"fooled you"}. Save each class separately and run the test in CalloutStaticClassTest.

```

```

```

```

## Testing HTTP Callouts Using MultiStaticResourceCalloutMock

Apex provides the built-in MultiStaticResourceCalloutMock class that you can use to test callouts by specifying the response body in a static resource for each endpoint. This class is similar to StaticResourceCalloutMock except that it allows you to specify multiple response bodies. When using this class, you don’t have to provide your own implementation of the HttpCalloutMock interface. Instead, just create an instance of MultiStaticResourceCalloutMock and set the static resource to use per endpoint. You can also set other response properties like the status code and content type.

First, you must create a static resource from a text file to contain the response body. See the procedure outlined in [Testing HTTP Callouts Using StaticResourceCalloutMock](#StaticMockSection).

Next, create an instance of MultiStaticResourceCalloutMock and set the static resource, and any other properties.

```

```

In your test method, call Test.setMock to set the mock callout mode and pass it HttpCalloutMock.class as the first argument, and the variable name that you created for MultiStaticResourceCalloutMock as the second argument.

```

```

After this point, if your test method performs an HTTP callout to one of the endpoints https://example.com/example/test or https://example.com/example/sfdc, the callout is not made and the Apex runtime sends the corresponding mock response you specified in your instance of MultiStaticResourceCalloutMock.

This is a full example containing the test method (testCalloutWithMultipleStaticResources) and the method it is testing (getInfoFromExternalService) that performs the callout. Before running this example, create a static resource named mockResponse based on a text file with the content {"hah":"fooled you"} and another named mockResponse2 based on a text file with the content {"hah":"fooled you twice"}. Save each class separately and run the test in CalloutMultiStaticClassTest.

```

```

```

```

## Code Examples

```
StaticResourceCalloutMock mock = new StaticResourceCalloutMock();
mock.setStaticResource('myStaticResourceName');
mock.setStatusCode(200);
mock.setHeader('Content-Type', 'application/json');
```

```
Test.setMock(HttpCalloutMock.class, mock);
```

```apex
public class CalloutStaticClass {
    public static HttpResponse getInfoFromExternalService(String endpoint) {
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod('GET');
        Http h = new Http();
        HttpResponse res = h.send(req);
        return res;
    }
}
```

```apex
@isTest
private class CalloutStaticClassTest {
    @isTest static void testCalloutWithStaticResources() {
        // Use StaticResourceCalloutMock built-in class to
        // specify fake response and include response body 
        // in a static resource.
        StaticResourceCalloutMock mock = new StaticResourceCalloutMock();
        mock.setStaticResource('mockResponse');
        mock.setStatusCode(200);
        mock.setHeader('Content-Type', 'application/json');
        
        // Set the mock callout mode
        Test.setMock(HttpCalloutMock.class, mock);
        
        // Call the method that performs the callout
        HTTPResponse res = CalloutStaticClass.getInfoFromExternalService(
            'https://example.com/example/test');
        
        // Verify response received contains values returned by
        // the mock response.
        // This is the content of the static resource.
        System.assertEquals('{"hah":"fooled you"}', res.getBody());
        System.assertEquals(200,res.getStatusCode());
        System.assertEquals('application/json', res.getHeader('Content-Type'));   
    }
}
```

```
MultiStaticResourceCalloutMock multimock = new MultiStaticResourceCalloutMock();
multimock.setStaticResource('https://example.com/example/test', 'mockResponse');
multimock.setStaticResource('https://example.com/example/sfdc', 'mockResponse2');
multimock.setStatusCode(200);
multimock.setHeader('Content-Type', 'application/json');
```
