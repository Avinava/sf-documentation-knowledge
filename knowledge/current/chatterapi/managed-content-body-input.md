---
title: "Managed Content Body Input"
domain: chatterapi
topic: managed-content-body-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.997Z
estimatedTokens: 159
keywords: [Managed, Content, Input, representation, piece]
---

# Managed Content Body Input

> Input representation for the body of a piece of managed content.

# Managed Content Body Input

Input representation for the body of a piece of managed content.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| nodeMap | Object | Body of the managed content version. | Required | 60.0 |

#### See Also

-   [Managed Content Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_input.htm "Managed content.")

-   [Managed Content Variant Update Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_variant_update_input.htm "Managed content variant update.")

## Code Examples

```
"nodeMap" : {
"bannerImage": { 
  "source": { 
    "type": "imageReference", 
    "ref": { 
      "contentKey": "MCZOCY2AM5PFBADN5UDRB53TLXR4" 
    } 
  }
},
"featuredEvent": { 
  "source": { 
    "type": "imageReference", 
    "ref": { 
      "contentKey": "MCZOCY2AM5PFBADN5UDRB53TLXR4" 
    } 
  }
},
"excerpt":"this is test except",
"body":"&lt;p&gt;Test body&lt;/p&gt;"
}
```

## Related Topics

- Managed Content Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_input.htm)
- Managed Content Variant Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_managed_content_variant_update_input.htm)
