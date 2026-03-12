---
title: "Callout Limits and Limitations"
domain: apex-guide
topic: callout-limits-and-limitations
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.384Z
estimatedTokens: 1323
keywords: [Callout, Limits, Limitations, apply, Apex, code, HTTP, web, services, call, SOAP, API, any, external, Callouts]
---

# Callout Limits and Limitations

> The following limits and limitations apply when Apex code makes a callout to an HTTP request
      or a web services call. The web services call can be a SOAP API call or any external web
      services call.

# Callout Limits and Limitations

The following limits and limitations apply when Apex code makes a callout to an HTTP request or a web services call. The web services call can be a SOAP API call or any external web services call.

-   A single Apex transaction can make a maximum of 100 callouts to an HTTP request or an API call.
-   In Developer Edition orgs, you can only make up to 20 concurrent callouts to endpoints outside of your Salesforce org’s domain. This limit doesn’t apply to non-Developer Edition orgs.
-   The default timeout is 10 seconds. A custom timeout can be defined for each callout. The minimum is 1 millisecond and the maximum is 120,000 milliseconds. See the examples in the next section for how to set custom timeouts for Web services or HTTP callouts.
-   The maximum cumulative timeout for callouts by a single Apex transaction is 120 seconds. This time is additive across all callouts invoked by the Apex transaction.
-   Every org has a limit on long-running requests that run for more than 5 seconds (total execution time). HTTP callout processing time is not included when calculating this limit. We pause the timer for the callout and resume it when the callout completes. See [Execution Governors and Limits](atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm "Because Apex runs in a multitenant environment, the Apex runtime engine strictly enforces limits so that runaway Apex code or processes don’t monopolize shared resources. If some Apex code exceeds a limit, the associated governor issues a runtime exception that can’t be handled.") for Lightning Platform Apex limits.
-   You can’t make a callout when there are pending operations in the same transaction. Things that result in pending operations are DML statements, asynchronous Apex (such as future methods and batch Apex jobs), scheduled Apex, or sending email. You can make callouts before performing these types of operations.
-   Pending operations can occur before mock callouts in the same transaction. See [Performing DML Operations and Mock Callouts](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing_dml.htm) for WSDL-based callouts or [Performing DML Operations and Mock Callouts](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_dml.htm) for HTTP callouts.
-   When the header Expect: 100-Continue is added to a callout request and a HTTP/1.1 100 Continue response isn’t returned by the external server, a timeout occurs.

## Apex Callouts in Read-Only Mode

During read-only mode, Apex callouts to external services execute and aren’t blocked by the system. Typically, you execute some follow-up operations in the same transaction after receiving a response from a callout. For example, you can make a DML call to update a Salesforce record. But write operations in Salesforce, such as record updates, are blocked during read-only mode. This inconsistency in behavior in read-only mode can break your program flow and causes issues. To avoid incorrect program behavior, we recommend that you prevent making callouts in read-only mode. To check whether the org is in read-only mode, call System.getApplicationReadWriteMode().

The following example checks the return value of System.getApplicationReadWriteMode(). If the return value is equal to ApplicationReadWriteMode.READ\_ONLY enum value, the org is in read-only mode and the callout is skipped. Otherwise (ApplicationReadWriteMode.DEFAULT value), the callout is performed.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

This class uses Apex HTTP classes to make a callout as an example. You can also make a callout using an imported WSDL through WSDL2Apex. The process for checking for read-only mode is the same in either case.

```

```

Your Salesforce org is in read-only mode during some Salesforce maintenance activities, such as planned site switches and instance refreshes. As part of Continuous Site Switching, your Salesforce org is switched to its ready site approximately once every six months. For more information about site switching, see [Continuous Site Switching](https://help.salesforce.com/articleView?id=Continuous-Site-Switching&type=1&language=en_US).

To test read-only mode in sandbox, contact Salesforce to enable the read-only mode test option. Once the test option is enabled, you can toggle read-only mode on and verify your apps.

## Setting Callout Timeouts

The following example sets a custom timeout for Web services callouts. The example works with the sample WSDL file and the generated DocSamplePort class described in [Generated WSDL2Apex Code](atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm "You can generate Apex classes from a WSDL document using the WSDL2Apex tool. The WSDL2Apex tool is open source and available on GitHub."). Set the timeout value in milliseconds by assigning a value to the special timeout\_x variable on the stub.

```

```

The following is an example of setting a custom timeout for HTTP callouts:

```

```

-   [← Previous](atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs.htm "Using Certificates")
-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm "Make Long-Running Callouts with Continuations")

## Code Examples

```apex
public class HttpCalloutSampleReadOnly {
    public class MyReadOnlyException extends Exception {}

    // Pass in the endpoint to be used using the string url
    public String getCalloutResponseContents(String url) {
        
        // Get Read-only mode status
        ApplicationReadWriteMode mode = System.getApplicationReadWriteMode();
        String returnValue = '';
        
        if (mode == ApplicationReadWriteMode.READ_ONLY) {
            // Prevent the callout
            throw new MyReadOnlyException('Read-only mode. Skipping callouts!');
        } else if (mode == ApplicationReadWriteMode.DEFAULT) {
            // Instantiate a new http object
            Http h = new Http();
            
            // Instantiate a new HTTP request, specify the method (GET) 
            // as well as the endpoint.
            HttpRequest req = new HttpRequest();
            req.setEndpoint(url);
            req.setMethod('GET');
            
            // Send the request, and return a response
            HttpResponse res = h.send(req);
            returnValue = res.getBody();                        
        }
        return returnValue;
    }
}
```

```
docSample.DocSamplePort stub = new docSample.DocSamplePort();
stub.timeout_x = 2000; // timeout in milliseconds
```

```
HttpRequest req = new HttpRequest();
req.setTimeout(2000); // timeout in milliseconds
```

## Related Topics

- Execution Governors and Limits (atlas.en-us.apexcode.meta/apexcode/apex_gov_limits.htm)
- Performing DML Operations and Mock Callouts (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_testing_dml.htm)
- Performing DML Operations and Mock Callouts (atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing_dml.htm)
- Generated WSDL2Apex Code (atlas.en-us.apexcode.meta/apexcode/apex_callouts_wsdl2apex_gen_code.htm)
- ← Previous (atlas.en-us.apexcode.meta/apexcode/apex_callouts_client_certs.htm)
- Next → (atlas.en-us.apexcode.meta/apexcode/apex_continuation_overview.htm)
