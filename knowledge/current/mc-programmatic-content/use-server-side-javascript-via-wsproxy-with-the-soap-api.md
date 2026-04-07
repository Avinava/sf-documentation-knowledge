---
title: "Use Server-Side JavaScript via WSProxy with the SOAP API"
domain: mc-programmatic-content
topic: use-server-side-javascript-via-wsproxy-with-the-soap-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:27.433Z
estimatedTokens: 219
keywords: [Server-Side, JavaScript, via, WSProxy, SOAP, API, legacy, accessing, data, including, SSJS, Core, Library, primarily, wrappers]
---

# Use Server-Side JavaScript via WSProxy with the SOAP API

> The legacy methods for accessing SOAP object data, including what is used in the SSJS Core Library, are primarily wrappers around AMPScript functions. Using legacy SSJS methods adds overhead to the processing of the calls as the code translates the data between the different language runtimes.  The 

# Use Server-Side JavaScript via WSProxy with the SOAP API

The legacy methods for accessing SOAP object data, including what is used in the SSJS Core Library, are primarily wrappers around AMPScript functions. Using legacy SSJS methods adds overhead to the processing of the calls as the code translates the data between the different language runtimes. The WSProxy object is native to the platform and simpler to use than the SSJS methods. The object reduces overhead and increases speed of your API calls. The object’s usage syntax is much more JavaScript-like when compared to the existing platform functions.

The WSProxy object is available in all non-send contexts and has the same restrictions in place as other SOAP API access methods.

To start using the WSProxy object, create an object to handle the proxying of calls.

```
var api = new Script.Util.WSProxy();
```
