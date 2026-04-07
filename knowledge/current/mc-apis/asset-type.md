---
title: "Asset Type"
domain: mc-apis
topic: asset-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:20.219Z
estimatedTokens: 238
keywords: [Asset, Every, email, template, block, cloud, jpg, image, pdf, document, model, parses, stores, searches, assets]
---

# Asset Type

> Every asset has a type, such as email, template, block, cloud page, jpg image, or pdf document. The asset model parses, stores, and searches all assets in the same way, regardless of type, but the type is important to distinguish assets in queries and in the Content Builder UI.

# Asset Type

Every asset has a type, such as email, template, block, cloud page, jpg image, or pdf document. The asset model parses, stores, and searches all assets in the same way, regardless of type, but the type is important to distinguish assets in queries and in the Content Builder UI.

Add an asset type to the asset as an object, using the assetType attribute. When creating an asset, only an assetType.id is required. If the assetType.name is omitted or does not match the ID, the API automatically sets the name.

Creating a webpage (AssetTypeID 205) does not create the asset in the CloudPages UI.

## Sample Empty Asset

```json
{
  "name": "NTO Welcome Series Email",
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
