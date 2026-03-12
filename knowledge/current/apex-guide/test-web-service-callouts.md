---
title: "Test Web Service Callouts"
domain: apex-guide
topic: test-web-service-callouts
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.419Z
estimatedTokens: 991
keywords: [Test, Web, Service, Callouts, Generated, code, saved, Apex, containing, invoke, calling, deploy, package, accompanying, 75%]
---

# Test Web Service Callouts

> Generated code is saved as an Apex class containing the methods you can invoke for
        calling the web service. To deploy or package this Apex class and other accompanying code,
        75% of the code must have test coverage, including the methods in the generated class. By
        default, test methods don’t support web service callouts, and tests that perform web
        service callouts fail. To prevent tests from failing and to increase code coverage, Apex
        provides the built-in WebServiceMock interface and
        the Test.setMock method. Use WebServiceMock and Test.setMock to receive fake responses in a test method.

# Test Web Service Callouts

Generated code is saved as an Apex class containing the methods you can invoke for calling the web service. To deploy or package this Apex class and other accompanying code, 75% of the code must have test coverage, including the methods in the generated class. By default, test methods don’t support web service callouts, and tests that perform web service callouts fail. To prevent tests from failing and to increase code coverage, Apex provides the built-in WebServiceMock interface and the Test.setMock method. Use WebServiceMock and Test.setMock to receive fake responses in a test method.

## Specify a Mock Response for Testing Web Service Callouts

When you create an Apex class from a WSDL, the methods in the auto-generated class call WebServiceCallout.invoke, which performs the callout to the external service. When testing these methods, you can instruct the Apex runtime to generate a fake response whenever WebServiceCallout.invoke is called. To do so, implement the WebServiceMock interface and specify a fake response for the Apex runtime to send. Here are the steps in more detail.

First, implement the WebServiceMock interface and specify the fake response in the doInvoke method.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

-   The class implementing the WebServiceMock interface can be either global or public.
-   You can annotate this class with [@isTest](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm) because it is used only in a test context. In this way, you can exclude it from your org’s code size limit of 6 MB.

Now that you have specified the values of the fake response, instruct the Apex runtime to send this fake response by calling Test.setMock in your test method. For the first argument, pass WebServiceMock.class, and for the second argument, pass a new instance of your interface implementation of WebServiceMock, as follows:

```

```

After this point, if a web service callout is invoked in test context, the callout is not made. You receive the mock response specified in your doInvoke method implementation.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

To mock a callout if the code that performs the callout is in a managed package, call Test.setMock from a test method in the same package with the same namespace.

This example shows how to test a web service callout. The implementation of the WebServiceMock interface is listed first. This example implements the doInvoke method, which returns the response you specify. In this case, the response element of the auto-generated class is created and assigned a value. Next, the response Map parameter is populated with this fake response. This example is based on the WSDL listed in [Generated WSDL2Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm#apex_callouts_wsdl2apex_gen_code "You can generate Apex classes from a WSDL document using the WSDL2Apex tool. The WSDL2Apex tool is open source and available on GitHub."). Import this WSDL and generate a class called docSample before you save this class.

```

```

This method makes a web service callout.

```

```

This test class contains the test method that sets the mock callout mode. It calls the callEchoString method in the previous class and verifies that a mock response is received.

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm "Generated WSDL2Apex Code")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing_dml.htm "Performing DML Operations and Mock Callouts")

#### See Also

-   [*Apex Reference Guide*: WebServiceMock Interface](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_interface_webservicemock.htm "Apex Reference Guide: WebServiceMock Interface - HTML (New Window)")

## Code Examples

```apex
global class YourWebServiceMockImpl implements WebServiceMock {
   global void doInvoke(
           Object stub,
           Object request,
           Map<String, Object> response,
           String endpoint,
           String soapAction,
           String requestName,
           String responseNS,
           String responseName,
           String responseType) {

        // Create response element from the autogenerated class.
        // Populate response element.
        // Add response element to the response parameter, as follows:
        response.put('response_x', responseElement); 
   }
}
```

```
Test.setMock(WebServiceMock.class, new YourWebServiceMockImpl());
```

```apex
@isTest
global class WebServiceMockImpl implements WebServiceMock {
   global void doInvoke(
           Object stub,
           Object request,
           Map<String, Object> response,
           String endpoint,
           String soapAction,
           String requestName,
           String responseNS,
           String responseName,
           String responseType) {
       docSample.EchoStringResponse_element respElement = 
           new docSample.EchoStringResponse_element();
       respElement.EchoStringResult = 'Mock response';
       response.put('response_x', respElement); 
   }
}
```

```apex
public class WebSvcCallout {
    public static String callEchoString(String input) {
        docSample.DocSamplePort sample = new docSample.DocSamplePort();
        sample.endpoint_x = 'https://example.com/example/test';
        
        // This invokes the EchoString method in the generated class
        String echo = sample.EchoString(input);
        
        return echo;
    }   
}
```

```apex
@isTest
private class WebSvcCalloutTest {
    @isTest static void testEchoString() {              
        // This causes a fake response to be generated
        Test.setMock(WebServiceMock.class, new WebServiceMockImpl());
        
        // Call the method that invokes a callout
        String output = WebSvcCallout.callEchoString('Hello World!');
        
        // Verify that a fake result is returned
        System.assertEquals('Mock response', output); 
    }
}
```

## Related Topics

- @isTest (atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_isTest.htm)
- Generated WSDL2Apex Code (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing_dml.htm)
