---
title: "Asynchronous Calls with"
domain: api-cti
topic: asynchronous-calls-with
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.627Z
estimatedTokens: 225
keywords: [Asynchronous, Calls, Open, CTI, lets, issue, allow, client-side, process, continue, instead, waiting, callback, server]
---

# Asynchronous Calls with

> Open CTI lets you issue asynchronous calls. Asynchronous calls allow the client-side
      process to continue instead of waiting for a callback from the server.

# Asynchronous Calls with

Open CTI lets you issue asynchronous calls. Asynchronous calls allow the client-side process to continue instead of waiting for a callback from the server.

To issue an asynchronous call, you must include an extra parameter with the API call, referred to as a callback function. Once the result is ready, the server invokes the callback method with the result.

Asynchronous syntax:

In Salesforce Classic:

```

```

In Lightning Experience:

```

```

## Example

In Salesforce Classic:

```

```

In Lightning Experience:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_cti)

#### Note

The call result depends on the execution context. For example, calling setSoftphoneWidth() in the standard Salesforce application has no effect, but calling setSoftphoneWidth() in the Salesforce console resizes the width of the softphone.

## Code Examples

```
method('arg1','arg2', ..., callback_method);
```

```
method({callback : function})
```

```
//Set softphone height
   sforce.interaction.cti.setSoftphoneHeight(300, callback);
```

```
//Disable clickToDial
   sforce.opencti.disableClickToDial({callback: callback});
```
