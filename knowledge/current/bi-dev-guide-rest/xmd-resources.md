---
title: "Xmd Resources"
domain: bi-dev-guide-rest
topic: xmd-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.903Z
estimatedTokens: 398
keywords: [Xmd, Resources, Manages, Xmds, Analytics, datasets, assets]
---

# Xmd Resources

> Manages Xmds for Analytics datasets and assets.

# Xmd Resources

Manages Xmds for Analytics datasets and assets.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Xmd List Resource | Returns a collection of Xmd resources for a version of a dataset. This collection is for main, system, and user Xmd types. | GET | /wave/datasets/<datasetID>​/versions/<versionId>/xmds |
| Xmd Resource | Returns the extended metadata (XMD) for a version of a dataset and updates the user XMD file. | GET PUT | /wave/datasets/<datasetID>​/versions/<versionId>​/xmds/<xmdType> |
| Asset Xmd Resource | Returns the extended metadata (Xmd) that is associated with an asset, like a dashboard. | GET | /wave/assets/<assetID>/xmds/asset |

-   **[Xmd List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmds.htm)**
    Returns a list of Xmd resources for a version of a dataset. This list is for main, system, and user Xmd types. To view asset type Xmds, refer to the [Asset Xmd API resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm "Returns the extended metadata (Xmd) that is associated with an asset, like a dashboard.").
-   **[Xmd Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_main.htm)**
    Returns the extended metadata (Xmd) for a version of a dataset and updates the user Xmd file.
-   **[Asset Xmd Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm)**
    Returns the extended metadata (Xmd) that is associated with an asset, like a dashboard.

## Related Topics

- Xmd List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmds.htm)
- Xmd Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_main.htm)
- Asset Xmd Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm)
- Asset Xmd API resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_xmd_asset.htm)
