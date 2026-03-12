---
title: "Lightning Types"
domain: chatterapi
topic: lightning-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.636Z
estimatedTokens: 371
keywords: [Lightning, basic, identifiers, title]
---

# Lightning Types

> Get basic information, such as identifiers, title, and description about each Lightning
    type.

# Lightning Types

Get basic information, such as identifiers, title, and description about each Lightning type.

Resource

```

```

Available version

64.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| editorConfig​Target | String | Editor configuration targets for lightning types. In version 64.0 and later, LightningDesktopGenAi is the only valid value. | Optional | 64.0 |
| fullyQualified​Names | String[] | List of fully qualified names of types to return. | Optional | 64.0 |
| language | String | Language or locale code, such as es or en_US, to retrieve the title and description of a type. If unspecified, the logged-in user’s language is used. The fallback language is English in case translations don’t exist. | Optional | 64.0 |
| page | Integer | Number of the page to return. If unspecified or if you specify 0, the first page is returned. | Optional | 64.0 |
| pageSize | Integer | Number of items on a page. Valid values are from 1 to 250. If unspecified, defaults to 25. | Optional | 64.0 |
| rendererConfig​Target | String | Renderer configuration targets for lightning types. In version 64.0 and later, LightningDesktopGenAi is the only valid value. | Optional | 64.0 |

Response body for GET

[Lightning Type Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_type_collection.htm "Collection of lightning types.")

## Code Examples

```
/connect/lightning-types
```

## Related Topics

- Lightning Type Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_type_collection.htm)
