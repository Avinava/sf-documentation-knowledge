---
title: "ConnectApi.CdpAssetReferenceInput"
domain: apex-reference
topic: connectapicdpassetreferenceinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:36.908Z
keywords: [ConnectApi.CdpAssetReferenceInput]
---

# ConnectApi.CdpAssetReferenceInput

# ConnectApi.CdpAssetReferenceInput

Refernce to the model asset to use for the prediction request.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the asset. | One of id or name is required. | 58.0 |
| name | String | Name of the asset. | One of id or name is required. | 58.0 |
| namespace | String | Namespace of the asset. The default namespace is used by default. | Optional | 58.0 |