---
title: "ConnectApi.InsightValuesOutputRepresentation"
domain: apex-reference
topic: connectapiinsightvaluesoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.003Z
keywords: [ConnectApi.InsightValuesOutputRepresentation]
---

# ConnectApi.InsightValuesOutputRepresentation

# ConnectApi.InsightValuesOutputRepresentation

Insight value details for a business objective, or goal.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contextId | String | Salesforce record ID of the record that the insight is based on. | 62.0 |
| name | String | Name of the Salesforce record that the insight is based on. | 62.0 |
| previousValue | Double | Value of the insight for the previous timeframe based on the key performance indicator. | 62.0 |
| value | Double | Value of the insight for the current timeframe based on the key performance indicator. | 62.0 |