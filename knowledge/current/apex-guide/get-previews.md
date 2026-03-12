---
title: "Get Previews"
domain: apex-guide
topic: get-previews
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.331Z
estimatedTokens: 121
keywords: [Previews, Call, preview, formats, their, respective, URLs]
---

# Get Previews

> Call a method to get all supported preview formats and their respective
    URLs.

# Get Previews

Call a method to get all supported preview formats and their respective URLs.

Call [getPreviews(repositoryId, repositoryFileId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getPreviews_1) to get all supported preview formats and their respective URLs and number of renditions. For each supported preview format, we show every rendition URL available.

```

```

## Code Examples

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId = 'document:1-zcA1BaeoQbo2_yNFiHCcK6QJTPmOke-kHFC4TYg3rk';
final ConnectApi.FilePreviewCollection previewsCollection = ConnectApi.ContentHub.getPreviews(gDriveRepositoryId, gDriveFileId);
for(ConnectApi.FilePreview filePreview : previewsCollection.previews){
   System.debug(String.format('Preview - URL: \'\'{0}\'\', format: \'\'{1}\'\', nbr of renditions for this format: {2}', new String[]{ filePreview.url, filePreview.format.name(),String.valueOf(filePreview.previewUrls.size())}));
   for(ConnectApi.FilePreviewUrl filePreviewUrl : filePreview.previewUrls){
      System.debug('-----> Rendition URL: ' + filePreviewUrl.previewUrl);
      }
}
```
