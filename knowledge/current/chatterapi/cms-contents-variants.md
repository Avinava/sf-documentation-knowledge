---
title: "CMS Contents Variants"
domain: chatterapi
topic: cms-contents-variants
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.800Z
estimatedTokens: 279
keywords: [CMS, Contents, Variants, managed, content, variant]
---

# CMS Contents Variants

> Create a managed content variant.

# CMS Contents Variants

Create a managed content variant.

Resource

```

```

Available version

58.0

HTTP methods

POST

Request body for POST

[Managed Content Variant Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_variant_input.htm "Input used to create a managed content variant.")

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

Response body for POST

[Managed Content Variant](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_variant.htm "Managed content variant.")

## Code Examples

```
/connect/cms/contents/variants
```

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

## Related Topics

- Managed Content Variant Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_variant_input.htm)
- Managed Content Variant (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_variant.htm)
