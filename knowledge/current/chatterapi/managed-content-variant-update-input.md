---
title: "Managed Content Variant Update Input"
domain: chatterapi
topic: managed-content-variant-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.075Z
estimatedTokens: 194
keywords: [Managed, Content, Variant, Input]
---

# Managed Content Variant Update Input

> Managed content variant update.

# Managed Content Variant Update Input

Managed content variant update.

Root XML tag

<managedContentVariantUpdateInputRepresentation>

JSON example for version 60.0 and later

```

```

JSON example for version 54.0–59.0

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| apiName | String | API name of the managed content variant. | Optional | 63.0 |
| contentBody | Managed Content Body Input in version 60.0 and laterMap<String, Object> in version 54.0–59.0 | Body of the managed content variant. | Optional | 54.0 |
| title | String | Title of the managed content variant. | Optional | 54.0 |
| urlName | String | URL name of the managed content variant within the org. | Optional | 54.0 |

## Code Examples

```
{
  "title":"Title of Document",
  "urlName":"test-url",
  "contentBody" : {
    "bannerImage": { 
      "source": { 
        "type": "imageReference", 
        "ref": { 
           "contentKey": "MCZOCY2AM5PFBADN5UDRB53TLXR4" 
        } 
      }
    },
    "excerpt":"this is test excerpt",
    "body":"&lt;p&gt;Test body&lt;/p&gt;"
  }
}
```

```
{
  "title": "My Updated Title",
  "urlName": "my_updated_url_name",
  "contentBody": {
     "bannerImage":"MCZOCY2AM5PFBADN5UDRB53TLXR4",
     "featuredEvent":"MCZOCY2AM5PFBADN5UDRB53TLXR4",
     "excerpt":"this is my updated excerpt",
     "body":"&lt;p&gt;Test updated body&lt;/p&gt;"
     }
}
```

## Related Topics

- Managed Content Body Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_body_input_rep.htm)
