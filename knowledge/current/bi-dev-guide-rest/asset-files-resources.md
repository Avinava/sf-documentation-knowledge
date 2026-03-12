---
title: "Asset Files Resources"
domain: bi-dev-guide-rest
topic: asset-files-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.121Z
estimatedTokens: 253
keywords: [Asset, Files, Resources, Analytics, assets, contain, define, their, previews, collection, individual]
---

# Asset Files Resources

> Analytics assets contain files to define their previews. Get a collection of files available and individual files, and create and update asset files

# Asset Files Resources

Analytics assets contain files to define their previews. Get a collection of files available and individual files, and create and update asset files

## Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Asset Files List Resource | Returns a collection of asset files for an asset and creates an asset file. | GET POST | /analytics​/assetfiles/​<assetIdOrAPiName>/files |
| Asset File Resource | Returns a preview file for an asset and updates the file. | GET PUT | /analytics​/assetfiles/​<assetIdOrAPiName>/files/​<fileId> |

-   **[Asset Files List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_assetfiles_id_files.htm)**
    Returns a collection of asset files for an asset and creates an asset file.
-   **[Asset File Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_assetfiles_id_files_id.htm)**
    Returns a preview file for an asset and updates the file.

## Related Topics

- Asset Files List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_assetfiles_id_files.htm)
- Asset File Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_assetfiles_id_files_id.htm)
