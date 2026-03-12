---
title: "Error Handling with Promises"
domain: service-cloud
topic: error-handling-with-promises
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.703Z
estimatedTokens: 151
keywords: [Error, Handling, Promises, simplify, code, handles, success, failure, asynchronous, calls., error, handling, promises, catch, promise, returned, calling, API, method.]
---

# Error Handling with Promises

> Promises can simplify code that handles the success or failure of asynchronous calls. To
  use error handling with promises, use the catch() method on
  the promise that is returned from calling an API method.

# Error Handling with Promises

Promises can simplify code that handles the success or failure of asynchronous calls. To use error handling with promises, use the catch() method on the promise that is returned from calling an API method.

The catch() method returns a promise and accepts a single function parameter that’s called if the promise is rejected. This function has one argument that shows the reason for the rejection. The promise returned by catch() is rejected if the function that is passed in either throws an error or returns a promise that’s rejected. Otherwise, the promise is resolved.
