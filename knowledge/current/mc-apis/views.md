---
title: "Views"
domain: mc-apis
topic: views
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:21.111Z
estimatedTokens: 271
keywords: [Views, multi-channel, assets, channel, view, hold, different, content, channels, asset, parse, render, differently, generic, html, fallback, case, Sample, Items]
---

> For multi-channel assets, use a channel view to hold the different content for the different channels. This allows the asset to parse and render its content differently based on the channel in which it is used. Use a generic html view as a fallback in case the channel view used to render the asset i

# Views

For multi-channel assets, use a channel view to hold the different content for the different channels. This allows the asset to parse and render its content differently based on the channel in which it is used. Use a generic html view as a fallback in case the channel view used to render the asset is not found in the views.

Add views to the asset as an object under the views attribute. Each key under views represents a channel view and contains an asset for this channel.

## Sample Asset with Views

```json
{
  "name": "NTO Welcome Series Email",
  "channels": {
    "email": true,
    "web": false
  },
  "views": {
    "html": {},
    "text": {},
    "subjectline": {},
    "preheader": {},
    "viewAsAWebPage": {),
    "subscriptioncenter": {},
    "forwardHTML": {},
    "forwardText": {}
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
