---
title: "HTTP Classes"
domain: apex-guide
topic: http-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.637Z
keywords: [HTTP, Classes, Considerations]
---

# HTTP Classes

# HTTP Classes

These classes expose the HTTP request and response functionality.

-   [Http Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_http.htm). Use this class to initiate an HTTP request and response.
-   [HttpRequest Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm): Use this class to programmatically create HTTP requests like GET, POST, PATCH, PUT, and DELETE.
-   [HttpResponse Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm): Use this class to handle the HTTP response returned by HTTP.

The HttpRequest and HttpResponse classes support these elements.

-   HttpRequest
    -   HTTP request types, such as GET, POST, PATCH, PUT, DELETE, TRACE, CONNECT, HEAD, and OPTIONS
    -   Request headers if needed
    -   Read and connection timeouts
    -   Redirects if needed
    -   Content of the message body
-   HttpResponse
    -   The HTTP status code
    -   Response headers if needed
    -   Content of the response body

This example makes an HTTP GET request to the external server passed to the getCalloutResponseContents method in the url parameter. This example also accesses the body of the returned response.

```

```

The previous example runs synchronously, meaning no further processing happens until the external web service returns a response. Alternatively, you can use the [@future annotation](atlas.en-us.apexcode.meta/apexcode/apex_classes_annotation_future.htm "Use the Future annotation to identify methods that run asynchronously. A future method runs when Salesforce has available resources.") to make the callout run asynchronously.

This example makes an HTTP POST request to the external server passed to the getPostCalloutResponseContents method in the url parameter. Replace Your\_JSON\_Content with the JSON content that you want to send in the callout.

```

```

To access an external server from an endpoint or a redirect endpoint, add the remote site to a list of authorized remote sites. Log in to Salesforce and from Setup, in the Quick Find box, enter Remote Site Settings, and then select **Remote Site Settings**.

Use the [XML classes](atlas.en-us.apexcode.meta/apexcode/apex_xml_dom.htm "Apex provides classes that enable you to work with XML content using the DOM (Document Object Model).") or [JSON classes](atlas.en-us.apexcode.meta/apexcode/apex_methods_system_json_overview.htm "JavaScript Object Notation (JSON) support in Apex enables the serialization of Apex objects into JSON format and the deserialization of serialized JSON content.") to parse XML or JSON content in the body of a request created by [HttpRequest](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httprequest.htm), or a response accessed by [HttpResponse](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_classes_restful_http_httpresponse.htm).

## Considerations

-   The AJAX proxy handles redirects and authentication challenges (401/407 responses) automatically. For more information about the AJAX proxy, see [AJAX Toolkit documentation](https://developer.salesforce.com/docs/atlas.en-us.260.0.ajax.meta/ajax/sforce_api_ajax_queryresultiterator.htm#ajax_proxy "HTML (New Window)").
-   You can set the endpoint as a named credential URL. A named credential URL contains the scheme callout:, the name of the named credential, and an optional path. For example: callout:My\_Named\_Credential/some\_path. A named credential specifies the URL of a callout endpoint and its required authentication parameters in one definition. Salesforce manages all authentication for Apex callouts that specify a named credential as the callout endpoint so that your code doesn’t have to. You can also skip remote site settings, which are otherwise required for callouts to external sites, for the site defined in the named credential. See [Named Credentials as Callout Endpoints](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_callouts_named_credentials.htm).
-   When you set a request body in the callout, set the method to POST. If you set a request body and the request method is GET, a POST request is performed.
-   Callouts are blocked if you have pending uncommitted transactions from DML operations, queueable jobs (that are queued with System.enqueueJob), Database.executeBatch, or future methods.

-   [Next →](atlas.en-us.apexcode.meta/apexcode/apex_classes_restful_http_testing.htm "Testing HTTP Callouts")