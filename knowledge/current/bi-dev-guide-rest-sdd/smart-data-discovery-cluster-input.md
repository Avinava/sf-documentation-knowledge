---
title: "Smart Data Discovery Cluster Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-cluster-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.638Z
estimatedTokens: 128
keywords: [Smart, Discovery, Cluster, definitions]
---

> The input for cluster definitions.

# Smart Data Discovery Cluster Input

The input for cluster definitions.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| ignored | Boolean | Indicates whether the cluster is ignored (true) or not (false). | Required | 55.0 |
| label | String | The label for the cluster. | Optional | 55.0 |
| name | String | The name for the cluster. | Required | 55.0 |
| values | String[] | A list of values in the cluster. | Required | 55.0 |
