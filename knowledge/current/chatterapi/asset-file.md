---
title: "Asset File"
domain: chatterapi
topic: asset-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.344Z
estimatedTokens: 380
keywords: [Asset, File]
---

# Asset File

> An asset file.

# Asset File

An asset file.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| baseAssetUrl | String | Base download URL of the asset. | Small, 38.0 | 38.0 |
| base​Unauthenticated​AssetUrl | String | Base download URL of the asset for unauthenticated users if isVisibleByExternalUsers is true, otherwise null. | Small, 43.0 | 43.0 |
| id | String | ID of the asset. | Small, 38.0 | 38.0 |
| isVisibleBy​ExternalUsers | Boolean | Indicates whether unauthenticated users can see the asset file (true) or not (false). | Small, 43.0 | 43.0 |
| masterLabel | String | Label of the asset. | Small, 38.0 | 38.0 |
| name | String | Unique name of the asset. | Small, 38.0 | 38.0 |
| namespacePrefix | String | Namespace prefix of the package containing the asset. | Small, 38.0 | 38.0 |
| type | String | Type of asset. | Small, 38.0 | 38.0 |

#### See Also

-   [File Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_details.htm "Includes all the File Summary response body with these additional items.")

-   [Recommendation Object](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_proposition.htm "A Next Best Action recommendation object.")

-   [Next Best Action Native Recommendation](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_proposition_recommendation.htm "A record the user is recommended to take action on.")

## Code Examples

```
/connect/files/fileId/asset
```

```
/connect/communities/communityId/files/fileId/asset
```

## Related Topics

- File Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_details.htm)
- Recommendation Object (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_proposition.htm)
- Next Best Action Native Recommendation (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_n_b_a_proposition_recommendation.htm)
