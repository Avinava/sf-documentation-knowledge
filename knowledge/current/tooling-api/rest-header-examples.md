---
title: "REST Header Examples"
domain: tooling-api
topic: rest-header-examples
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:44.255Z
estimatedTokens: 283
keywords: [REST, Header, Examples, examples, understand, headers., Note]
---

# REST Header Examples

> Use these examples to understand REST headers.

# REST Header Examples

Use these examples to understand REST headers.

REST headers in the Tooling API WSDL are described in [REST Headers for Tooling API](atlas.en-us.api_tooling.meta/api_tooling/intro_api_tooling_rest_headers.htm "Tooling API provides a subset of the REST headers available in REST API."). For more details about REST Resources, see the REST API Developer Guide.

## Examples

The following examples use Apex to execute REST requests with headers. You can use any standard REST tool to access Tooling REST API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_tooling)

#### Note

The examples in this guide use a production login URL with MyDomainName in place of the org’s My Domain name. The format for sandbox login URLs differs. To use these examples, update the login URL. You can find the My Domain name and My Domain login URL for your org on the My Domain page in Setup.

First, set up the connection to your org and the HTTP request type:

```

```

At the end of each request, add the following code to send the request and retrieve the body of the response:

```

```

## Code Examples

```
HttpRequest req = new HttpRequest();
req.setHeader('Authorization', 'Bearer ' + UserInfo.getSessionID());
req.setHeader('Content-Type', 'application/json');
```

```
Http h = new Http();
HttpResponse res = h.send(req);
system.debug(res.getBody());
```

## Related Topics

- REST Headers for Tooling API (atlas.en-us.api_tooling.meta/api_tooling/intro_api_tooling_rest_headers.htm)
