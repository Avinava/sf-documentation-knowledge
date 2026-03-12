---
title: "ConnectApi Exceptions"
domain: apex-reference
topic: connectapi-exceptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:32.046Z
estimatedTokens: 265
namespace: ConnectApi
keywords: [ConnectApi, Exceptions, contains, exception, classes.]
---

# ConnectApi Exceptions

> The ConnectApi namespace
contains exception classes.

**Namespace:** `ConnectApi`

# ConnectApi Exceptions

The ConnectApi namespace contains exception classes.

All exceptions classes support built-in methods for returning the error message and exception type. See [Exception Class and Built-In Exceptions](atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm "An exception denotes an error that disrupts the normal flow of code execution. You can use Apex built-in exceptions or create custom exceptions. All exceptions have common methods.").

The ConnectApi namespace contains these exceptions:

| Exception | Description |
| --- | --- |
| ConnectApi.ConnectApiException | Any logic error in the way your application is utilizing ConnectApi code. This is equivalent to receiving a 400 error from Connect REST API. |
| ConnectApi.NotFoundException | Any issues with the specified resource being found. This is equivalent to receiving a 404 error from Connect REST API. |
| ConnectApi.RateLimitException | When you exceed the rate limit. This is equivalent to receiving a 503 Service Unavailable error from Connect REST API. |

## Related Topics

- Exception Class and Built-In
                                        Exceptions (atlas.en-us.apexref.meta/apexref/apex_classes_exception_methods.htm)
