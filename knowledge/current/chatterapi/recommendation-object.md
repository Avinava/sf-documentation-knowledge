---
title: "Recommendation Object"
domain: chatterapi
topic: recommendation-object
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.712Z
estimatedTokens: 267
keywords: [Recommendation, Best, Action]
---

# Recommendation Object

> A Next Best Action recommendation object.

# Recommendation Object

A Next Best Action recommendation object.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| acceptanceLabel | String | Text indicating user acceptance of the recommendation. | Small, 45.0 | 45.0 |
| actionReference | String | Reference to the action to perform, for example, launching a flow. | Small, 45.0 | 45.0 |
| description | String | Description of the recommendation. | Small, 45.0 | 45.0 |
| externalId | String | External ID of the recommendation. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | Small, 46.0 | 46.0 |
| id | String | ID of the recommendation. | Small, 45.0 | 45.0 |
| image | Asset File | Image to display. | Small, 45.0 | 45.0 |
| name | String | Name of the recommendation. | Small, 45.0 | 45.0 |
| rejectionLabel | String | Text indicating user rejection of the recommendation. | Small, 45.0 | 45.0 |
| url | String | URL to the recommendation. | Small, 45.0 | 45.0 |

## Related Topics

- Asset File (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_asset.htm)
