---
title: "Categories (Folders)"
domain: mc-apis
topic: categories-folders
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:15.632Z
estimatedTokens: 184
keywords: [Categories, Folders, assets, any, folder, known, users, move, asset, stores, attribute, category, Sample, Items]
---

> You can create assets in any folder known by your users, or move an existing asset into a folder. The asset stores the folder information in an attribute called category.

# Categories (Folders)

You can create assets in any folder known by your users, or move an existing asset into a folder. The asset stores the folder information in an attribute called category.

To create or move an asset into a folder, add a category to the asset as an object, using the category attribute. Add the ID of the category.

## Sample Asset with Category

```json
{
    "name": "NTO Welcome Series Email",
    "assetType": {
        "id": 207,
        "name": "templatebasedemail"
    },
    "category": { "id": 1234567 }
}
```

## Related Items

-   [Asset Model](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
-   [Asset Model Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)

## Related Topics

- Asset Model (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
- Asset Model Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
