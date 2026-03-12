---
title: "Asset History"
domain: bi-dev-guide-rest-sdd
topic: asset-history
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.633Z
estimatedTokens: 311
keywords: [Asset, History, record]
---

# Asset History

> The asset history record.

# Asset History

The asset history record.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| created​By | Wave​User | The user who created the asset history record. | Small, 46.0 | 46.0 |
| created​Date | Date | The creation date of the asset history record. | Small, 46.0 | 46.0 |
| history​Url | String | The URL to the asset history metadata details. | Small, 46.0 | 46.0 |
| id | String | The ID for the asset history record. | Small, 46.0 | 46.0 |
| is​Current | Boolean | Indicates whether this history record is the current version of the asset (true) or not (false). | Small, 47.0 | 47.0 |
| label | String | The optional label tag for the asset history record. | Small, 46.0 | 46.0 |
| name | String | The developer name for the asset history record. | Small, 46.0 | 46.0 |
| preview​Url | String | The URL to preview how an asset looked at a particular point in time. This URL doesn't revert the current asset to the asset history record. | Small, 46.0 | 46.0 |
| revert​Url | String | The URL to revert the current asset to this asset history record. | Small, 46.0 | 46.0 |
| status | String | The status value of the asset. | Small, 49.0 | 49.0 |
