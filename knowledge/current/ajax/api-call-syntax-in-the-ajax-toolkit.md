---
title: "API Call Syntax in the AJAX Toolkit"
domain: ajax
topic: api-call-syntax-in-the-ajax-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.570Z
estimatedTokens: 213
keywords: [API, Call, AJAX, Toolkit, SOAP, calls, slightly, different, depending, whether, synchronous, asynchronous]
---

# API Call Syntax in the AJAX Toolkit

> SOAP API calls use slightly different syntax in AJAX Toolkit, depending on whether the
    call is synchronous or asynchronous.

# API Call Syntax in the AJAX Toolkit

SOAP API calls use slightly different syntax in AJAX Toolkit, depending on whether the call is synchronous or asynchronous.

## Synchronous Calls

Syntax:

```

```

Example:

```

```

## Asynchronous Calls

Syntax:

```

```

Example:

```

```

In this example, onSuccess is the callback function, which returns the results when they are ready.

See [Core Calls](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/sforce_api_calls_list.htm "HTML (New Window)") in the SOAP API Developer Guide for call usage, arguments, and best practices, but use the AJAX Toolkit syntax for methods you embed in JavaScript.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=ajax)

#### Note

Because delete is a JavaScript keyword, use deleteIds instead of the API call delete.

## Code Examples

```
sforce.connection.method("arg1","arg2", ...);
```

```
sforce.connection.login("MyName@MyOrg.com","myPassword1");
```

```
method("arg1","arg2", ..., callback_method);
```

```
var callback = {onSuccess: handleSuccess, onFailure: handleFailure};
function handleSuccess(result) {}
function handleFailure(error) {}
sforce.connection.query("Select name from Account", callback);
```
