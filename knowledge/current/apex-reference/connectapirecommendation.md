---
title: "ConnectApi.Recommendation"
domain: apex-reference
topic: connectapirecommendation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.799Z
keywords: [ConnectApi.Recommendation]
---

# ConnectApi.Recommendation

# ConnectApi.Recommendation

A Next Best Action recommendation object.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| acceptanceLabel | String | Text indicating user acceptance of the recommendation. | 45.0 |
| actionReference | String | Reference to the action to perform, for example, launching a flow. | 45.0 |
| description | String | Description of the recommendation. | 45.0 |
| externalId | String | External ID of the recommendation. This ID doesn’t need to be a Salesforce 18-character ID. For example, it can be a product number from an external system. | 46.0 |
| id | String | ID of the recommendation. | 45.0 |
| image | ConnectApi.​FileAsset | Image to display. | 45.0 |
| name | String | Name of the recommendation. | 45.0 |
| rejectionLabel | String | Text indicating user rejection of the recommendation. | 45.0 |
| url | String | URL to the recommendation. | 45.0 |