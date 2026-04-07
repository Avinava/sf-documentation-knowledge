---
title: "Download Provider Input"
domain: life-sciences-dev-guide
topic: download-provider-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:37:55.028Z
estimatedTokens: 175
keywords: [Download, Provider, external, identifier]
---

> The request representation to download provider data using an external identifier.

# Download Provider Input

The request representation to download provider data using an external identifier.

Properties

| Property Name | Type | Description | Required | Available Version |
| --- | --- | --- | --- | --- |
| country​Code | String | The country code where the search was performed. | Required | 66.0 |
| data​source | String | The external data source, such as One Key. | Optional | 66.0 |
| entity​Type | String | The type of entity, such as individual or workplace. | Required | 66.0 |
| external​Id | String | The unique external ID from the search response. | Required | 66.0 |
| in​Contract | Boolean | Indicates whether the record is currently in contract. | Optional | 66.0 |
