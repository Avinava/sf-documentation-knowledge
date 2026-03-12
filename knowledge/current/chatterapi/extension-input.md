---
title: "Extension Input"
domain: chatterapi
topic: extension-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.609Z
estimatedTokens: 201
keywords: [Extension, Input]
---

# Extension Input

> An extension.

# Extension Input

An extension.

Root XML tag

<extension>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| alternative​Representation | Alternative Input | Alternative representation of the extension. | Required | 40.0 |
| extensionId | String | ID of the extension. | Required | 40.0 |
| payload | String | Payload associated with the extension. | Required | 40.0 |
| payloadVersion | String | Payload version that identifies the structure of the payload associated with the extension. | Optional | 40.0 |

#### See Also

-   [Extensions Capability Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_extensions_capability_input.htm "Create or update extensions associated with a feed element.")

## Code Examples

```
{
   "alternativeRepresentation": 
      {
         "textRepresentation": "Quip document with ID 132452345",
         "thumbnailUrl": "http://salesforce.quip.com?id=132452345",
         "title": "Quip"
      },
   "extensionId": "id1",
   "payload": "eyJkb2N1bWVudF9pZCI6ICIxMjM0NSJ9",
   "payloadVersion": "0.1"
}
```

## Related Topics

- Alternative Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_alternative_input.htm)
- Extensions Capability Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_extensions_capability_input.htm)
