---
title: "Asynchronous Calls with the Salesforce Console Integration Toolkit"
domain: service-cloud
topic: asynchronous-calls-with-the-salesforce-console-integration-toolkit
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.245Z
estimatedTokens: 134
keywords: [Asynchronous, Calls, Salesforce, Console, Integration, Toolkit, lets, issue, allow, client-side, process, continue, instead, waiting, callback]
---

# Asynchronous Calls with the Salesforce Console Integration Toolkit

> The Salesforce Console Integration Toolkit lets you
      issue asynchronous calls. Asynchronous calls allow the client-side process to continue instead
      of waiting for a callback from the server. To issue an asynchronous call, you must include an
      additional parameter with the API call, which is referred to as a callback function. Once the
      result is ready, the server invokes the callback method with the result.

# Asynchronous Calls with the Salesforce Console Integration Toolkit

The Salesforce Console Integration Toolkit lets you issue asynchronous calls. Asynchronous calls allow the client-side process to continue instead of waiting for a callback from the server. To issue an asynchronous call, you must include an additional parameter with the API call, which is referred to as a callback function. Once the result is ready, the server invokes the callback method with the result.

Asynchronous syntax:

```

```

For example:

```

```

## Code Examples

```
method('arg1','arg2', ..., callback_method);
```

```
//Open a new primary tab with the Salesforce home page in it
   sforce.console.openPrimaryTab(null, 'https://salesforce.com', 
      false, 'Salesforce', callback);
```
