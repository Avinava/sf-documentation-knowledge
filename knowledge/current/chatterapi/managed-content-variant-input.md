---
title: "Managed Content Variant Input"
domain: chatterapi
topic: managed-content-variant-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.071Z
estimatedTokens: 178
keywords: [Managed, Content, Variant, Input]
---

# Managed Content Variant Input

> Input used to create a managed content variant.

# Managed Content Variant Input

Input used to create a managed content variant.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| contentBody | Map<String, Object> | Body of the managed content variant. | Required | 58.0 |
| language | String | Language of the managed content variant. | Required | 58.0 |
| managedContent​KeyOrId | String | Managed content key or ID of the content associated to the variant to be created. | Required | 58.0 |
| title | String | Title of the managed content variant. | Optional | 58.0 |
| urlName | String | URL name of the managed content variant within the org. | Optional | 58.0 |

## Code Examples

```
{
   "managedContentKeyorId": "MCWWQJDO2BUZAX7FITHQVAGIASAE",
   "language":  "fr",
   "title":  "French title",
   "urlName": "my_url_name",
   "contentBody"  :  {
      "excerpt":  "French excerpt",
      "body":  "French body"
   }
}
```
