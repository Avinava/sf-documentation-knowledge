---
title: "Extensions Capability Input"
domain: chatterapi
topic: extensions-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.613Z
estimatedTokens: 220
keywords: [Extensions, Capability, Input, associated, feed, element]
---

# Extensions Capability Input

> Create or update extensions associated with a feed
      element.

# Extensions Capability Input

Create or update extensions associated with a feed element.

Root XML tag

<extensionsCapability>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| itemsToAdd | Extension Input[] | Collection of extensions to associate with the feed element. | Required for creating an extension (POST)Optional for updating an extension (PATCH) | 40.0 |
| itemsToRemove | String[] | List of attachment IDs to remove from the feed element. | Optional for updating an extension (PATCH)Don’t specify for creating an extension (POST) | 41.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
{
   "itemsToAdd": {
      "items": [{
         "extensionId": "extensionId1",
         "payload": "eyJkb2N1bWVudF9pZCI6ICIxMjM0NSJ9",
         "textRepresentation": "http://salesforce.quip.com?id=1234",
         "payloadVersion": "0.1"
          }
      ]
   },
   "itemsToRemove": ["attachmentId2","attachmentId3"]
}
```

## Related Topics

- Extension Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_extension_input.htm)
- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
