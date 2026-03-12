---
title: "Asset History"
domain: bi-dev-guide-rest
topic: asset-history
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:03.970Z
estimatedTokens: 292
keywords: [Asset, History, Analytics]
---

# Asset History

> The history of an Analytics asset.

# Asset History

The history of an Analytics asset.

## Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​By | Wave​User | The user who created the history record. | Small, 46.0 | 46.0 |
| created​Date | Date | The date the history record was created for the asset. | Small, 46.0 | 46.0 |
| history​Url | String | The url to the history metadata details. | Small, 46.0 | 46.0 |
| id | String | The id for the history record. | Small, 46.0 | 46.0 |
| is​Current | Boolean | Indicates whether this history record is the current version of the asset or not. | Small, 47.0 | 47.0 |
| label | String | The optional label for the history record. | Small, 46.0 | 46.0 |
| name | String | The generated name for the history record. | Small, 46.0 | 46.0 |
| preview​Url | String | The url to a preview of how an asset looked at a particular point in time. This url doesn’t revert the asset. | Small, 46.0 | 46.0 |
| revert​Url | String | The url to revert to this history record. | Small, 46.0 | 46.0 |
| status | String | The optional status value of the asset. | Small, 47.0 | 47.0 |

## Related Topics

- Wave​User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_user.htm)
