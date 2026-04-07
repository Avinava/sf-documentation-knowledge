---
title: "File Upload"
domain: mc-apis
topic: file-upload
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:06:21.829Z
estimatedTokens: 193
keywords: [File, Upload, asset, files, gif, pdf, png, created, model, named, extension, they, support, Sample, Items]
---

# File Upload

> Some asset types are files, such as gif, pdf, and png, and can be created using the asset model. Types are named based on the file extension they support.

# File Upload

Some asset types are files, such as gif, pdf, and png, and can be created using the asset model. Types are named based on the file extension they support.

Add a file to the asset as an encoded base64 string using the file attribute. The maximum size per file is 5 MB.

## Sample File Upload

```json
{
  "name": "1px transparent gif asset",
  "assetType": {
    "name": "gif",
    "id": 20
   },
  "file": "R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  "ModelVersion":2,
  "FileProperties":{
   "fileName":"1px transparent gif asset.gif"
 }
}
```

## Related Items

-   [Asset Model](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
-   [Asset Model Example](atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)

## Related Topics

- Asset Model (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset-model.htm)
- Asset Model Example (atlas.en-us.noversion.mc-apis.meta/mc-apis/asset_model_examples.htm)
