---
title: "remoteFunction Syntax and Parameters Syntax and Parameters"
domain: ajax
topic: remotefunction-syntax-and-parameters-syntax-and-parameters
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.645Z
estimatedTokens: 79
keywords: [remoteFunction, AJAX, proxy, uses, calls]
---

# remoteFunction Syntax and Parameters Syntax and Parameters

> AJAX proxy uses remoteFunction to proxy calls.

# remoteFunction Syntax and Parameters Syntax and Parameters

AJAX proxy uses remoteFunction to proxy calls.

The remoteFunction syntax and parameters:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

cache and timeout are available in version 10.0 and later.

## Code Examples

```
sforce.connection.remoteFunction({ 
url : endpoint_url, 
onSuccess : callback_method 
onFailure : error_callback 
method : http_method 
mimeType : "text/plain" | "text/xml" 
async : true | false 
requestHeaders : http_headers 
requestData : http_post_data 
cache : true | false 
timeout : client_side_timeout_in_ms 
});
```
