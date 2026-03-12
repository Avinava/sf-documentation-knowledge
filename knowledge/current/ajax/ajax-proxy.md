---
title: "AJAX Proxy"
domain: ajax
topic: ajax-proxy
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.641Z
estimatedTokens: 426
keywords: [AJAX, Proxy, browsers, don't, allow, JavaScript, code, connect, external, servers, directly, Therefore, may, send, requests]
---

# AJAX Proxy

> Some browsers don't allow JavaScript code to connect to external servers directly.
        Therefore, you may need to send requests through the AJAX proxy.

# AJAX Proxy

Some browsers don't allow JavaScript code to connect to external servers directly. Therefore, you may need to send requests through the AJAX proxy.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

To use the AJAX proxy, you must register all external services in the Salesforce user interface. From Setup, enter Remote Site Settings in the Quick Find box, then select **Remote Site Settings**.

For security reasons, Salesforce restricts the outbound ports you may specify to one of the following:

-   80: This port only accepts HTTP connections.
-   443: This port only accepts HTTPS connections.
-   1024–66535 (inclusive): These ports accept HTTP or HTTPS connections.

The AJAX proxy is part of the AJAX Toolkit. Access it using remoteFunction defined in connection.js. You can specify any HTTP method in remoteFunction, for example HTTP GET or POST, and it will be forwarded to the external service.

The following examples illustrate typical approaches for GET and POST:

GET Example:

```

```

POST Example:

```

```

-   **[remoteFunction Syntax and Parameters Syntax and Parameters](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_remotefunction_syntax.htm)**
    AJAX proxy uses remoteFunction to proxy calls.
-   **[Download the Salesforce Client Certificate](atlas.en-us.ajax.meta/ajax/sforce_api_ajax_client_cert_for_om.htm)**
    Your application (endpoint) server’s SSL/TLS can be configured to require client certificates (two-way SSL/TLS) to validate the identity of the Salesforce server when it takes the role of client to your server. If so, you can download the Salesforce client certificate from the Salesforce API page.

## Code Examples

```
sforce.connection.remoteFunction({
                   url : "http://www.myExternalServer.com",
                   onSuccess : function(response) {
                          alert("result" + response);
                      }
               });
```

```
var envelope = ""; //request envelope, empty for this example
            sforce.connection.remoteFunction({
                   url : "http://services.xmethods.net:80/soap",
                   requestHeaders: {"Content-Type":"text/xml",
                          "SOAPAction": """"
                      },
                   requestData: envelope,
                   method: "POST",
                   onSuccess : function(response) {
                          sforce.debug.log(response);
                      },
                   onFailure : function(response) {
                          alert("Failed" + response)
                      }
               });
```

## Related Topics

- remoteFunction Syntax and Parameters Syntax and Parameters (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_remotefunction_syntax.htm)
- Download the Salesforce Client Certificate (atlas.en-us.ajax.meta/ajax/sforce_api_ajax_client_cert_for_om.htm)
