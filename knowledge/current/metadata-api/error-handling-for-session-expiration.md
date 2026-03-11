---
title: "Error Handling for Session Expiration"
domain: metadata-api
topic: error-handling-for-session-expiration
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:45:52.303Z
keywords: [Error, Handling, Session, Expiration]
---

# Error Handling for Session Expiration

# Error Handling for Session Expiration

When you sign on via the login() call, a new client session begins and a corresponding unique session ID is generated. Sessions automatically expire after the amount of time specified in the **Security Controls** setup area of the Salesforce application (default two hours). When your session expires, the exception code INVALID\_SESSION\_ID is returned. If this happens, you must invoke the login() call again. For more information about login(), see the [SOAP API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api.meta/api/ "HTML (New Window)").