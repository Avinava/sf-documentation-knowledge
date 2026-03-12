---
title: "Link Capability Input"
domain: chatterapi
topic: link-capability-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.961Z
estimatedTokens: 147
keywords: [Link, Capability, Input, attached, feed, element]
---

# Link Capability Input

> Create or update a link attached to a feed element.

# Link Capability Input

Create or update a link attached to a feed element.

Root XML tag

```

```

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| url | String | URL of the link. | Required | 32.0 |
| urlName | String | Name of the link. | Optional | 32.0 |

#### See Also

-   [Feed Element Capabilities Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm "A container for all capabilities that can be included when creating a feed element.")

## Code Examples

```
<linkCapability>
   <url>https://www.example.com</url>
   <urlName>Example</urlName>
</linkCapability>
```

```
{
   "url": "https://www.example.com",
   "urlName": "Example"
}
```

## Related Topics

- Feed Element Capabilities Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_feed_element_capabilities_input.htm)
