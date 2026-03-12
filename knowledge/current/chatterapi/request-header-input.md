---
title: "Request Header Input"
domain: chatterapi
topic: request-header-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:12.700Z
estimatedTokens: 253
keywords: [Input, HTTP, pair]
---

# Request Header Input

> An HTTP request header name and value pair.

# Request Header Input

An HTTP request header name and value pair.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the request header. | Required | 33.0 |
| value | String | The value of the request header. | Required | 33.0 |

#### See Also

-   [Action Link Definition Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_definition_input.htm "The definition of an action link. An action link is a button on a feed element. Clicking an action link can take a user to a Web page, initiate a file download, or invoke an API call to Salesforce or to an external server. An action link includes a URL and an HTTP method, and can include a request body and header information, such as an OAuth token for authentication. Use action links to integrate Salesforce and third-party services into the feed so that users can drive productivity and accelerate innovation.")

## Code Examples

```
{
   "name": "Content-Type",
   "value": "application/json"
}
```

## Related Topics

- Action Link Definition Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_action_link_definition_input.htm)
