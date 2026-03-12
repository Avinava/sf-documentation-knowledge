---
title: "Understanding Date and Time Serialization"
domain: pages
topic: understanding-date-and-time-serialization
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:23.749Z
estimatedTokens: 187
keywords: [Understanding, Date, Time, Serialization, serialized, epoch, passed, via, Visualforce, remoting, Datetime]
---

# Understanding Date and Time Serialization

> Date and time values are serialized as epoch time when passed via Visualforce
    remoting.

# Understanding Date and Time Serialization

Date and time values are serialized as epoch time when passed via Visualforce remoting.

Date, DateTime, and Time objects are returned from a RemoteAction function are serialized as a long integer.

## Serialized Datetime Value

```

```

#### See Also

-   [Handling the Remote Response](atlas.en-us.pages.meta/pages/pages_js_remoting_handling_response.htm "Handle the response to a remote method call asynchronously in the remote method callback function.")

-   [Configuring a JavaScript Remoting Request](atlas.en-us.pages.meta/pages/pages_js_remoting_configuring_request.htm "Configure a remoting request by providing an object with configuration settings when you declare the remoting request.")

## Code Examples

```
[{
    "statusCode": 200,
    "type": "rpc",
    "tid": 8,
    "ref": false,
    "action": "DateTestController",
    "method": "add",
    "result": 1432047600000
}]
```

## Related Topics

- Handling the Remote Response (atlas.en-us.pages.meta/pages/pages_js_remoting_handling_response.htm)
- Configuring a JavaScript Remoting Request (atlas.en-us.pages.meta/pages/pages_js_remoting_configuring_request.htm)
