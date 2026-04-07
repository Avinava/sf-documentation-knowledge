---
title: "Content"
domain: mc-apis
topic: content
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.730Z
estimatedTokens: 277
keywords: [Content, attribute, asset's, actual, sent, customers, levels, asset, model, hold, identify, sub-content, Sample, Items]
---

# Content

> The content attribute contains the asset's actual content that will be sent to customers. The content attribute is used at all levels of the asset model to hold each asset's content and identify where to sub-content should go.

# Content

The content attribute contains the asset's actual content that will be sent to customers. The content attribute is used at all levels of the asset model to hold each asset's content and identify where to sub-content should go.

> When pasting HTML into the content attribute, HTML contains certain reserved chars that need to be escaped in JSON. Run the HTML through a JSON escape tool first to ensure that the HTML is valid in the JSON payload.

Add content to the asset as a string, using the content attribute.

## Sample Asset with Content

```json
{
  "name": "NTO Welcome Series Email",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {
      "content": "<!DOCTYPE html><body>This is a simple message.</body></html>"
    },
    "text": {},
    "subjectline": {},
    "preheader": {}
  },
  "assetType": {
    "name": "templatebasedemail",
    "id": 207
   }
}
```

## Related Items

-   [Asset Model](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
-   [Asset Model Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)

## Related Topics

- Asset Model (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
- Asset Model Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
