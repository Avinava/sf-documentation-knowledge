---
title: "Client"
domain: platform-connect
topic: client
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.496Z
estimatedTokens: 313
keywords: [Client, JSON-formatted, signed, CanvasRequest, context, app]
---

# Client

> The Client object is a JSON-formatted object
                returned by the signed request in the CanvasRequest object. It contains context information
                about the client app.

# Client

The Client object is a JSON-formatted object returned by the signed request in the [CanvasRequest](atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm) object. It contains context information about the client app.

| Field | Description |
| --- | --- |
| instanceId | The ID of a canvas app exposed on a Visualforce page. Used internally for canvas app instance management. |
| instanceUrl | The URL of the Salesforce instance. For example, http://instance.salesforce.com. Used to preface the URLs returned by the Links object. |
| oauthToken | The OAuth access token that’s returned to the caller. |
| refreshToken | The token that the client uses to authenticate a session. This value is returned only if the canvas app has “Perform requests on your behalf at any time (refresh_token, offline_access)” as one of the selected OAuth scopes; otherwise null is returned. |
| targetOrigin | The URL of the canvas app. Used internally for cross-domain communication between the page and the iFrame that contains the canvas app. |

The following code snippet shows an example of the Client object.

```

```

#### See Also

-   [CanvasRequest](atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)

## Code Examples

```
"client":
{
    "instanceId":"06Px000000002JZ", 
    "instanceUrl":"http://instance.salesforce.com:8080", 
    "oauthToken":"<SALESFORCE_ACCESS_TOKEN>", 
    "refreshToken":"<SALESFORCE_ACCESS_TOKEN>", 
    "targetOrigin":"http://instance.salesforce.com:8080"
}
```

## Related Topics

- CanvasRequest (atlas.en-us.platform_connect.meta/platform_connect/canvas_request_object.htm)
- Links (atlas.en-us.platform_connect.meta/platform_connect/links_object.htm)
